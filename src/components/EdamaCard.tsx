"use client";

import { EdamamRecipeInterface } from "@/types/EdamamTypes";
import LabelListing from "./ultilities/labelListing";
import {
  ChevronDoubleRightIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/solid";
import { useContext, useEffect, useMemo, useState } from "react";
import { addFavoriteRecipe } from "@/services/fetchWebContent";
import { RecipeLink } from "@/types/UserTypes";
import { AddFavAction } from "@/store/actions/userActions";
import { redirect } from "next/navigation";
import { UserContext } from "@/store/contexts/userContext";
import { EdamamContext } from "@/store/contexts/edamamContext";
import {
  AuthenticationContext,
  EnumAuthenticationStatus,
} from "@/store/contexts/authContext";
import { useRouter } from "next/navigation";
import { checkAuthentication } from "@/services/authentication";

export default function EdamamCard({
  recipe,
  recipe_id,
}: {
  recipe: EdamamRecipeInterface;
  recipe_id: string;
}) {
  const { user, userDispatch } = useContext(UserContext);
  const { edamam, edamamDispatch } = useContext(EdamamContext);
  const { auth, authDispatch } = useContext(AuthenticationContext);
  const router = useRouter();
  function gatherFavoriteRecipeInfo(): RecipeLink {
    return {
      id: recipe_id,
      name: recipe.label,
      image: {
        uri: recipe.image,
        title: recipe.label,
      },
    };
  }

  function isFavoriteAdded(id: string): boolean {
    let added = false;
    user.favoriteRecipes?.links.forEach((item) => {
      if (item.id == id) {
        added = true;
      }
    });
    return added;
  }
  const isAdded = useMemo(
    () => isFavoriteAdded(recipe_id),
    [user.favoriteRecipes, edamam.recipeList, recipe]
  );
  const recipeLink = useMemo(
    () => gatherFavoriteRecipeInfo(),
    [recipe, edamam.recipeList]
  );

  const handleClickFavorite = async (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    const result = await checkAuthentication();

    if (auth.isAuthenticated == EnumAuthenticationStatus.Anonymous) {
      alert("Sign in to add favorite.");
      return router.push("/sign-in");
    }

    if (!result.status) {
      alert("Session expired.");
      router.push("/sign-in");
    }

    const response = await addFavoriteRecipe(recipeLink);
    if (response.status && response.data) {
      userDispatch(AddFavAction(response.data));
    }
  };
  return (
    <div className="h-min-[500px] gap-y-3 bg-white border shadow-sm shadow-slate-500 p-3 flex flex-col text-stone-800 text-sm relative">
      <h5 className="capitalize font-semibold text-lg min-h-min">
        {recipe.label}
      </h5>
      <div className="flex gap-x-1 h-max-1/3">
        <div className="w-1/3 h-full">
          <img src={recipe.image} className="block min-h-auto max-w-full" />
        </div>
        <div className="w-2/3">
          <LabelListing labelArray={recipe.cuisineType} title="Cuisine" />
          <LabelListing labelArray={recipe.dietLabels} title="Diet Plans" />
          <LabelListing labelArray={recipe.healthLabels} title="Healths" />
          <cite>
            <a
              href={recipe.url}
              target="_blank"
              className="flex gap-x-1 items-center p-2 text-blue-600 font-semibold"
            >
              Read more <ChevronDoubleRightIcon className="w-5" />
            </a>
          </cite>
        </div>
      </div>
      <div className="bg-slate-200 w-full h-max-1/3">
        <LabelListing labelArray={recipe.ingredientLines} title="Ingredients" />
      </div>
      {isAdded ? null : (
        <div
          className="cursor-pointer absolute top-10 right-10"
          onClick={handleClickFavorite}
        >
          <HeartIcon className="w-5 text-pink-700 transition-all hover:text-pink-500 hover:scale-150" />
        </div>
      )}
    </div>
  );
}

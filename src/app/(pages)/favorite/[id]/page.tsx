"use client";

import EdamamCard from "@/components/EdamaCard";
import { fetchRecipeDetail } from "@/services/fetchWebContent";
import {
  AuthenticationContext,
  EnumAuthenticationStatus,
} from "@/store/contexts/authContext";
import {
  EdamamHitInterfacae,
  EdamamRecipeInterface,
} from "@/types/EdamamTypes";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

export default function RecipeDetail({ params }: { params: { id: string } }) {
  const [recipe, setRecipe] = useState<EdamamHitInterfacae | null>(null);
  const { auth } = useContext(AuthenticationContext);
  const router = useRouter();
  let rid = () => {
    if (recipe && recipe._links.self) {
      let url = new URL(
        recipe._links.self.href,
        process.env.NEXT_PUBLIC_RECIPE_PATH
      );
      return url.pathname.split("/").pop() ?? "";
    }
    return "#";
  };
  useEffect(() => {
    if (auth.isAuthenticated == EnumAuthenticationStatus.Anonymous) {
      router.push("/sign-in");
    }
    (async () => {
      const response = await fetchRecipeDetail(params.id);
      if (response.status && response.data) {
        setRecipe(response.data);
        console.log(response.data);
      }
    })();
  }, [params.id, auth.isAuthenticated]);
  return (
    <div>
      {recipe != null ? (
        <EdamamCard recipe={recipe.recipe} recipe_id={rid()} />
      ) : null}
    </div>
  );
}

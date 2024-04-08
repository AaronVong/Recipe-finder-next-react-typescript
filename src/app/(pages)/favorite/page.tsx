"use client";
import ListItem from "@/components/ultilities/listItem";
import Loading from "@/components/ultilities/loading";
import { getUserInfo } from "@/services/authentication";
import { getFavoriteRecipeList } from "@/services/fetchWebContent";
import { GetFavoriteAction } from "@/store/actions/userActions";
import {
  AuthenticationContext,
  EnumAuthenticationStatus,
} from "@/store/contexts/authContext";
import { UserContext } from "@/store/contexts/userContext";
import { redirect, useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

export default function Favorite() {
  const { auth } = useContext(AuthenticationContext);
  const { user, userDispatch } = useContext(UserContext);
  const router = useRouter();
  const loadFavList = async () => {
    const response = await getFavoriteRecipeList();
    if (response.status && response.data) {
      userDispatch(GetFavoriteAction(response.data));
    }
  };
  useEffect(() => {
    if (auth.isAuthenticated == EnumAuthenticationStatus.Anonymous) {
      router.push("/sign-in");
    }
    loadFavList();
  }, []);

  const renderFavItems = () => {
    return user.favoriteRecipes?.links.map((item) => {
      return (
        <ListItem textWithLink={false} key={item.id} itemClasses="bg-stone-500">
          <h5>{item.name}</h5>
          <img src={item.image?.uri} />
        </ListItem>
      );
    });
  };
  return (
    <div>
      {auth.isAuthenticated == -1 ? (
        <Loading>Verifying...</Loading>
      ) : (
        <ul>{renderFavItems()}</ul>
      )}
    </div>
  );
}

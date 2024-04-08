"use client";

import EdamamCard from "@/components/EdamaCard";
import Pagination from "@/components/pagination";
import SearchForm from "@/components/searchForm";
import { getFavoriteRecipeList } from "@/services/fetchWebContent";
import { GetFavoriteAction } from "@/store/actions/userActions";
import { GlobalContext } from "@/store/contexts";
import {
  AuthenticationContext,
  EnumAuthenticationStatus,
} from "@/store/contexts/authContext";
import { EdamamContext } from "@/store/contexts/edamamContext";
import { UserContext } from "@/store/contexts/userContext";
import { useContext, useEffect } from "react";

export default function Home() {
  const { edamam, edamamDispatch } = useContext(EdamamContext);
  const { userDispatch } = useContext(UserContext);
  const { auth } = useContext(AuthenticationContext);
  const renderRecipe = edamam.recipeList[edamam.curPage]?.hits.map(
    (item, index) => {
      if (item._links.self) {
        let url = new URL(
          item._links.self.href,
          process.env.NEXT_PUBLIC_RECIPE_PATH
        );
        let link = url.pathname.split("/").pop() ?? "";
        return <EdamamCard recipe={item.recipe} key={index} recipe_id={link} />;
      }
      return null;
    }
  );

  useEffect(() => {
    if (auth.isAuthenticated == EnumAuthenticationStatus.Authenticated) {
      (async () => {
        const response = await getFavoriteRecipeList();
        if (response.data && response.status) {
          userDispatch(GetFavoriteAction(response.data));
        }
      })();
    }
  }, []);
  return (
    <div className="relative">
      <SearchForm />
      {edamam.isLoading ? (
        "Loading..."
      ) : (
        <>
          <Pagination />
          <div className="grid grid-cols-2 gap-2 m-3">{renderRecipe}</div>
          <Pagination />
        </>
      )}
    </div>
  );
}

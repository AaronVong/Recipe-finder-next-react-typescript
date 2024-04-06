"use client";

import EdamamCard from "@/components/EdamaCard";
import Pagination from "@/components/pagination";
import SearchForm from "@/components/searchForm";
import { getFavoriteRecipeList } from "@/services/fetchWebContent";
import { GetFavoriteAction, SetAuthAction } from "@/store/actions/userActions";
import { GlobalContext } from "@/store/contexts";
import { useContext, useEffect } from "react";

export default function Home() {
  const { state, dispatch } = useContext(GlobalContext);
  const renderRecipe = state.edamama.recipeList[
    state.edamama.curPage
  ]?.hits.map((item, index) => {
    if (item._links.self) {
      let url = new URL(
        item._links.self.href,
        process.env.NEXT_PUBLIC_RECIPE_PATH
      );
      let link = url.pathname.split("/").pop() ?? "";
      return <EdamamCard recipe={item.recipe} key={index} recipe_id={link} />;
    }
    return null;
  });

  useEffect(() => {
    (async () => {
      const response = await getFavoriteRecipeList();
      if (response.data && response.status) {
        dispatch(GetFavoriteAction(response.data));
      }
    })();
  }, []);
  return (
    <div className="relative">
      <SearchForm />
      {state.edamama.isLoading ? (
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

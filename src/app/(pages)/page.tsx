"use client";

import EdamamCard from "@/components/EdamaCard";
import Pagination from "@/components/pagination";
import SearchForm from "@/components/searchForm";
import { SetAuthAction } from "@/store/actions/userActions";
import { GlobalContext } from "@/store/contexts";
import { useContext } from "react";

export default function Home() {
  const { state, dispatch } = useContext(GlobalContext);
  const renderRecipe = state.edamama.recipeList[
    state.edamama.curPage
  ]?.hits.map((item, index) => {
    let link = item._links.self?.href.split("/").pop() ?? "";
    return <EdamamCard recipe={item.recipe} key={index} recipe_id={link} />;
  });
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

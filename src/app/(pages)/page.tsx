"use client";

import EdamamCard from "@/components/EdamaCard";
import Pagination from "@/components/pagination";
import SearchForm from "@/components/searchForm";
import { MainContext } from "@/store/contexts";
import { useContext } from "react";

export default function Home() {
  const { state, dispatch } = useContext(MainContext);
  const renderRecipe = state.edamama.recipeList[
    state.edamama.curPage
  ]?.hits.map((item, index) => {
    return <EdamamCard recipe={item.recipe} key={index} />;
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

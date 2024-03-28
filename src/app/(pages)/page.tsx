"use client";

import Pagination from "@/components/pagination";
import SearchForm from "@/components/searchForm";
import { MainContext } from "@/store/contexts";
import { useContext } from "react";

export default function Home() {
  const { state, dispatch } = useContext(MainContext);
  const renderRecipe = state.edamama.recipeList[
    state.edamama.curPage
  ]?.hits.map((item, index) => {
    return (
      <li key={index}>
        {item.recipe.label}
        <img src={item.recipe.image} />
      </li>
    );
  });
  return (
    <div className="relative">
      <SearchForm />
      <Pagination />
      <div className="grid grid-cols-5">{renderRecipe}</div>
      <Pagination />
    </div>
  );
}

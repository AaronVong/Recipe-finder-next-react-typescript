"use client";

import Pagination from "@/components/pagination";
import SearchForm from "@/components/searchForm";
import { nextPageFetch } from "@/services/fetchWebContent";
import { NextPageAction } from "@/store/actions/edamamActions";
import { MainContext } from "@/store/contexts";
import { EdamamHitInterfacae } from "@/types/EdamamTypes";
import { ReactElement, useContext } from "react";

export default function Home() {
  const { state, dispatch } = useContext(MainContext);
  const renderRecipe = state.edamama.recipeList[
    state.edamama.curPage
  ]?.hits.map((item, index) => {
    return <li key={index}>{item.recipe.label}</li>;
  });
  return (
    <div className="relative">
      <SearchForm />
      <div>{renderRecipe}</div>
      <Pagination />
    </div>
  );
}

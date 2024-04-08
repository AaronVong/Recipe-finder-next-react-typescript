"use client";

import { useContext, useReducer, useState } from "react";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/outline";
import { searchRecipe } from "@/services/fetchWebContent";
import { GlobalContext } from "@/store/contexts";
import {
  SearchRecipeAction,
  SetLoadingAction,
} from "@/store/actions/edamamActions";
import { EdamamContext } from "@/store/contexts/edamamContext";
export default function SearchForm() {
  const { edamam, edamamDispatch } = useContext(EdamamContext);
  const [key, setKey] = useState<string>("");
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!key) {
      return;
    }
    edamamDispatch(SetLoadingAction(true));
    // call API
    const data = await searchRecipe(key);
    if (data) {
      // set response data to react
      edamamDispatch(SearchRecipeAction(data));
    } else {
      alert("Not found any recipe.");
    }
    edamamDispatch(SetLoadingAction(false));
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setKey(value);
  }
  return (
    <form className="w-full py-4" onSubmit={handleSubmit}>
      <div className="w-full flex justify-center">
        <MagnifyingGlassCircleIcon className="w-10 bg-slate-200 rounded-tl-md rounded-bl-md px-1 text-stone-500" />
        <input
          className="group focus:bg-slate-300 transition-colors text-stone-500 bg-slate-200 block w-1/2 rounded-tr-md rounded-br-md border p-2 hover:outline-none focus:outline-none"
          placeholder="What recipe you looking for..."
          value={key}
          onChange={handleChange}
        ></input>
      </div>
    </form>
  );
}

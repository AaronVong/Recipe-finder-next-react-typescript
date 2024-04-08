import { nextPageFetch } from "@/services/fetchWebContent";
import {
  NextPageAction,
  SetCurPageAction,
  SetLoadingAction,
} from "@/store/actions/edamamActions";
import { EdamamContext } from "@/store/contexts/edamamContext";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";

export default function Pagination() {
  const { edamam, edamamDispatch } = useContext(EdamamContext);
  async function handleNextClick() {
    if (edamam.recipeList.length == 0) {
      return;
    }
    edamamDispatch(SetLoadingAction(true));
    if (edamam.recipeList[edamam.curPage + 1]) {
      edamamDispatch(SetCurPageAction(edamam.curPage + 1));
    } else {
      if (!edamam.recipeList[edamam.curPage]._links.next) {
        edamamDispatch(SetLoadingAction(false));
        return;
      }
      const data = await nextPageFetch(
        edamam.recipeList[edamam.curPage]._links?.next?.href
      );
      edamamDispatch(NextPageAction(data));
      edamamDispatch(SetCurPageAction(edamam.curPage + 1));
    }
    edamamDispatch(SetLoadingAction(false));
  }

  function handlePrePageClick() {
    edamamDispatch(SetLoadingAction(true));
    if (edamam.recipeList.length == 0 || edamam.curPage == 0) {
      edamamDispatch(SetLoadingAction(false));
      return;
    }
    edamamDispatch(SetCurPageAction(edamam.curPage - 1));
    edamamDispatch(SetLoadingAction(false));
  }
  return (
    <ul className="flex gap-x-2 justify-center items-center">
      <li className="w-10 cursor-pointer group" onClick={handlePrePageClick}>
        <ChevronLeftIcon className="w-10 bg-slate-200 rounded text-stone-500 group-hover:bg-slate-500 group-hover:text-stone-200 transition-colors" />
      </li>
      <li className="w-10 text-center">
        <span>{edamam.curPage}</span>
      </li>
      <li className="w-10 cursor-pointer group" onClick={handleNextClick}>
        <ChevronRightIcon className="w- bg-slate-200 rounded text-stone-500 group-hover:bg-slate-500 group-hover:text-stone-200 transition-colors" />
      </li>
    </ul>
  );
}

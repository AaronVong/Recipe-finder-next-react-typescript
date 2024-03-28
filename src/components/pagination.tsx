import { nextPageFetch } from "@/services/fetchWebContent";
import {
  NextPageAction,
  SetCurPageAction,
} from "@/store/actions/edamamActions";
import { MainContext } from "@/store/contexts";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";

export default function Pagination() {
  const { state, dispatch } = useContext(MainContext);
  async function handleNextClick() {
    if (state.edamama.recipeList.length == 0) {
      return;
    } else if (state.edamama.recipeList[state.edamama.curPage + 1]) {
      dispatch(SetCurPageAction(state.edamama.curPage + 1));
    } else {
      if (!state.edamama.recipeList[state.edamama.curPage]._links.next) {
        return;
      }
      const data = await nextPageFetch(
        state.edamama.recipeList[state.edamama.curPage]._links?.next?.href
      );
      dispatch(NextPageAction(data));
    }
  }

  function handlePrePageClick() {
    if (state.edamama.recipeList.length == 0 || state.edamama.curPage == 0) {
      return;
    }
    dispatch(SetCurPageAction(state.edamama.curPage - 1));
  }
  return (
    <ul className="flex gap-x-2 justify-center items-center">
      <li className="w-10 cursor-pointer group" onClick={handlePrePageClick}>
        <ChevronLeftIcon className="w-10 bg-slate-200 rounded text-stone-500 group-hover:bg-slate-500 group-hover:text-stone-200 transition-colors" />
      </li>
      <li className="w-10 text-center">
        <span>
          {state.edamama.curPage == 0
            ? state.edamama.curPage
            : state.edamama.curPage + 1}
        </span>
      </li>
      <li className="w-10 cursor-pointer group" onClick={handleNextClick}>
        <ChevronRightIcon className="w- bg-slate-200 rounded text-stone-500 group-hover:bg-slate-500 group-hover:text-stone-200 transition-colors" />
      </li>
    </ul>
  );
}

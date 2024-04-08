import { createContext, ReactElement, useContext, useReducer } from "react";
import {
  EdamamHitInterfacae,
  EdamamResponseInterface,
} from "@/types/EdamamTypes";
import EdamamActions from "../actions/edamamActions";

interface EdamamStateInterface {
  recipeList: Array<EdamamResponseInterface>;
  recipe: EdamamHitInterfacae | null;
  curPage: number;
  isLoading: boolean;
}

let initEdamamState: EdamamStateInterface = {
  recipeList: [],
  recipe: null,
  curPage: 0,
  isLoading: false,
};

const EdamamContext = createContext<{
  edamam: EdamamStateInterface;
  edamamDispatch: React.Dispatch<EdamamActions>;
}>({
  edamam: initEdamamState,
  edamamDispatch: () => {},
});

export { initEdamamState, EdamamContext };
export type { EdamamStateInterface };

import { createContext, ReactElement, useContext, useReducer } from "react";
import {
  EdamamHitInterfacae,
  EdamamResponseInterface,
} from "@/types/EdamamTypes";

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

export { initEdamamState };
export type { EdamamStateInterface };

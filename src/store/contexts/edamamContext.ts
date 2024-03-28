import { createContext, ReactElement, useContext, useReducer } from "react";
import {
  EdamamHitInterfacae,
  EdamamResponseInterface,
} from "@/types/EdamamTypes";

interface EdamamState {
  recipeList: Array<EdamamResponseInterface>;
  recipe: EdamamHitInterfacae | null;
  curPage: number;
}

let initEdamamState: EdamamState = {
  recipeList: [],
  recipe: null,
  curPage: 0,
};

export { initEdamamState };
export type { EdamamState };

import { createContext, ReactElement, useContext, useReducer } from "react";
import {
  EdamamHitInterfacae,
  EdamamResponseInterface,
} from "@/types/EdamamTypes";

interface EdamamState {
  recipeList: Array<EdamamResponseInterface>;
  recipe: EdamamHitInterfacae | null;
}

let initEdamamState: EdamamState = {
  recipeList: [],
  recipe: null,
};

export { initEdamamState };
export type { EdamamState };

/**
 * Combine all app context into one
 */

import { createContext, useReducer } from "react";
import { EdamamState } from "./edamamContext";
import mainReducer from "../reducers";
import ATActions from "../actions/edamamActions";

interface AppState {
  edamama: EdamamState;
  otherState: String;
}

const initAppState: AppState = {
  edamama: {
    recipeList: {
      from: 0,
      to: 0,
      count: 0,
      _link: null,
      hits: [],
    },
    recipe: null,
  },
  otherState: "DEMACIA",
};

const MainContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<ATActions>;
}>({
  state: initAppState,
  dispatch: () => null,
});

export { initAppState, MainContext };
export type { AppState };

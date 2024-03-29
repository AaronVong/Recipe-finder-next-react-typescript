/**
 * Combine all app context into one
 */

import { createContext, useReducer } from "react";
import { EdamamState, initEdamamState } from "./edamamContext";
import ATActions from "../actions/edamamActions";

interface AppState {
  edamama: EdamamState;
  otherState: String;
}

const initAppState: AppState = {
  edamama: initEdamamState,
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

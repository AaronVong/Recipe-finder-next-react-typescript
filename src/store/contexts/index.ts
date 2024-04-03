/**
 * Combine all app context into one
 */

import { createContext, useReducer } from "react";
import { EdamamStateInterface, initEdamamState } from "./edamamContext";
import { initUserState, UserStateInterface } from "./userContext";
import AppActions from "../actions";

interface GlobalStateInterface {
  edamama: EdamamStateInterface;
  user: UserStateInterface;
}

const initGlobalState: GlobalStateInterface = {
  edamama: initEdamamState,
  user: initUserState,
};

const GlobalContext = createContext<{
  state: GlobalStateInterface;
  dispatch: React.Dispatch<AppActions>;
}>({
  state: initGlobalState,
  dispatch: () => null,
});

export { initGlobalState, GlobalContext };
export type { GlobalStateInterface };

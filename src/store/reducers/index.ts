/**
 * This file will combine all reducer into 1
 */

import { EdamamResponseInterface } from "@/types/EdamamTypes";
import ATActions from "../actions/edamamActions";
import { EdamamState } from "@/store/contexts/edamamContext";
import EdamamReducer from "./reducerEdamam";
import { AppState } from "../contexts";

const mainReducer = (state: AppState, action: ATActions): AppState => ({
  edamama: EdamamReducer(state.edamama, action),
  otherState: "Demacia",
});

export default mainReducer;

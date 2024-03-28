/**
 * This file will combine all reducer into 1
 */

import ATActions from "../actions/edamamActions";
import EdamamReducer from "./reducerEdamam";
import { AppState } from "../contexts";

const mainReducer = (state: AppState, action: ATActions): AppState => ({
  edamama: EdamamReducer(state.edamama, action),
  otherState: "Demacia",
});

export default mainReducer;

/**
 * This file will combine all reducer into 1
 */

import edamamReducer from "./reducerEdamam";
import { GlobalStateInterface } from "../contexts";
import AppActions from "../actions";
import userReducer from "./userReducer";

const mainReducer = (
  state: GlobalStateInterface,
  action: AppActions
): GlobalStateInterface => ({
  edamama: edamamReducer(state.edamama, action),
  user: userReducer(state.user, action),
});

export default mainReducer;

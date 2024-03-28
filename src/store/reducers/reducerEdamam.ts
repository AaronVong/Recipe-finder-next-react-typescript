import ATActions, { EnumEdamam } from "../actions/edamamActions";
import { EdamamState } from "@/store/contexts/edamamContext";

function EdamamReducer(state: EdamamState, action: ATActions): EdamamState {
  switch (action.type) {
    case EnumEdamam.SearchRecipe:
      return {
        ...state,
        recipeList: [action.payload],
      };
    case EnumEdamam.NextPage:
      return {
        ...state,
        recipeList: [...state.recipeList, action.payload],
      };
    case EnumEdamam.RecipeDetail:
      return {
        ...state,
        recipe: action.payload,
      };
    default:
      return state;
  }
}

export default EdamamReducer;

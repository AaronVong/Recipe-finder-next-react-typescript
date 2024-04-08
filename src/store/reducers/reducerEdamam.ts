import EdamamActionsType, { EnumEdamam } from "../actions/edamamActions";
import { EdamamStateInterface } from "@/store/contexts/edamamContext";

function edamamReducer(
  state: EdamamStateInterface,
  action: EdamamActionsType
): EdamamStateInterface {
  switch (action.type) {
    case EnumEdamam.SearchRecipe:
      return {
        ...state,
        recipeList: [action.payload],
        curPage: 0,
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
    case EnumEdamam.SetPage:
      return {
        ...state,
        curPage: action.payload,
      };
    case EnumEdamam.SetLoading:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
}

export default edamamReducer;

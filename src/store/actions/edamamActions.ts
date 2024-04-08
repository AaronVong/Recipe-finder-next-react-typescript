import {
  EdamamResponseInterface,
  EdamamHitInterfacae,
} from "@/types/EdamamTypes";

/**
 * ================================
 * Define interfaces and types for Edamam actions
 * ================================
 */
enum EnumEdamam {
  SearchRecipe = "SEARCH_RECIPE",
  RecipeDetail = "RECIPE_DETAIL",
  NextPage = "NEXT_PAGE",
  SetPage = "SET_PAGE",
  SetLoading = "SET_LOADING",
}

type RecipeLoadingActionType = {
  type: EnumEdamam.SetLoading;
  payload: boolean;
};

type SearchRecipeActionType = {
  type: EnumEdamam.SearchRecipe;
  payload: EdamamResponseInterface;
};

type RecipeDetailActionType = {
  type: EnumEdamam.RecipeDetail;
  payload: EdamamHitInterfacae;
};

type NextPageActionType = {
  type: EnumEdamam.NextPage;
  payload: EdamamResponseInterface;
};

type SetCurPageActionType = {
  type: EnumEdamam.SetPage;
  payload: number;
};

// Combine all actions type and interface into one type
type EdamamActionsType =
  | RecipeLoadingActionType
  | SearchRecipeActionType
  | RecipeDetailActionType
  | NextPageActionType
  | SetCurPageActionType;

/**
 * ================================
 * Generate action (pure function)
 * ================================
 */

function SearchRecipeAction(
  payload: EdamamResponseInterface
): SearchRecipeActionType {
  return {
    type: EnumEdamam.SearchRecipe,
    payload,
  };
}

function NextPageAction(payload: EdamamResponseInterface): NextPageActionType {
  return {
    type: EnumEdamam.NextPage,
    payload,
  };
}

function SetCurPageAction(payload: number): SetCurPageActionType {
  return {
    type: EnumEdamam.SetPage,
    payload,
  };
}

function RecipeDetailAction(
  payload: EdamamHitInterfacae
): RecipeDetailActionType {
  return {
    type: EnumEdamam.RecipeDetail,
    payload,
  };
}

function SetLoadingAction(payload: boolean): RecipeLoadingActionType {
  return {
    type: EnumEdamam.SetLoading,
    payload,
  };
}
/**
 * ================================
 * Export
 * ================================
 */
export default EdamamActionsType;
export type {
  RecipeLoadingActionType,
  SearchRecipeActionType,
  RecipeDetailActionType,
  NextPageActionType,
  SetCurPageActionType,
};
export {
  EnumEdamam,
  SearchRecipeAction,
  NextPageAction,
  SetCurPageAction,
  SetLoadingAction,
};

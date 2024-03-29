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

interface AIRecipeLoading {
  type: EnumEdamam.SetLoading;
  payload: boolean;
}

interface AISearchRecipe {
  type: EnumEdamam.SearchRecipe;
  payload: EdamamResponseInterface;
}

interface AIRecipeDetail {
  type: EnumEdamam.RecipeDetail;
  payload: EdamamHitInterfacae;
}

interface AINextPage {
  type: EnumEdamam.NextPage;
  payload: EdamamResponseInterface;
}

interface AICurPage {
  type: EnumEdamam.SetPage;
  payload: number;
}

// Combine all actions type and interface into one type
type ATActions =
  | AISearchRecipe
  | AIRecipeDetail
  | AINextPage
  | AICurPage
  | AIRecipeLoading;

/**
 * ================================
 * Generate action (pure function)
 * ================================
 */

function SearchRecipeAction(payload: EdamamResponseInterface): AISearchRecipe {
  return {
    type: EnumEdamam.SearchRecipe,
    payload,
  };
}

function NextPageAction(payload: EdamamResponseInterface): AINextPage {
  return {
    type: EnumEdamam.NextPage,
    payload,
  };
}

function SetCurPageAction(payload: number): AICurPage {
  return {
    type: EnumEdamam.SetPage,
    payload,
  };
}

function RecipeDetailAction(payload: EdamamHitInterfacae): AIRecipeDetail {
  return {
    type: EnumEdamam.RecipeDetail,
    payload,
  };
}

function SetLoadingAction(payload: boolean): AIRecipeLoading {
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
export default ATActions;
export type {
  AISearchRecipe,
  AIRecipeDetail,
  AINextPage,
  AICurPage,
  AIRecipeLoading,
};
export {
  EnumEdamam,
  SearchRecipeAction,
  NextPageAction,
  SetCurPageAction,
  SetLoadingAction,
};

import {
  EdamamResponseInterface,
  EdamamHitInterfacae,
} from "@/types/EdamamTypes";
import { AuthInterface, FavortieRecipeInterafce } from "@/types/UserTypes";

/**
 * ================================
 * Define interfaces and types for Edamam actions
 * ================================
 */
enum EnumUser {
  GetFavorite = "GEt_FAVORITE",
  SetLoading = "SET_LOADING",
  SetAuth = "SET_AUTH",
  SetEmail = "SET_EMAIL",
}

type GetFavoriteActionType = {
  type: EnumUser.GetFavorite;
  payload: FavortieRecipeInterafce;
};

type SetLoadingActionType = {
  type: EnumUser.SetLoading;
  payload: boolean;
};

type SetAuthActionType = {
  type: EnumUser.SetAuth;
  payload: AuthInterface;
};

type SetUserEmailActionType = {
  type: EnumUser.SetEmail;
  payload: string;
};
// Combine all actions type and interface into one type
type UserActions =
  | GetFavoriteActionType
  | SetLoadingActionType
  | SetAuthActionType
  | SetUserEmailActionType;

/**
 * ================================
 * Generate action (pure function)
 * ================================
 */

function GetFavoriteAction(
  payload: FavortieRecipeInterafce
): GetFavoriteActionType {
  return {
    type: EnumUser.GetFavorite,
    payload,
  };
}

function SetLoadingAction(payload: boolean): SetLoadingActionType {
  return {
    type: EnumUser.SetLoading,
    payload,
  };
}

function SetAuthAction(payload: AuthInterface): SetAuthActionType {
  return {
    type: EnumUser.SetAuth,
    payload,
  };
}

function SetEmailAction(payload: string): SetUserEmailActionType {
  return {
    type: EnumUser.SetEmail,
    payload,
  };
}
/**
 * ================================
 * Export
 * ================================
 */
export default UserActions;
export type {
  GetFavoriteActionType,
  SetLoadingActionType,
  SetAuthActionType,
  SetUserEmailActionType,
};
export {
  EnumUser,
  GetFavoriteAction,
  SetLoadingAction,
  SetAuthAction,
  SetEmailAction,
};

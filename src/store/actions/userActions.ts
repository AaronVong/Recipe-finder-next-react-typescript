import {
  FavortieRecipeInterafce,
  UserProfileInterface,
} from "@/types/UserTypes";

/**
 * ================================
 * Define interfaces and types for Edamam actions
 * ================================
 */
enum EnumUser {
  GetFavorite = "GET_FAVORITE",
  SetLoading = "SET_LOADING",
  SetAuth = "SET_AUTH",
  SetEmail = "SET_EMAIL",
  SetUserProfile = "SET_USER_PROFILE",
  AddFav = "ADD_FAV",
}

type GetFavoriteActionType = {
  type: EnumUser.GetFavorite;
  payload: FavortieRecipeInterafce;
};

type SetLoadingActionType = {
  type: EnumUser.SetLoading;
  payload: boolean;
};

type SetUserEmailActionType = {
  type: EnumUser.SetEmail;
  payload: string;
};
type SetUserProfileActionType = {
  type: EnumUser.SetUserProfile;
  payload: UserProfileInterface;
};

type AddFavActionType = {
  type: EnumUser.AddFav;
  payload: FavortieRecipeInterafce;
};
// Combine all actions type and interface into one type
type UserActionsType =
  | GetFavoriteActionType
  | SetLoadingActionType
  | SetUserEmailActionType
  | SetUserProfileActionType
  | AddFavActionType;

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

function SetEmailAction(payload: string): SetUserEmailActionType {
  return {
    type: EnumUser.SetEmail,
    payload,
  };
}

function SetUserProfileAction(
  payload: UserProfileInterface
): SetUserProfileActionType {
  return {
    type: EnumUser.SetUserProfile,
    payload,
  };
}

function AddFavAction(payload: FavortieRecipeInterafce): AddFavActionType {
  return {
    type: EnumUser.AddFav,
    payload,
  };
}

/**
 * ================================
 * Export
 * ================================
 */
export default UserActionsType;
export type {
  GetFavoriteActionType,
  SetLoadingActionType,
  SetUserEmailActionType,
  SetUserProfileActionType,
  AddFavActionType,
};
export {
  EnumUser,
  GetFavoriteAction,
  SetLoadingAction,
  SetEmailAction,
  SetUserProfileAction,
  AddFavAction,
};

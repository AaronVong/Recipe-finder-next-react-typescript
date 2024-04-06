import {
  EdamamResponseInterface,
  EdamamHitInterfacae,
} from "@/types/EdamamTypes";
import {
  AuthInterface,
  FavortieRecipeInterafce,
  RecipeLink,
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

type SetAuthActionType = {
  type: EnumUser.SetAuth;
  payload: AuthInterface;
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
type UserActions =
  | GetFavoriteActionType
  | SetLoadingActionType
  | SetAuthActionType
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
export default UserActions;
export type {
  GetFavoriteActionType,
  SetLoadingActionType,
  SetAuthActionType,
  SetUserEmailActionType,
  SetUserProfileActionType,
  AddFavActionType,
};
export {
  EnumUser,
  GetFavoriteAction,
  SetLoadingAction,
  SetAuthAction,
  SetEmailAction,
  SetUserProfileAction,
  AddFavAction,
};

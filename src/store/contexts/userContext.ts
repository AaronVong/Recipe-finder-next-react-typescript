import { createContext, ReactElement, useContext, useReducer } from "react";
import {
  EdamamHitInterfacae,
  EdamamResponseInterface,
} from "@/types/EdamamTypes";
import {
  AccessTokenInterface,
  AuthInterface,
  UserProfileInterface,
} from "@/types/UserTypes";

interface UserStateInterface {
  favoriteRecipes: Array<string>;
  isLoading: boolean;
  auth: AuthInterface;
  email?: string; // this email using when first time user register
  profile: UserProfileInterface;
}

let initUserState: UserStateInterface = {
  favoriteRecipes: [],
  isLoading: false,
  auth: {
    token: {
      access_token: "",
      refresh_token: "",
      expires_in: 0,
      token_type: "",
    },
    isAuth: false,
  },
  profile: {
    name: "",
    mail: "",
    field_u_first_name: "",
    field_u_last_name: "",
    user_picture: "",
  },
};

let initAccessToken: AccessTokenInterface = {
  access_token: "",
  refresh_token: "",
  expires_in: 0,
  token_type: "",
};
export { initUserState, initAccessToken };
export type { UserStateInterface };

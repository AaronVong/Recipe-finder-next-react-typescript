import { createContext, ReactElement, useContext, useReducer } from "react";
import {
  EdamamHitInterfacae,
  EdamamResponseInterface,
} from "@/types/EdamamTypes";
import { AuthInterface } from "@/types/UserTypes";

interface UserStateInterface {
  favoriteRecipes: Array<string>;
  isLoading: boolean;
  auth: AuthInterface;
  email?: string;
}

let initUserState: UserStateInterface = {
  favoriteRecipes: [],
  isLoading: false,
  auth: {
    token: {
      access_token: "",
      refresh_token: "",
      expired: 0,
    },
    isAuth: false,
  },
};

export { initUserState };
export type { UserStateInterface };

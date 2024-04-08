import { createContext } from "react";
import {
  FavortieRecipeInterafce,
  UserProfileInterface,
} from "@/types/UserTypes";
import UserActionsType from "../actions/userActions";

interface UserStateInterface {
  favoriteRecipes: FavortieRecipeInterafce | null;
  isLoading: boolean;
  email?: string; // this email using when first time user register
  profile: UserProfileInterface | null;
}

let initUserState: UserStateInterface = {
  favoriteRecipes: null,
  isLoading: false,
  profile: null,
};

const UserContext = createContext<{
  user: UserStateInterface;
  userDispatch: React.Dispatch<UserActionsType>;
}>({
  user: initUserState,
  userDispatch: () => null,
});
export { initUserState, UserContext };
export type { UserStateInterface };

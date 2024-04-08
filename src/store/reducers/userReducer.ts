import UserActionsType, { EnumUser } from "../actions/userActions";
import { UserStateInterface } from "../contexts/userContext";

export default function userReducer(
  state: UserStateInterface,
  action: UserActionsType
): UserStateInterface {
  switch (action.type) {
    case EnumUser.SetLoading:
      return {
        ...state,
        isLoading: action.payload,
      };
    case EnumUser.SetEmail:
      return {
        ...state,
        email: action.payload,
      };
    case EnumUser.SetUserProfile:
      return {
        ...state,
        profile: { ...action.payload },
      };
    case EnumUser.AddFav:
      return {
        ...state,
        favoriteRecipes: action.payload,
      };
    case EnumUser.GetFavorite:
      return {
        ...state,
        favoriteRecipes: action.payload,
      };
    default:
      return state;
  }
}

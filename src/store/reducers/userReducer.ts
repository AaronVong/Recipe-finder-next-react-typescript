import AppActions from "../actions";
import { EnumUser } from "../actions/userActions";
import { UserStateInterface } from "../contexts/userContext";

export default function userReducer(
  state: UserStateInterface,
  action: AppActions
): UserStateInterface {
  switch (action.type) {
    case EnumUser.SetLoading:
      return {
        ...state,
        isLoading: action.payload,
      };
    case EnumUser.SetAuth:
      return {
        ...state,
        auth: {
          token: { ...action.payload.token },
          isAuth: action.payload.isAuth,
        },
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
    default:
      return state;
  }
}

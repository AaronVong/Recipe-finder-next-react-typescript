import { createContext } from "react";
import { AuthenticationActionsType } from "../actions/authActions";

interface AccessTokenInterface {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  token_type: string;
}

enum EnumAuthenticationStatus {
  Anonymous = 0,
  Pending = -1,
  Authenticated = 1,
}
interface AuthenticationStateInterface {
  token: AccessTokenInterface | null | undefined;
  isAuthenticated: EnumAuthenticationStatus;
}

let initAuthenticationState: AuthenticationStateInterface = {
  token: null,
  isAuthenticated: -1,
};

let initAccessToken: AccessTokenInterface = {
  access_token: "",
  refresh_token: "",
  expires_in: 0,
  token_type: "",
};

const AuthenticationContext = createContext<{
  auth: AuthenticationStateInterface;
  authDispatch: React.Dispatch<AuthenticationActionsType>;
}>({
  auth: initAuthenticationState,
  authDispatch: () => null,
});

export type { AuthenticationStateInterface, AccessTokenInterface };
export {
  EnumAuthenticationStatus,
  initAuthenticationState,
  AuthenticationContext,
  initAccessToken,
};

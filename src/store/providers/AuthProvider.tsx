import { useEffect, useReducer } from "react";
import authReducer from "../reducers/authReducer";
import {
  AuthenticationContext,
  initAuthenticationState,
} from "../contexts/authContext";
import {
  EnumAuthenticationAction,
  SignInAction,
  SignOffAction,
} from "../actions/authActions";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [auth, authDispatch] = useReducer(authReducer, initAuthenticationState);
  // Check authentication on mount
  useEffect(() => {
    const token = localStorage.getItem("oauth2");
    if (token) {
      // Dispatch login action if token exists
      authDispatch(SignInAction(token));
    } else {
      authDispatch(SignOffAction());
    }
  }, []);
  return (
    <AuthenticationContext.Provider value={{ auth, authDispatch }}>
      {children}
    </AuthenticationContext.Provider>
  );
}

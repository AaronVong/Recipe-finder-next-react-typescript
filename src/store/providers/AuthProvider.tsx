"use client";
import { useEffect, useReducer } from "react";
import authReducer from "../reducers/authReducer";
import {
  AccessTokenInterface,
  AuthenticationContext,
  initAuthenticationState,
} from "../contexts/authContext";
import {
  EnumAuthenticationAction,
  SignInAction,
  SignOffAction,
} from "../actions/authActions";
import UserProvider from "./UserProvider";
import { isTokenExpired } from "@/services/fetchHelper";
import {
  checkAuthentication,
  getUserInfo,
  refreshAccessToken,
} from "@/services/authentication";
let refreshTokenRequest: Promise<{ status: boolean; data: any }> | null = null;
export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [auth, authDispatch] = useReducer(authReducer, initAuthenticationState);

  // Check authentication on mount
  useEffect(() => {
    (async () => {
      const result = await checkAuthentication();
      if (result.status) {
        authDispatch(SignInAction(result.data));
      } else {
        authDispatch(SignOffAction());
      }
    })();
  }, []);
  return (
    <AuthenticationContext.Provider value={{ auth, authDispatch }}>
      {children}
    </AuthenticationContext.Provider>
  );
}

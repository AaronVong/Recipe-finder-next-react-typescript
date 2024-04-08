"use client";
import { useContext, useEffect, useReducer } from "react";
import userReducer from "../reducers/userReducer";
import { initUserState, UserContext } from "../contexts/userContext";
import AuthProvider from "./AuthProvider";
import {
  AuthenticationContext,
  EnumAuthenticationStatus,
} from "../contexts/authContext";
import { getUserInfo } from "@/services/authentication";
import { SetUserProfileAction } from "../actions/userActions";

export default function UserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, userDispatch] = useReducer(userReducer, initUserState);
  const { auth } = useContext(AuthenticationContext);
  const loadProfile = async () => {
    const response = await getUserInfo();
    if (response.status) {
      userDispatch(SetUserProfileAction(response.data.data));
    }
  };
  // Load user profile on mount if is Authenticated
  useEffect(() => {
    if (auth.isAuthenticated == EnumAuthenticationStatus.Authenticated) {
      loadProfile();
    }
  }, [auth.isAuthenticated]);
  return (
    <AuthProvider>
      <UserContext.Provider value={{ user, userDispatch }}>
        {children}
      </UserContext.Provider>
    </AuthProvider>
  );
}

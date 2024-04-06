"use client";
import { getUserInfo, refreshAccessToken } from "@/services/authentication";
import { getAccessToken, isTokenExpired } from "@/services/fetchHelper";
import { SetAuthAction, SetLoadingAction } from "@/store/actions/userActions";
import { GlobalContext } from "@/store/contexts";
import { initAccessToken } from "@/store/contexts/userContext";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useMemo } from "react";

// This component has mission to check wheter user is logged in or not and update to react state
export default function AuthorizationCheck({ children }: { children: any }) {
  const { state, dispatch } = useContext(GlobalContext);
  let refreshTokenRequest: Promise<{ status: boolean; data: any }> | null =
    null;
  let getUserInfoRequest: Promise<{ status: boolean; data: any }> | null = null;
  async function checkAccessToken() {
    let oauth2 = getAccessToken();
    if (state.user.auth.isAuth == false) {
      // Check if token is present
      if (oauth2) {
        console.log("oauth2 exists");
        // it is expired
        if (isTokenExpired(oauth2.expires_in)) {
          console.log("access token expired");
          // try refresh acces token
          refreshTokenRequest =
            refreshTokenRequest != null
              ? refreshTokenRequest
              : refreshAccessToken();
          const response = await refreshTokenRequest;
          if (response.status) {
            console.log("refresh token success");
            localStorage.set("oauth2", JSON.stringify(response.data));
            dispatch(SetAuthAction({ token: response.data, isAuth: true }));
          } else {
            // refresh failed
            console.log("refresh token failed");
            localStorage.removeItem("oauth2");
            dispatch(SetAuthAction({ token: initAccessToken, isAuth: false }));
          }
          refreshTokenRequest = null;
        } else {
          console.log("access token not expired");
          dispatch(SetAuthAction({ token: oauth2, isAuth: true }));
        }
      } else {
        console.log("oauth2 not exists");
        // update isAuth state
        dispatch(SetAuthAction({ token: initAccessToken, isAuth: false }));
      }
    }
  }
  useEffect(() => {
    checkAccessToken();
  }, []);
  return children;
}

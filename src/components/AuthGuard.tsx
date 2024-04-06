"use client";
import { getUserInfo } from "@/services/authentication";
import { SetAuthAction } from "@/store/actions/userActions";
import { GlobalContext } from "@/store/contexts";
import { initAccessToken } from "@/store/contexts/userContext";
import { useRouter } from "next/navigation";
import React from "react";
import { useContext, useEffect } from "react";
export default function AuthGuard({
  children,
}: {
  children?: React.ReactNode;
}) {
  const { dispatch } = useContext(GlobalContext);
  const { push } = useRouter();
  useEffect(() => {
    async () => {
      // it is not expired => check is valid token
      const response = await getUserInfo();
      if (response.status) {
        console.log("access token is valid");
      } else {
        console.log("access token is invalid");
        // it is not => remove token in browser => update isAuth state
        localStorage.removeItem("oauth2");
        dispatch(SetAuthAction({ token: initAccessToken, isAuth: false }));
        push("/sign-in");
      }
    };
  }, []);
  return <React.Fragment>{children}</React.Fragment>;
}

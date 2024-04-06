"use client";
import mainReducer from "@/store/reducers";
import { redirect, useRouter } from "next/navigation";
import { ReactElement, useContext, useEffect, useReducer } from "react";
import { getUserInfo } from "@/services/authentication";
import { GlobalContext } from "@/store/contexts";
import Home from "../(pages)/page";
/**
 * Authroization Layout
 */
export default function LAuthorization({
  children,
}: {
  children: ReactElement;
}) {
  const { state } = useContext(GlobalContext);
  const { push, back } = useRouter();
  useEffect(() => {
    if (state.user.auth.isAuth) {
      push("/");
    }
  });
  return (
    <main className="w-full h-full flex justify-center items-center">
      {children}
    </main>
  );
}

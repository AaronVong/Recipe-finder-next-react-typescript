"use client";
import mainReducer from "@/store/reducers";
import { redirect } from "next/navigation";
import { ReactElement, useEffect, useReducer } from "react";

/**
 * Authroization Layout
 */
export default function LAuthorization({
  children,
}: {
  children: ReactElement;
}) {
  let isAuth: boolean = false;
  useEffect(() => {
    let token = localStorage.getItem("oauth2");
    if (token) {
      isAuth = true;
    }
  });
  return (
    <main className="w-full h-full flex justify-center items-center">
      {isAuth ? redirect("/") : children}
    </main>
  );
}

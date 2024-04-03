"use client";
import mainReducer from "@/store/reducers";
import { ReactElement, useReducer } from "react";

/**
 * Authroization Layout
 */
export default function LAuthorization({
  children,
}: {
  children: ReactElement;
}) {
  return (
    <main className="w-full h-full flex justify-center items-center">
      {children}
    </main>
  );
}

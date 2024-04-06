"use client";
import { GlobalContext, initGlobalState } from "@/store/contexts";
import mainReducer from "@/store/reducers";
import { useReducer } from "react";
import AuthorizationCheck from "./AuthorizationCheck";

// Master provider
export default function Provider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(mainReducer, initGlobalState);
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      <AuthorizationCheck>{children}</AuthorizationCheck>
    </GlobalContext.Provider>
  );
}

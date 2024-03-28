"use client";

import MainNav from "@/components/mainNav";
import { initAppState, MainContext } from "@/store/contexts";
import mainReducer from "@/store/reducers";
import { ReactElement, useReducer } from "react";

export default function LHome({ children }: { children: ReactElement }) {
  const [state, dispatch] = useReducer(mainReducer, initAppState);

  return (
    <MainContext.Provider value={{ state, dispatch }}>
      <div>
        <MainNav />
        <main className="container mx-auto">{children}</main>
      </div>
    </MainContext.Provider>
  );
}

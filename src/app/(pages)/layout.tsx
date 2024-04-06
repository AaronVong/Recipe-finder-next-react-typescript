"use client";

import AuthGuard from "@/components/AuthGuard";
import MainNav from "@/components/mainNav";
import React from "react";
import { ReactElement, useReducer } from "react";

export default function LHome({ children }: { children: ReactElement }) {
  return (
    <React.Fragment>
      <AuthGuard>
        <MainNav />
        <main className="container mx-auto">{children}</main>
      </AuthGuard>
    </React.Fragment>
  );
}

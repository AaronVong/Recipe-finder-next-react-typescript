"use client";
import MainNav from "@/components/mainNav";
import React from "react";
import { ReactElement, useReducer } from "react";

export default function LHome({ children }: { children: ReactElement }) {
  return (
    <React.Fragment>
      <MainNav />
      <main className="container mx-auto">{children}</main>
    </React.Fragment>
  );
}

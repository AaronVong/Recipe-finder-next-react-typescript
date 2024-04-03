"use client";

import MainNav from "@/components/mainNav";
import { ReactElement, useReducer } from "react";

export default function LHome({ children }: { children: ReactElement }) {
  return (
    <div>
      <MainNav />
      <main className="container mx-auto">{children}</main>
    </div>
  );
}

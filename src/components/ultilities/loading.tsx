import React from "react";

export default function Loading({ children }: { children?: React.ReactNode }) {
  return <div className="text-center text-xl py-2">{children}</div>;
}

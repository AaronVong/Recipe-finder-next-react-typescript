"use client";
import { useReducer } from "react";
import edamamReducer from "../reducers/reducerEdamam";
import { EdamamContext, initEdamamState } from "../contexts/edamamContext";

export default function EdamamProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [edamam, edamamDispatch] = useReducer(edamamReducer, initEdamamState);
  return (
    <EdamamContext.Provider value={{ edamam, edamamDispatch }}>
      {children}
    </EdamamContext.Provider>
  );
}

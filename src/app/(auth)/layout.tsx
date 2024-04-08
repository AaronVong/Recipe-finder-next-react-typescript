"use client";
import { useRouter } from "next/navigation";
import { ReactElement, useContext, useEffect, useReducer } from "react";
import {
  AuthenticationContext,
  EnumAuthenticationStatus,
} from "@/store/contexts/authContext";
/**
 * Authroization Layout
 */
export default function LAuthorization({
  children,
}: {
  children: ReactElement;
}) {
  const { auth } = useContext(AuthenticationContext);
  const router = useRouter();
  useEffect(() => {
    if (auth.isAuthenticated == EnumAuthenticationStatus.Authenticated) {
      router.push("/");
    }
  }, [auth.isAuthenticated]);
  return (
    <main className="w-full h-full flex justify-center items-center">
      {children}
    </main>
  );
}

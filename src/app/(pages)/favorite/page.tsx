"use client";
import Loading from "@/components/ultilities/loading";
import { getUserInfo } from "@/services/authentication";
import {
  AuthenticationContext,
  EnumAuthenticationStatus,
} from "@/store/contexts/authContext";
import { redirect, useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

export default function Favorite() {
  const { auth } = useContext(AuthenticationContext);
  const router = useRouter();
  useEffect(() => {
    if (auth.isAuthenticated == EnumAuthenticationStatus.Anonymous) {
      router.push("/sign-in");
    }
  });
  return (
    <div>
      {auth.isAuthenticated == -1 ? (
        <Loading>Verifying...</Loading>
      ) : (
        "This is protected page"
      )}
    </div>
  );
}

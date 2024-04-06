"use client";
import AuthGuard from "@/components/AuthGuard";
import { getUserInfo } from "@/services/authentication";
import { SetAuthAction } from "@/store/actions/userActions";
import { GlobalContext } from "@/store/contexts";
import { initAccessToken } from "@/store/contexts/userContext";
import { redirect, useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

export default function Favorite() {
  const { state, dispatch } = useContext(GlobalContext);
  return <div>This is protected page</div>;
}

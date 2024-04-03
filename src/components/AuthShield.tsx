"use client";
import { SetAuthAction } from "@/store/actions/userActions";
import { GlobalContext } from "@/store/contexts";
import { AuthInterface } from "@/types/UserTypes";
import { redirect } from "next/navigation";
import { ReactElement, useContext, useEffect, useLayoutEffect } from "react";
import { useRouter } from "next/navigation";

export default function AuthShield({ children }: { children: any }) {
  const isAuth = true;
  return isAuth == true ? children : redirect("/login");
}

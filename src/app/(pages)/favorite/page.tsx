"use client";
import AuthShield from "@/components/AuthShield";
import { SetAuthAction } from "@/store/actions/userActions";
import { GlobalContext } from "@/store/contexts";
import { useContext, useEffect } from "react";

export default function Favorite() {
  return (
    <AuthShield>
      <div>Protected page</div>
    </AuthShield>
  );
}

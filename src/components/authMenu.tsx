import { useContext } from "react";
import ListItem from "./ultilities/listItem";
import React from "react";
import {
  AuthenticationContext,
  EnumAuthenticationStatus,
} from "@/store/contexts/authContext";
import { UserContext } from "@/store/contexts/userContext";
import { signOff } from "@/services/authentication";
import { SignOffAction } from "@/store/actions/authActions";
import { redirect, useRouter } from "next/navigation";

export default function AuthMenu() {
  const { auth, authDispatch } = useContext(AuthenticationContext);
  const { user, userDispatch } = useContext(UserContext);
  const router = useRouter();

  const handleSignOff = async (event: React.MouseEvent<HTMLElement>) => {
    const response = await signOff();
    if (response.status) {
      authDispatch(SignOffAction());
      router.push("/");
    }
  };
  return (
    <ul className="w-1/4 text-center flex">
      {auth.isAuthenticated == EnumAuthenticationStatus.Authenticated ? (
        <React.Fragment>
          <ListItem textWithLink={false} itemTitle={user.profile?.mail} />
          <ListItem textWithLink={false}>
            <button type="button" onClick={handleSignOff}>
              Sign off
            </button>
          </ListItem>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <ListItem textWithLink={true} link="/sign-in" itemTitle="Sign in" />
          <ListItem textWithLink={true} link="/sign-up" itemTitle="Sign up" />
        </React.Fragment>
      )}
    </ul>
  );
}

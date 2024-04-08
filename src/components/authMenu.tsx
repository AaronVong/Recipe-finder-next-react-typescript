import { useContext } from "react";
import ListItem from "./ultilities/listItem";
import React from "react";
import {
  AuthenticationContext,
  EnumAuthenticationStatus,
} from "@/store/contexts/authContext";
import { UserContext } from "@/store/contexts/userContext";

export default function AuthMenu() {
  const { auth, authDispatch } = useContext(AuthenticationContext);
  const { user, userDispatch } = useContext(UserContext);
  return (
    <ul className="w-1/4 text-center flex">
      {auth.isAuthenticated == EnumAuthenticationStatus.Authenticated ? (
        <ListItem textWithLink={false} itemTitle={user.profile?.mail} />
      ) : (
        <React.Fragment>
          <ListItem textWithLink={true} link="/sign-in" itemTitle="Sign in" />
          <ListItem textWithLink={true} link="/sign-up" itemTitle="Sign up" />
        </React.Fragment>
      )}
    </ul>
  );
}

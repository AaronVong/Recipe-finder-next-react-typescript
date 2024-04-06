import { useContext } from "react";
import ListItem from "./ultilities/listItem";
import { GlobalContext } from "@/store/contexts";
import React from "react";

export default function AuthMenu() {
  const { state, dispatch } = useContext(GlobalContext);
  return (
    <ul className="w-1/4 text-center flex">
      {state.user.auth.isAuth ? (
        "User name"
      ) : (
        <React.Fragment>
          <ListItem textWithLink={true} link="/sign-in" itemTitle="Sign in" />
          <ListItem textWithLink={true} link="/sign-up" itemTitle="Sign up" />
        </React.Fragment>
      )}
    </ul>
  );
}

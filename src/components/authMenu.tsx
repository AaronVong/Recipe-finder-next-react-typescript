import ListItem from "./ultilities/listItem";

export default function AuthMenu() {
  return (
    <ul className="w-1/4 text-center flex">
      <ListItem textWithLink={true} link="/sign-in" itemTitle="Sign in" />
      <ListItem textWithLink={true} link="/sign-up" itemTitle="Sign up" />
    </ul>
  );
}

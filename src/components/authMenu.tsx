import ListItem from "./ultilities/listItem";

export default function AuthMenu() {
  return (
    <ul className="w-1/4 text-center flex">
      <ListItem textWithLink={true} link="/login" itemTitle="Login" />
      <ListItem textWithLink={true} link="/register" itemTitle="Register" />
    </ul>
  );
}

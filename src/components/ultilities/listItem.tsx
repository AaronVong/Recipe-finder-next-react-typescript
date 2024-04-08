export default function ListItem({
  itemTitle,
  children,
  textWithLink,
  link,
  itemClasses,
  childClases,
}: {
  itemTitle?: string;
  children?: any;
  textWithLink: Boolean;
  link?: string;
  itemClasses?: string;
  childClases?: string;
}) {
  let classes: string =
    "inline-block text-stone-200 px-1 py-2 text-center transition-colors tex-xl font-semibold";
  if (childClases) {
    classes += " " + childClases;
  }
  return (
    <li className={itemClasses}>
      {textWithLink ? (
        <a className={classes} href={link}>
          {itemTitle}
        </a>
      ) : (
        <div className={classes}>{itemTitle ?? children}</div>
      )}
    </li>
  );
}

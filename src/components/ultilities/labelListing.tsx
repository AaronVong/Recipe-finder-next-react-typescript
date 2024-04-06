export default function LabelListing({
  labelArray,
  title,
}: {
  labelArray: Array<any>;
  title: string;
}) {
  const classes =
    labelArray.length <= 1
      ? "first:after:content-none last:after:content-none"
      : "last:after:content-none";
  const list = labelArray.map((label, index) => {
    return (
      <li
        key={`${label} ${index}`}
        className={"capitalize after:content-[','] " + classes}
      >
        {label}
      </li>
    );
  });
  return (
    <div className="">
      <h5 className="font-semibold">{title}: </h5>
      <ul className="flex gap-x-1 flex-wrap">{list}</ul>
    </div>
  );
}

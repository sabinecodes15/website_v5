import { ReactElement } from "react";

interface Props {
  children: ReactElement | ReactElement[];
  size: "span" | "fit";
}

function Card({ children, size = "fit" }: Props) {
  return (
    <div
      className={
        "bg-teal-300 p-5 rounded shadow-xl " +
        (size === "fit" ? "w-fit" : "w-full")
      }
    >
      {children}
    </div>
  );
}

export default Card;

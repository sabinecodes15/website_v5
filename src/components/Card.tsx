import { ReactElement } from "react";

interface Props {
  children: ReactElement | ReactElement[];
  width?: "span" | "fit";
  height?: "span" | "fit";
}

function Card({ children, width = "fit", height = "fit" }: Props) {
  return (
    <div
      className={
        "bg-teal-300 p-5 rounded shadow-xl " +
        (width === "fit" ? "w-fit" : "w-full") +
        (height == "fit" ? " h-fit" : " h-full")
      }
    >
      {children}
    </div>
  );
}

export default Card;

import { ReactElement } from "react";

interface Props {
  children: ReactElement;
}

function Card({ children }: Props) {
  return (
    <div className="bg-teal-300 p-5 w-fit rounded shadow-xl">{children}</div>
  );
}

export default Card;

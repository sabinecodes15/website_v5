import { ReactElement } from "react";

interface Props {
  outline: boolean;
  link: string;
  img?: ReactElement;
}

const SocialButton = ({ outline, link, img }: Props) => {
  return (
    <a href={link} target="_blank">
      <div
        className={
          "flex justify-center items-center w-14 h-14 bg-teal-300 hover:bg-teal-200 rounded-full " +
          (outline
            ? "border border-light-blue-100 hover:border-light-blue-200"
            : "")
        }
      >
        {img}
      </div>
    </a>
  );
};

export default SocialButton;

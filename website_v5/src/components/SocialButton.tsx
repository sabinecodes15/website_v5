import { ReactElement } from "react";

interface Props {
  outline: boolean;
  link: string;
  img?: ReactElement;
  ariaLabel: string;
}

const SocialButton = ({ outline, link, img, ariaLabel }: Props) => {
  return (
    <a href={link} target="_blank" aria-label={ariaLabel}>
      <div
        className={
          "flex justify-center items-center w-24 h-24 sm:w-14 sm:h-14 bg-teal-300 hover:bg-teal-200 transition-colors rounded-full " +
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

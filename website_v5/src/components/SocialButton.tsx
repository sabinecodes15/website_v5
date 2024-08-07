interface Props {
  outline: boolean;
  link: string;
  img?: string;
  alt?: string;
}

const SocialButton = ({ outline, link, img, alt }: Props) => {
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
        {img ? (
          <img
            src={img}
            className="min-h-60pct hover:fill-light-blue-200"
            alt={alt}
          ></img>
        ) : (
          ""
        )}
      </div>
    </a>
  );
};

export default SocialButton;

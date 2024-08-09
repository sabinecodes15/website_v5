import SocialButton from "./SocialButton";
import EmailSVG from "./svg/EmailSVG";
import LinkedInSVG from "./svg/LinkedInSVG";
import GitHubSVG from "./svg/GitHubSVG";

const ButtonRow = () => {
  return (
    <>
      <div className="flex flex-row sm:mx-0 mx-6">
        <SocialButton
          outline={true}
          link="mailto:sdsalnave@icloud.com"
          img={
            <EmailSVG
              classes="fill-light-blue-100 hover:fill-light-blue-200"
              width="50%"
              height="50%"
            />
          }
        />
        <div className="sm:w-5 w-3"></div>
        <SocialButton
          outline={true}
          link="https://www.linkedin.com/in/sabine-salnave-46716a169/"
          img={
            <LinkedInSVG
              classes="fill-light-blue-100 hover:fill-light-blue-200"
              width="50%"
              height="50%"
            />
          }
        />
        <div className="sm:w-5 w-3"></div>
        <SocialButton
          outline={true}
          link="https://github.com/sabinecodes15"
          img={
            <GitHubSVG
              classes="fill-light-blue-100 hover:fill-light-blue-200"
              width="50%"
              height="50%"
            />
          }
        />
      </div>
    </>
  );
};

export default ButtonRow;

import Card from "./Card";
import SocialButton from "./SocialButton";
import EmailSVG from "./svg/EmailSVG";
import LinkedInSVG from "./svg/LinkedInSVG";
import GitHubSVG from "./svg/GitHubSVG";

const spacer = <div className="h-2" />;

const InfoCard = () => {
  return (
    <Card size="fit">
      <>
        <h1 className="font-mono font-bold text-light-blue-100 text-5xl tracking-wide">
          Sabine Salnave.
        </h1>
        {spacer}
        <h2 className="font-mono font-bold text-white-100 text-2xl tracking-wide">
          Full Stack Developer.
        </h2>
        {spacer}
        <p className="font-mont text-light-blue-100 tracking-wide">
          Recent CS grad who loves solving difficult problems.
        </p>
        {spacer}
        <div className="flex flex-row">
          <SocialButton
            outline={true}
            link="mailto:sdsalnave@icloud.com"
            img={
              <EmailSVG classes="fill-light-blue-100 hover:fill-light-blue-200" />
            }
          />
          <div className="w-5"></div>
          <SocialButton
            outline={true}
            link="https://www.linkedin.com/in/sabine-salnave-46716a169/"
            img={
              <LinkedInSVG classes="fill-light-blue-100 hover:fill-light-blue-200" />
            }
          />
          <div className="w-5"></div>
          <SocialButton
            outline={true}
            link="https://github.com/sabinecodes15"
            img={
              <GitHubSVG classes="fill-light-blue-100 hover:fill-light-blue-200" />
            }
          />
        </div>
      </>
    </Card>
  );
};

export default InfoCard;

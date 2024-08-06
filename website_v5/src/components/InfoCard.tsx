import Card from "./Card";
import SocialButton from "./SocialButton";

const spacer = <div className="h-2" />;

const InfoCard = () => {
  return (
    <Card>
      <>
        <h1 className="font-mono font-bold text-light-blue-100 text-5xl tracking-wide">
          Sabine Salnave.
        </h1>
        {spacer}
        <h2 className="font-mono font-bold text-white text-2xl tracking-wide">
          Full Stack Developer.
        </h2>
        {spacer}
        <p className="font-mont text-light-blue-100 tracking-wide">
          {" "}
          Recent CS grad who loves solving difficult problems.
        </p>
        {spacer}
        <div className="flex flex-row">
          <SocialButton outline={true} link="mailto:sdsalnave@icloud.com" />
          <div className="w-5"></div>
          <SocialButton
            outline={true}
            link="https://www.linkedin.com/in/sabine-salnave-46716a169/"
          />
        </div>
      </>
    </Card>
  );
};

export default InfoCard;

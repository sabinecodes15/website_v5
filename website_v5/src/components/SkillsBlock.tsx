import Card from "./Card";

const SkillsBlock = () => {
  return (
    <>
      <div className="flex flex-row">
        <div className="m-2 basis-1/3">
          <Card size="span">
            <div className="flex flex-col text-light-blue-100 font-mont items-center">
              <h3 className="text-white font-bold tracking-wide">Frontend</h3>
              <div className="h-2"></div>
              <p>React</p>
              <p>HTML</p>
              <p>CSS</p>
              <p>Javascript</p>
              <p>Figma</p>
              <p>JQuery</p>
            </div>
          </Card>
        </div>
        <div className="m-2 basis-1/3">
          <Card size="span">
            <div className="flex flex-col text-light-blue-100 font-mont items-center">
              <h3 className="text-white font-bold tracking-wide">Backend</h3>
              <div className="h-2"></div>
              <p>Python</p>
              <p>Java</p>
              <p>Ruby</p>
              <p>Ruby on Rails</p>
              <p>C</p>
              <p>MySQL</p>
            </div>
          </Card>
        </div>
        <div className="m-2 basis-1/3">
          <Card size="span">
            <div className="flex flex-col text-light-blue-100 font-mont items-center">
              <h3 className="text-white font-bold tracking-wide">
                Infrastructure
              </h3>
              <div className="h-2"></div>
              <p>AWS</p>
              <p>Docker</p>
              <p>Kubernetes</p>
              <p>Terraform</p>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default SkillsBlock;

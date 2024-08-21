import Card from "./Card";

const SkillsBlock = () => {
  return (
    <>
      <div className="flex lg:flex-row flex-col">
        <div className="m-2 basis-1/3">
          <Card width="span" height="span">
            <div className="border border-light-blue-100 rounded h-full">
              <hgroup className="flex flex-col text-light-blue-100 font-mont items-center m-4 sm:text-sm lg:text-lg">
                <h3 className="text-white-100 font-bold tracking-wide sm:text-xl lg:text-2xl">
                  Frontend
                </h3>
                <div className="h-2"></div>
                <p>React</p>
                <p>HTML</p>
                <p>CSS</p>
                <p>Javascript</p>
                <p>Figma</p>
                <p>JQuery</p>
              </hgroup>
            </div>
          </Card>
        </div>
        <div className="m-2 basis-1/3">
          <Card width="span" height="span">
            <div className="border border-light-blue-100 rounded h-full">
              <hgroup className="flex flex-col text-light-blue-100 font-mont items-center m-4 sm:text-sm lg:text-lg">
                <h3 className="text-white-100 font-bold tracking-wide sm:text-xl lg:text-2xl">
                  Backend
                </h3>
                <div className="h-2"></div>
                <p>Python</p>
                <p>Java</p>
                <p>Ruby</p>
                <p>Ruby on Rails</p>
                <p>C</p>
                <p>MySQL</p>
              </hgroup>
            </div>
          </Card>
        </div>
        <div className="m-2 basis-1/3">
          <Card width="span" height="span">
            <div className="border border-light-blue-100 rounded h-full">
              <hgroup className="flex flex-col text-light-blue-100 font-mont items-center m-4 sm:text-sm lg:text-lg">
                <h3 className="text-white-100 font-bold tracking-wide sm:text-xl lg:text-2xl">
                  Infrastructure
                </h3>
                <div className="h-2"></div>
                <p>AWS</p>
                <p>Docker</p>
                <p>Kubernetes</p>
                <p>Terraform</p>
              </hgroup>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default SkillsBlock;

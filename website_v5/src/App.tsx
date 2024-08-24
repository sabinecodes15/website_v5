import ButtonRow from "./components/ButtonRow";
import Card from "./components/Card";
import InfoText from "./components/InfoText";
import NavBar from "./components/NavBar";
import SkillsBlock from "./components/SkillsBlock";
import SummaryBlock from "./components/SummaryBlock";
import WorkHistoryCard from "./components/WorkHistory";

function App() {
  return (
    <>
      <NavBar />
      <div className="min-h-screen flex justify-center sm:items-center mt-20 sm:m-0">
        <div className="hidden sm:block">
          <Card width="fit">
            <>
              <InfoText />
              <div className="h-2" />
              <ButtonRow />
            </>
          </Card>
        </div>
        <div className="sm:hidden">
          <InfoText />
          <div className="h-10" />
          <ButtonRow />
        </div>
      </div>
      <div id="about">
        <SummaryBlock />
      </div>
      <div id="experience"></div>
      <h2 className="text-white-100 font-mono font-bold text-5xl tracking-wide mt-12 mx-6 lg:mx-12">
        Where I've Been.
      </h2>
      <div className="my-12 mx-6 lg:mx-12">
        <WorkHistoryCard />
      </div>
      <h2
        id="skills"
        className="text-white-100 font-mono font-bold text-5xl tracking-wide mt-12 mx-6 lg:mx-12"
      >
        Skills.
      </h2>
      <div className="my-12 mx-6 lg:mx-12">
        <SkillsBlock />
      </div>
      <div className="h-12"></div>
      <footer className="w-full h-24 sm:h-16 bg-teal-300 flex justify-center items-center text-light-blue-100 text-center font-mont p-8">
        Portfolio powered by me- built with React and Tailwind.
      </footer>
    </>
  );
}

export default App;

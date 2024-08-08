import InfoCard from "./components/InfoCard";
import NavBar from "./components/NavBar";
import SummaryBlock from "./components/SummaryBlock";
import WorkHistoryCard from "./components/WorkHistoryCard";

function App() {
  return (
    <>
      <NavBar />
      <div className="min-h-screen flex justify-center items-center">
        <InfoCard />
      </div>
      <SummaryBlock />
      <h1 className="text-white font-mono font-bold text-5xl tracking-wide m-12">
        Where I've Been.
      </h1>
      <div className="m-12">
        <WorkHistoryCard />
      </div>
      <h1 className="text-white font-mono font-bold text-5xl tracking-wide m-12">
        Skills.
      </h1>
    </>
  );
}

export default App;

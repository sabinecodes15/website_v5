import InfoCard from "./components/InfoCard";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="min-h-screen flex justify-center items-center">
        <InfoCard />
      </div>
    </>
  );
}

export default App;

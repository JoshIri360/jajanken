import { useState } from "react";
import "./App.css";
import Game from "./components/Game";
import Navbar from "./components/Navbar";
import LoadingScreen from "./components/LoadingScreen"; // Import your loading screen component

function App() {
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const handleGameReady = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <LoadingScreen />}
      <div
        className={`font-barlow bg-gradient-to-b from-radial-gradient-start to-radial-gradient-end h-screen flex flex-col items-center pt-8 ${
          isLoading ? "hidden" : ""
        }`}
      >
        <Navbar score={score} />
        <Game score={score} setScore={setScore} onReady={handleGameReady} />
      </div>
    </>
  );
}

export default App;

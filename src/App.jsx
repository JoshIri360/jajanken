import "./App.css";
import Game from "./components/Game";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [score, setScore] = useState(0);

  return (
    <>
      <div className="font-barlow bg-gradient-to-b from-radial-gradient-start to-radial-gradient-end h-screen flex flex-col items-center pt-8">
        <Navbar score={score} />
        <Game score={score} setScore={setScore} />
      </div>
    </>
  );
}

export default App;

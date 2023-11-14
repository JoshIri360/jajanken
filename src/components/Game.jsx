import PropTypes from "prop-types"; // ES6
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Game = ({ score, setScore }) => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);

  const choices = ["rock", "paper", "scissors"];

  const playAgain = () => {
    setUserChoice(null);
    setComputerChoice(null);
    setResult(null);
  };

  const checkResult = (user, computer) => {
    if (user === computer) {
      return "draw";
    } else if (user === "rock" && computer === "scissors") {
      return "win";
    } else if (user === "paper" && computer === "rock") {
      return "win";
    } else if (user === "scissors" && computer === "paper") {
      return "win";
    } else {
      return "lose";
    }
  };

  const handleUserChoice = (choice) => {
    setUserChoice(choice);
    setComputerChoice(choices[Math.floor(Math.random() * choices.length)]);
  };

  useEffect(() => {
    if (!userChoice) {
      return;
    }
    const result = checkResult(userChoice, computerChoice);
    setResult(result);
    if (result === "win") {
      setScore(score + 1);
    } else if (result === "lose") {
      setScore(score - 1);
    }
  }, [userChoice, computerChoice]);

  return (
    // Rock, paper scissors game
    <>
      {!result && (
        <AnimatePresence>
          <motion.div
            className="relative game"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="">
              {choices.map((choice, index) => {
                return (
                  <>
                    <div className="absolute -translate-x-1/2 translate-y-1/2 top-0 left-1/2 z-10">
                      <img src="/images/bg-triangle.svg" alt="Triangle" />
                    </div>
                    <div
                      key={choice}
                      onClick={() => handleUserChoice(choice)}
                      className={`w-32 absolute z-20 cursor-pointer ${
                        index === 0
                          ? "left-0 top-0"
                          : index === 1
                          ? "right-0 top-0"
                          : "bottom-0 -translate-x-1/2 left-1/2"
                      }`}
                    >
                      <motion.div whileTap={{ scale: 0.9 }}>
                        <img src={`/images/${choice}.png`} alt={choice} />
                      </motion.div>
                    </div>
                  </>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      )}

      {result && (
        <>
          <div className="relative game">
            <motion.div
              className="flex flex-col items-center gap-3 text-white absolute top-0 left-0 w-32 bg-red"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative winner">
                <img src={`/images/${userChoice}.png`} alt={userChoice} />
              </div>
              <p>YOU PICKED</p>
            </motion.div>

            <motion.div
              className="flex flex-col items-center gap-3 text-white absolute top-0 right-0 w-32"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
            >
              <img src={`/images/${computerChoice}.png`} alt={computerChoice} />
              <p>THE HOUSE PICKED</p>
            </motion.div>
          </div>
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-white text-6xl font-bold text-center">
              {result === "win" && "YOU WIN"}
              {result === "lose" && "YOU LOSE"}
              {result === "draw" && "DRAW"}
            </p>
            <button
              onClick={playAgain}
              className="text-white text-xl font-bold mt-8 bg-[#3B4262] px-8 py-4 rounded-md"
            >
              PLAY AGAIN
            </button>
          </motion.div>
        </>
      )}
    </>
  );
};

Game.propTypes = {
  score: PropTypes.number.isRequired,
  setScore: PropTypes.func.isRequired,
};

export default Game;

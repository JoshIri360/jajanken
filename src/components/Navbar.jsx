import PropTypes from "prop-types"; // ES6

const Navbar = ({ score }) => {
  return (
    <div className="border-[3px] mb-16 rounded-md border-header-outline text-white navbar p-3 flex justify-between">
      <div className="h-14 flex items-center">
        <img
          src="/images/logo.svg"
          alt="Rock Paper Scissors"
          className="h-4/5"
        />
      </div>
      <div className="flex flex-col items-center justify-center bg-white rounded-md px-3">
        <h4 className="text-score-text font-bold text-[0.6rem]">SCORE</h4>{" "}
        <p className=" text-4xl font-bold text-dark-text leading-7">{score}</p>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  score: PropTypes.number.isRequired,
};

export default Navbar;

import React from "react";
import rightArrow from "../assets/rightArrow.svg";

const CityButton = ({ cityName }) => {
  return (
    <button className="relative flex items-center justify-center border-yellow-500 border rounded hover:text-white hover:bg-[#e7760d] transition ease-in-out font-bold py-3 w-full max-w-64 h-16">
      {cityName}
      <span>
        <img src={rightArrow} alt="arrow" className="absolute right-6 top-1/3" />
      </span>
    </button>
  );
};

export default CityButton;

import React from "react";
import coders from "../coders.json";
import { useSelector } from "react-redux";

const TopKCodersList = () => {
  const theme = useSelector((state) => state.theme.theme);
  return (
    <>
      <div
        className={`min-h-screen p-8 ${
          theme === "dark" ? "bg-black text-white" : " hover:text-black"
        }`}
      >
        <div className=" p-6 rounded-lg shadow-lg max-w-4xl mx-auto ">
          <h2 className="text-2xl font-bold mb-6  text-center">Top 4 Coders</h2>
          {coders.map((coder) => (
            <div
              key={coder.id}
              className="flex items-center  justify-between py-3 px-4 mb-4 rounded-lg bg-gray-100  hover:bg-gray-200 hover:text-black transition-colors duration-200"
            >
              <img
                className="w-8 h-8 rounded-full"
                src={coder.avatarUrl}
                alt={`${coder.firstName} ${coder.lastName}`}
              />
              <span>
                {coder.firstName} {coder.lastName}
              </span>
              <span>Score: {coder.score}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TopKCodersList;

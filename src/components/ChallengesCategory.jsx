import React from "react";
import { useSelector } from "react-redux";

const ChallengesCategory = () => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div className={` p-8 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100"}`}>
   
        <h1 className="text-2xl font-bold mb-4 text-left">Challenges</h1>
        <p className="mb-4 text-left">Select Category</p>

      
          <button className="category-button bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-600 text-left">
            All
          </button>
          <button className="category-button bg-blue-500 text-white font-bold py-2 ml-2 px-4 rounded-full hover:bg-blue-600 text-left">
            Data Structures
          </button>
          <button className="category-button bg-blue-500 text-white font-bold py-2 ml-2 px-4 rounded-full hover:bg-blue-600 text-left">
            Math
          </button>
        
     
    </div>
  );
};

export default ChallengesCategory;


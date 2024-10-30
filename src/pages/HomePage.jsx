import React from "react";
import ChallengesList from "../components/ChallengesList";
import TrendingCategoriesBox from "../components/TrendingCategoriesBox";
import TopKCodersList from "../components/TopKCodersList";
import ChallengesCategory from "../components/ChallengesCategory";
import { useSelector } from "react-redux";

const HomePage = () => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div
      className={`min-h-screen p-8 ${theme === "dark" ? "bg-black text-white" : "bg-gray-100"}`}
    >
      <div className="mx-auto">
        <div className="flex flex-col sm:flex-row gap-8 mb-8">
        
            <ChallengesCategory />     

         
            <TrendingCategoriesBox />
     
        </div>

        <div className="flex gap-8">
          <div className="flex-1  p-4 rounded-lg shadow-lg overflow-y-auto">
            <ChallengesList />
          </div>

          <TopKCodersList />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

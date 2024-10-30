import React from "react";
import ChallengesList from "../components/ChallengesList";
import { useSelector } from "react-redux";


const ChallengesPage = () => {
  const theme = useSelector((state) => state.theme.theme);

  return (
<>
<div
      className={`min-h-screen p-8 ${theme === "dark" ? "bg-black text-white" : "bg-gray-100 text-black-600"}`}
    >
      <div className="mt-4  p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
      <ChallengesList />
    </div>
    </div>
</>

    
  );
};

export default ChallengesPage;

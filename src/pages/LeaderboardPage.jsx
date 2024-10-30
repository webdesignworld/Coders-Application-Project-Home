import React from "react";
import Leaderboard from "../components/Leaderboard";
import { useSelector } from "react-redux";


const LeaderboardPage = () => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <>
 <div
      className={`min-h-screen p-8 ${theme === "dark" ? "bg-black text-white" : "bg-gray-100 text-black-600"}`}
    >

  <div >
      <Leaderboard />
    </div>

    </div>
    </>
  );
};

export default LeaderboardPage;

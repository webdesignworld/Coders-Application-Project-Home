import React from "react";
import leaders from "../leaderboard.json";



const Leaderboard = () => {
  return (
    <div className=" p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Leaderboard</h2>
      <table className="min-w-full border border-gray-200">
        <thead>
          <tr className="bg-grey">
            <th className="py-3 px-4 border-b  font-semibold">Rank</th>
            <th className="py-3 px-4 border-b   font-semibold">Name</th>
            <th className="py-3 px-4 border-b font-semibold">Score</th>
            <th className="py-3 px-4 border-b  font-semibold">
              Solved Challenges
            </th>
          </tr>
        </thead>
        <tbody>
          {leaders.map((leader) => (
            <tr key={leader.id}>
              <td className="py-3 px-4 border-b ">{leader.rank}</td>
              <td className="py-3 px-4 border-b ">{`${leader.firstName} ${leader.lastName}`}</td>
              <td className="py-3 px-4 border-b ">{leader.score}</td>
              <td className="py-3 px-4 border-b ">{leader.solvedChallenges}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;

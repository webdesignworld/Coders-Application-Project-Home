import React from "react";
import { BsCheck2Circle } from "react-icons/bs";
import { LuFileSpreadsheet } from "react-icons/lu";
import { FaRegHourglass } from "react-icons/fa";
import challenges from "../challenges.json";
import { Tooltip as ReactTooltip } from "react-tooltip";




const getStatusIcon = (status) => {
  let icon, description, iconId;

  switch (status) {
    case "Completed":
      iconId = "completed-icon";
      icon = (
        <span id={iconId}>
          <BsCheck2Circle className="text-green-500" />
        </span>
      );
      description = "Completed";
      break;
    case "Attempted":
      iconId = "attempted-icon";
      icon = (
        <span id={iconId}>
          <LuFileSpreadsheet className="text-yellow-500" />
        </span>
      );
      description = "Attempted";
      break;
    case "Pending":
      iconId = "pending-icon";
      icon = (
        <span id={iconId}>
          <FaRegHourglass className="text-red-500" />
        </span>
      );
      description = "Pending";
      break;
    default:
      icon = null;
      description = "";
      iconId = "";
  }

  return { icon, description, iconId };
};

const ChallengesList = () => {
  return (
    <>
      <h1 class="text-2xl font-bold mb-4 text-middle">
        Challenges List
      </h1>
      <div className="max-h-72 overflow-y-auto">
        <table className="w-full table-auto">
          <thead>
            <tr >
              <th className="p-3 border-b ">Status</th>
              <th className="p-3 border-b">Title</th>
              <th className="p-3 border-b">Category</th>
              <th className="p-3 border-b">Difficulty</th>
              <th className="p-3 border-b ">Solution Rate</th>
            </tr>
          </thead>
          <tbody>
            {challenges.map((challenge) => {
              const { icon, description, iconId } = getStatusIcon(
                challenge.status
              );

              return (
                <tr key={challenge.id} className="border-b">
                  <td className="p-3">
                    <div className="flex flex-col items-center">
                      <span className="mb-1">{challenge.status}</span>
                      {icon}
                      {iconId && (
                        <ReactTooltip
                          anchorSelect={`#${iconId}`}
                          place="top"
                          content={description}
                        />
                      )}
                    </div>
                  </td>
                  <td className="p-3 ">{challenge.title}</td>
                  <td className="p-3 ">{challenge.category}</td>
                  <td className="p-3">
                    <span
                      className={`font-semibold ${
                        challenge.difficulty === "Easy"
                          ? "bg-green-500 text-black px-2 py-1 rounded-full"
                          : challenge.difficulty === "Moderate"
                          ? "bg-amber-500 text-black px-2 py-1 rounded-full"
                          : challenge.difficulty === "Hard"
                          ? "bg-red-500 text-black px-2 py-1 rounded-full"
                          : ""
                      }`}
                    >
                      {challenge.difficulty}
                    </span>
                  </td>
                  <td className="p-3">{challenge.solutionRate}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ChallengesList;

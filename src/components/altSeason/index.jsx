import React from "react";
import "tailwindcss/tailwind.css";

const AltseasonIndex = ({ altSeason, values = [100, 100, 80] }) => {
  const [red, orange, green] = values;
  const max = Math.max(...values);

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg flex flex-col w-full max-h-[133px] justify-between">
      <div className="flex justify-between items-start mb-2">
        <div className="flex flex-col">
          <h2 className="text-lg font-medium text-gray-500 font-sans">
            Altseason Index
          </h2>
          <span className="text-2xl font-bold text-gray-800">
            {altSeason}
            <span className="text-gray-400 text-base ml-1">/ 100</span>
          </span>
        </div>
        <div className="text-gray-400 text-sm mt-1">Last 24h</div>
      </div>

      <div className="flex items-center gap-1 mt-2">
        {/* Red Bar */}
        <div className="relative w-full">
          <div
            className="h-3 rounded-full bg-gray-200"
            style={{ width: "100%" }}
          ></div>
          <div
            className="absolute top-0 left-0 h-3 rounded-full"
            style={{
              width: `${red}%`,
              backgroundColor: red === 0 ? "transparent" : "#F04437",
            }}
          ></div>
          {red === max && (
            <div className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full"></div>
          )}
        </div>

        {/* Orange Bar */}
        <div className="relative w-full">
          <div
            className="h-3 rounded-full bg-gray-200"
            style={{ width: "100%" }}
          ></div>
          <div
            className="absolute top-0 left-0 h-3 rounded-full"
            style={{
              width: `${orange}%`,
              backgroundColor: orange === 0 ? "transparent" : "#F79007",
            }}
          ></div>
          {orange === max && (
            <div className="absolute top-0 right-0 w-3 h-3 bg-orange-400 rounded-full"></div>
          )}
        </div>

        {/* Green Bar */}
        <div className="relative w-full">
          <div
            className="h-3 rounded-full bg-gray-200"
            style={{ width: "100%" }}
          ></div>
          <div
            className="absolute top-0 left-0 h-3 rounded-full"
            style={{
              width: `${green}%`,
              backgroundColor: green === 0 ? "transparent" : "#15B269",
            }}
          ></div>
          {green === max && (
            <div className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AltseasonIndex;

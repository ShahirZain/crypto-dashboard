import React from "react";
import "tailwindcss/tailwind.css";

const AltseasonIndex = ({altSeason, values = [100, 100, 80] }) => {
  const [red, orange, green] = values;
  const max = Math.max(...values);

  return (
    <div className="  p-6 bg-white rounded-lg shadow-lg flex flex-col w-full lg:justify-around md:justify-around">
      <div className="flex justify-between items-start mb-4">
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold text-gray-500 font-sans">
            Altseason index
          </h2>

          <span className="text-4xl font-bold text-gray-800 mt-5">
            {altSeason}
            <span className="text-gray-400 text-xl ml-2">/ 100</span>
          </span>
        </div>
        <div className="text-gray-400 text-xl">Last 24h</div>
      </div>

      <div className="mt-4 flex items-center gap-2">
        {/* Red Bar */}
        <div className="relative w-full">
          <div
            className="h-4 rounded-full bg-gray-200"
            style={{ width: "100%" }}
          ></div>
          <div
            className="absolute top-0 left-0 h-4 rounded-full"
            style={{
              width: `${red}%`,
              backgroundColor: red === 0 ? "transparent" : "#F04437",
            }}
          ></div>
          {red === max && (
            <div className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full"></div>
          )}
        </div>

        {/* Orange Bar */}
        <div className="relative w-full">
          <div
            className="h-4 rounded-full bg-gray-200"
            style={{ width: "100%" }}
          ></div>
          <div
            className="absolute top-0 left-0 h-4 rounded-full"
            style={{
              width: `${orange}%`,
              backgroundColor: orange === 0 ? "transparent" : "#F79007",
            }}
          ></div>
          {orange === max && (
            <div className="absolute top-0 right-0 w-4 h-4 bg-orange-400 rounded-full"></div>
          )}
        </div>

        {/* Green Bar */}
        <div className="relative w-full">
          <div
            className="h-4 rounded-full bg-[#E3E7EB]"
            style={{ width: "100%" }}
          ></div>
          <div
            className="absolute top-0 left-0 h-4 rounded-full"
            style={{
              width: `${green}%`,
              backgroundColor: green === 0 ? "transparent" : "#15B269",
            }}
          ></div>
          <div
            className="absolute top-0 right-0 w-4 h-4 bg-green-500 rounded-full "
            style={{
              right: `${100 - green - 5}%`,
              backgroundColor: green === 0 ? "transparent" : "#10B981",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default AltseasonIndex;

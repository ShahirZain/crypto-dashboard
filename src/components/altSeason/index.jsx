import React from "react";
import "tailwindcss/tailwind.css";

const AltseasonIndex = ({ altSeason, values = [100, 100, 20] }) => {
  const [red, orange, green] = values;
  const max = Math.max(...values);

  return (
    <div className="p-4 bg-white rounded-lg  flex flex-col w-full max-h-[133px] justify-between">
      <div className="flex justify-between items-start mb-2">
        <div className="flex flex-col">
          <h2 className="text-[12px] leading-4 font-semibold text-[#667085] font-sans">
            Altseason Index
          </h2>
          <span className="text-[24px] font-semibold text-[#182230] font-sans leading-9">
            {altSeason}
            <span className="text-[#98A2B3]  ml-0 text-[14px] font-normal leading-[21px] font-sans">
              /100
            </span>
          </span>
        </div>
        <div className="text-[#475467] text-[10px] mt-1 font-normal leading-4">
          Last 24h
        </div>
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
          {/* Background bar */}
          <div className="h-3 w-full rounded-full bg-[#E4E7EC]"></div>

          {/* Green progress bar */}
          <div
            className="absolute top-0 left-0 h-3 bg-[#17B26A]"
            style={{
              width: `${green}%`,
              clipPath: "polygon(0% 0%, 100% 0%, 85% 50%, 100% 100%, 0% 100%)",
              borderTopLeftRadius: "10px",
              borderBottomLeftRadius: "10px",
            }}
          ></div>

          {/* Green dot */}
          <div
            className="absolute top-0 right-0 w-3 h-3 bg-[#079455] rounded-full"
            style={{
              left: `${  green  - 2}px`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default AltseasonIndex;

import React from "react";

const FearGreedGauge = ({ value, prev }) => {
  const changeInPercentage = (((value - prev) / value) * 100).toFixed(2);

  const calculateArc = (start, end) => {
    const startAngle = (start / 100) * 180;
    const endAngle = (end / 100) * 180;

    const startX = 100 + 90 * Math.cos((startAngle - 180) * (Math.PI / 180));
    const startY = 100 + 90 * Math.sin((startAngle - 180) * (Math.PI / 180));

    const endX = 100 + 90 * Math.cos((endAngle - 180) * (Math.PI / 180));
    const endY = 100 + 90 * Math.sin((endAngle - 180) * (Math.PI / 180));

    const largeArcFlag = endAngle - startAngle > 90 ? 1 : 0;

    return `M ${startX} ${startY} A 90 90 0 ${largeArcFlag} 1 ${endX} ${endY}`;
  };

  const renderCircleEnd = (angle) => {
    const x = 100 + 90 * Math.cos((angle - 180) * (Math.PI / 180));
    const y = 100 + 90 * Math.sin((angle - 180) * (Math.PI / 180));
    return <circle cx={x} cy={y} r="4" fill="#10b981" />;
  };

  return (
    <div className="flex flex-col items-center justify-center w-full bg-white rounded-lg  p-6 max-h-[133px]">
      <div className="flex justify-between w-full ">
        <h2 className="text-[12px]  font-semibold leading-[18px] text-[#667085]">
          Fear & Greed Index
        </h2>
        <div className="flex flex-col items-center text-green-500 text-xs font-semibold leading-4">
          <span className="text-[#475467] font-normal leading-4 text-[10px] self-end">
            Last 24h
          </span>
          <div className="flex items-center">
            <span
              className="mr-1 text-xs font-semibold leading-[18px]
              text-[12px]
             text-[#17B26A]"
            >
              ▲
            </span>
            <span className="text-[12px] font-semibold  leading-[18px] text-[#17B26A]">
              {changeInPercentage}%
            </span>
          </div>
        </div>
      </div>
      <div className="relative w-full pb-0">
        <svg
          className="w-full h-auto max-w-[133px] mx-auto"
          viewBox="0 0 200 120"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M 10 100 A 90 90 0 1 1 190 100"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="12"
          />
          {/* Red Section */}
          <path
            d={calculateArc(0, 30)}
            fill="none"
            stroke="#F04437"
            strokeWidth="10"
            strokeLinecap="round"
          />
          {/* Orange Section */}
          <path
            d={calculateArc(35, 65)}
            fill="none"
            stroke="#F79007"
            strokeWidth="10"
            strokeLinecap="round"
          />
          {/* Green Section */}
          <path
            d={calculateArc(70, 85)}
            fill="none"
            stroke="#15B269"
            strokeWidth="10"
            strokeLinecap="round"
          />
          {renderCircleEnd((90 / 100) * 180)}
        </svg>
        <div className="absolute top-5 left-0 right-0 flex flex-col items-center">
          <p className="text-[12px] leading-[18px] font-medium text-[#475467]">{"Greed"}</p>
          <p className="text-[30px] font-sans leading-[38px] font-semibold text-[#182230]">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FearGreedGauge;

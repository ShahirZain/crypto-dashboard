import React from "react";

const FearGreedGauge = ({ value, prev, change = 7.5 }) => {
  // Map value to degrees (0 to 180 for half-circle)
  const changeInPercentage = (((value - prev)/value) * 100).toFixed(2);
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
    return <circle cx={x} cy={y} r="8" fill="#10b981" />;
  };

  return (
    <div className="flex flex-col items-center justify-center w-full  bg-white rounded-lg shadow-lg p-6 relative">
      <div className="flex justify-between w-full mb-4">
        <h2 className="text-2xl font-semibold text-gray-500">
          Fear and greed index
        </h2>
        <div className="flex flex-col items-center text-green-500">
          <div className="text-gray-500 text-xl">Last 24h</div>
          <div className="flex items-center mt-1">
            <span className="mr-1">▲</span>
            <span className="font-medium">{changeInPercentage}%</span>
          </div>
        </div>
      </div>
      <div className="relative w-full">
        <svg
          className="w-full h-auto max-w-[400px] mx-auto"
          viewBox="0 0 200 120"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M 10 100 A 90 90 0 1 1 190 100"
            fill="none"
            // stroke="#e5e7eb"
            strokeWidth="20"
          />
          {/* Red Section */}
          <path
            d={calculateArc(0, 30)}
            fill="none"
            stroke="#ef4444"
            strokeWidth="16"
            strokeLinecap="round"
          />
          {/* Orange Section */}
          <path
            d={calculateArc(35, 65)}
            fill="none"
            stroke="#f59e0b"
            strokeWidth="16"
            strokeLinecap="round"
          />
          {/* Green Section */}
          <path
            d={calculateArc(70, 85)}
            fill="none"
            stroke="#10b981"
            strokeWidth="16"
            strokeLinecap="round"
          />
          {renderCircleEnd((90 / 100) * 180)}
        </svg>
        <div className="absolute top-16 left-0 right-0 flex flex-col items-center">
          <p className="text-lg font-medium text-gray-600">
            {value > 50 ? "Greed" : "Fear"}
          </p>
          <p className="text-5xl font-bold text-gray-900">{value}</p>
        </div>
      </div>
    </div>
  );
};

export default FearGreedGauge;

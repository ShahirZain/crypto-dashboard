import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { BsArrowUp, BsArrowDown } from "react-icons/bs";

// Mini Chart Component
const MiniChart = ({ positive }) => {
  const options = {
    chart: {
      type: "area",
      height: 50, // Adjusted for compact fit
      width: 90, // Adjusted for compact fit
      backgroundColor: "transparent",
    },
    title: {
      text: null,
    },
    xAxis: {
      visible: false,
    },
    yAxis: {
      visible: false,
    },
    series: [
      {
        data: [1, 2, 5, 2, 4, 7, 3, 4],
        color: positive ? "#22c55e" : "#ef4444", // Line color
        fillColor: {
          linearGradient: [0, 0, 0, 1],
          stops: [
            [0, positive ? "rgba(34, 197, 94, 0.4)" : "rgba(239, 68, 68, 0.4)"], // Light area
          ],
        },
        lineColor: positive ? "#22c55e" : "#ef4444", // Dark border color
        lineWidth: 1.5, // Reduced for compactness
      },
    ],
    legend: {
      enabled: false,
    },
    credits: {
      enabled: false,
    },
    tooltip: {
      enabled: false,
    },
    plotOptions: {
      series: {
        marker: {
          enabled: false,
        },
      },
    },
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

// Single Row Component
const CryptoRow = ({
  icon: Icon,
  name,
  value,
  percentage,
  positive,
  variant,
}) => {
  return (
    <div className="flex items-center justify-between py-2 border-b border-gray-200 mb-4">
      <div className="flex flex-col items-center">
        <Icon className="w-8 h-8 text-yellow-500" variant={variant} />
        <div className="text-gray-500 text-sm mt-1 font-medium">{name}</div>
      </div>
      <div
        className={` ${
          positive ? "text-green-500" : "text-red-500"
        } text-right`}
      >
        <p className="font-semibold text-gray-800 text-base">{value}</p>
        <div className="flex items-center justify-end text-sm">
          {positive ? "▲" : "▼"} {percentage}%
        </div>
      </div>
      <MiniChart positive={positive} />
    </div>
  );
};

// Card Component
const CryptoCard = ({ title, data, positive }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 max-h-[1130px] overflow-y-auto">
      <div className="flex justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-500">{title}</h2>
      </div>
      {data.map((item, index) => (
        <CryptoRow
          key={index}
          icon={item.icon}
          name={item.name}
          value={item.value}
          percentage={item.percentage}
          positive={positive}
          variant={item.variant}
        />
      ))}
    </div>
  );
};

export default CryptoCard;

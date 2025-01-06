import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { BsArrowUp, BsArrowDown } from "react-icons/bs";
import UpPointedTriange from "../../assets/Icon.png"
import DowPointedTriange from "../../assets/downPointedIcon.png";




const MiniChart = ({ positive }) => {
  const options = {
    chart: {
      type: "area",
      height: 50, // Compact height
      width: 90, // Compact width
      backgroundColor: "transparent", // Transparent background
    },
    title: {
      text: null, // No title
    },
    xAxis: {
      visible: false, // Hide x-axis
    },
    yAxis: {
      visible: false, // Hide y-axis
    },
    series: [
      {
        data: [1, 2, 5, 2, 4, 7, 3, 4], // Sample data
        color: positive ? "#22c55e" : "#ef4444", // Line color based on positive/negative
        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1, // Vertical gradient
          },
          stops: [
            [0, positive ? "rgba(34, 197, 94, 0.8)" : "rgba(239, 68, 68, 0.8)"], // Solid color at the top
            [
              0.5,
              positive ? "rgba(34, 197, 94, 0.7)" : "rgba(239, 68, 68, 0.7)",
            ], // Transition color
            [1, "rgba(255, 255, 255, 0)"], // Fully transparent at the bottom
          ],
        },
        lineColor: positive ? "#22c55e" : "#ef4444", // Border color
        lineWidth: 2, // Thicker border for sharpness
      },
    ],
    legend: {
      enabled: false, // No legend
    },
    credits: {
      enabled: false, // No credits
    },
    tooltip: {
      enabled: false, // No tooltip
    },
    plotOptions: {
      area: {
        marker: {
          enabled: false, // Disable markers for clean look
        },
        enableMouseTracking: false, // Disable interaction for minimalism
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
  idx
}) => {
  return (
    <div className={`flex items-center justify-between py-2 border-b border-gray-200 mb-4 last-card${idx}`}>
      <div className="flex flex-col items-start justify-start">
        {/* <Icon className="w-8 h-8 text-yellow-500" variant={variant} /> */}
        <img src={Icon} />
        <div className="text-[#475467] font-sans text-sm mt-1 font-semibold leading-4">
          {name}
        </div>
      </div>
      <div
        className={` ${
          positive ? "text-green-500" : "text-red-500"
        } text-right`}
      >
        <p className="font-semibold text-[#182230] leading-5 text-[14px] font-sans">
          {value}
        </p>
        <div className="flex items-center justify-end  leading-4 font-semibold text-sm font-sans">
          {positive ? (
            <img src={UpPointedTriange} />
          ) : (
            <img src={DowPointedTriange} />
          )}{" "}
          {percentage}%
        </div>
      </div>
      <MiniChart positive={positive} />
    </div>
  );
};

// Card Component
const CryptoCard = ({ title, data, positive }) => {
  return (
    <div className="bg-white rounded-lg  p-4 max-h-[1130px] overflow-y-auto">
      <div className="flex justify-between mb-4">
        <h2 className="text-[12px] leading-4 font-semibold text-[#667085]">
          {title}
        </h2>
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
          idx={index}
        />
      ))}
    </div>
  );
};

export default CryptoCard;

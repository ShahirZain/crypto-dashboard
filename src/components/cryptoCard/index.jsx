import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { BsArrowUp, BsArrowDown } from "react-icons/bs";

// Mini Chart Component
const MiniChart = ({ positive }) => {
  const options = {
    chart: {
      type: "area",
      height: 60,
      width: 100,
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
        data: [1, 2, 3, 2, 3, 4, 3, 4],
        color: positive ? "#22c55e" : "#ef4444", // green or red
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
        lineWidth: 2,
        marker: {
          enabled: false,
        },
      },
    },
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

// Single Row Component
const CryptoRow = ({ icon: Icon, name, value, percentage, positive }) => {
  return (
    <div className="flex items-center justify-between py-2 border-b-2 border-gray-200 mb-8">
      <div className="flex flex-col items-center ">
        <Icon className="w-10 h-10 text-yellow-500" />
        <div className="text-gray-500 text-lg mt-2 font-semibold">{name}</div>
      </div>
      <div className={` ${positive ? "text-green-500" : "text-red-500"}`}>
        <p className="font-bold text-gray-800 !font-2xl">{value}</p>
        <div className="flex items-center justify-end">
          {positive ? <BsArrowUp /> : <BsArrowDown />} {percentage}%
        </div>
      </div>
      <MiniChart positive={positive} />
    </div>
  );
};

// Card Component
const CryptoCard = ({ title, data, positive }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6 ">
      <div className="flex justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-500">{title}</h2>
      </div>
      {data.map((item, index) => (
        <CryptoRow
          key={index}
          icon={item.icon}
          name={item.name}
          value={item.value}
          percentage={item.percentage}
          positive={positive}
        />
      ))}
    </div>
  );
};

export default CryptoCard;
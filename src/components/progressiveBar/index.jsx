import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { FaBitcoin } from "react-icons/fa";
import { SiBlockchaindotcom } from "react-icons/si";
import { BsCircleFill } from "react-icons/bs";
import { BsArrowUp, BsArrowDown } from "react-icons/bs";

// Progress Bar Component
const ProgressBar = ({ bitcoin, altcoins, other }) => {
  const options = {
    chart: {
      type: "bar",
      height: 40,
      backgroundColor: "transparent",
    },
    title: {
      text: null,
    },
    xAxis: {
      visible: false,
    },
    yAxis: {
      max: 100,
      visible: false,
    },
    series: [
      {
        data: [other],
        color: "#e5e7eb", // Other - gray
      },
      {
        data: [altcoins],
        color: "#2563eb", // Altcoins - blue
      },
      {
        data: [bitcoin],
        color: "#f59e0b", // Bitcoin - amber
      },
    ],
    plotOptions: {
      series: {
        stacking: "percent",
        pointWidth: 30,
      },
    },
    credits: {
      enabled: false,
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      enabled: false,
    },
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

// Single Crypto Domination Row
const DominationRow = ({ icon: Icon, label, value, percentage, positive }) => {
  return (
    <div className="flex flex-col items-center ">
      <div className="flex items-center space-x-2">
        <Icon className="w-6 h-6 text-yellow-500" />
        <span className="text-gray-700 font-medium">{label}</span>
      </div>
      <div className="text-3xl font-bold text-gray-400 mt-4">{value}%</div>
      <div
        className={`flex items-center text-sm ${
          positive ? "text-green-500" : "text-red-500"
        }`}
      >
        {positive ? "▲" : "▼"}
        <span className="ml-2">{percentage}%</span>
      </div>
    </div>
  );
};

// Domination Card Component
const DominationCard = ({ bitcoin, altcoins, other }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6 w-full">
      <h2 className="text-xl font-semibold mb-4 text-gray-500">Domination</h2>
      <div className="flex justify-around mb-6">
        <DominationRow
          icon={FaBitcoin}
          label="Bitcoin"
          value={bitcoin.value}
          percentage={bitcoin.percentage}
          positive={bitcoin.positive}
        />
        <DominationRow
          icon={SiBlockchaindotcom}
          label="Altcoins"
          value={altcoins.value}
          percentage={altcoins.percentage}
          positive={altcoins.positive}
        />
        <DominationRow
          icon={BsCircleFill}
          label="Other"
          value={other.value}
          percentage={other.percentage}
          positive={other.positive}
        />
      </div>
      <ProgressBar
        bitcoin={bitcoin.value}
        altcoins={altcoins.value}
        other={other.value}
      />
    </div>
  );
};

export default DominationCard
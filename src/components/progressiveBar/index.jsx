import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { TokenIcon } from "@web3icons/react";
import { BsCircleFill } from "react-icons/bs";

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
        data: [Number(other)],
        color: "#e5e7eb", // Other - gray
      },
      {
        data: [Number(altcoins)],
        color: "#2563eb", // Altcoins - blue
      },
      {
        data: [Number(bitcoin)],
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
const DominationRow = ({
  icon: Icon,
  label,
  value,
  percentage,
  positive,
  symbol,
  variant,
}) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex items-center space-x-2">
        <Icon
          className="w-6 h-6 text-yellow-500"
          symbol={symbol}
          variant={variant}
        />
        <span className="text-gray-700 font-medium text-sm sm:text-base">
          {label}
        </span>
      </div>
      <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-400 mt-2 sm:mt-4">
        {value}%
      </div>
      <div
        className={`flex items-center text-xs sm:text-sm ${
          positive ? "text-green-500" : "text-red-500"
        }`}
      >
        {positive ? "▲" : "▼"}
        <span className="ml-1">{percentage}%</span>
      </div>
    </div>
  );
};

// Domination Card Component
const DominationCard = ({ bitcoin, altcoins, other }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 sm:p-6 w-full">
      <h2 className="text-lg sm:text-xl font-semibold mb-4 text-gray-500 text-center sm:text-left">
        Domination
      </h2>
      <div className="flex flex-col sm:flex-row justify-around gap-6 mb-6">
        <DominationRow
          icon={TokenIcon}
          label="Bitcoin"
          value={bitcoin.value}
          percentage={bitcoin.percentage}
          positive={bitcoin.positive}
          symbol="btg"
          variant="branded"
        />
        <DominationRow
          icon={TokenIcon}
          label="Altcoins"
          value={altcoins.value}
          percentage={altcoins.percentage}
          positive={altcoins.positive}
          symbol="alu"
          variant="branded"
        />
        <DominationRow
          icon={BsCircleFill}
          label="Other"
          value={other.value}
          percentage={other.percentage}
          positive={other.positive}
        />
      </div>
      <div className="w-full max-w-2xl mx-auto">
        <ProgressBar
          bitcoin={bitcoin.value}
          altcoins={altcoins.value}
          other={other.value}
        />
      </div>
    </div>
  );
};

export default DominationCard;

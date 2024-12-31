import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { TokenIcon } from "@web3icons/react";
import { BsCircleFill } from "react-icons/bs";

// Progress Bar Component
const ProgressBar = ({ bitcoin, altcoins, other }) => {
  const options = {
    chart: {
      type: "bar",
      height: 35, // Reduced height
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
        color: "#D0D5DD", // Other - gray
      },
      {
        data: [Number(altcoins)],
        color: "#2970FF", // Altcoins - blue
      },
      {
        data: [Number(bitcoin)],
        color: "#f7921A", // Bitcoin - amber
      },
    ],
    plotOptions: {
      series: {
        stacking: "percent",
        pointWidth: 15, // Reduced width
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
    <div className="flex flex-col items-center text-center space-y-1">
      <div className="flex items-center space-x-1">
        <Icon
          className="w-4 h-4 text-[#D0D5DD]"
          symbol={symbol}
          variant={variant}
        />
        <span className="text-gray-700 font-bold text-sm">{label}</span>
      </div>
      <div className="text-lg font-bold text-gray-800">{value}%</div>
      <div
        className={`flex items-center text-xs ${
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
    <div className="bg-white rounded-lg shadow p-2 w-full max-h-[165px]">
      <h2 className="text-sm font-semibold mb-2 text-gray-500 text-left">
        Domination
      </h2>
      <div className="flex justify-around items-center mb-2">
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
      <div className="w-full">
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

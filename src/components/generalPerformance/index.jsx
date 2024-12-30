/* eslint-disable react/prop-types */
import { CiBitcoin } from "react-icons/ci";
import MarketPerformanceChart from "../lineChart";

// Wrapper Component for Layout, Icon, and Customization
const ChartWrapper = ({ icon: Icon, title, subtitle, data }) => {
  return (
    <div className="relative mx-auto bg-white p-6 rounded-lg shadow w-full">
      <MarketPerformanceChart data={data} />

      {/* Customizable Icon and Label */}
      <div className="absolute top-5 right-6 flex items-center space-x-4">
        <div className="relative flex flex-col items-center p-4">
          <div className="flex items-center justify-end w-full">
            <Icon className="w-8 h-8 text-yellow-500" />
          </div>
          <div className="flex items-center space-x-1 mt-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-gray-700 font-medium">{title}</span>
          </div>
        </div>
      </div>
    </div>
  );
};


const MarketPerformance = () => {
  const chartData = {
    title: "General performance of market",
    subtitle: "$ 27,364.48",
    percentageChange: "7.5",
    categories: [
      "00:00",
      "03:00",
      "06:00",
      "09:00",
      "12:00",
      "15:00",
      "18:00",
      "21:00",
    ],
    series: [
      {
        name: "Bitcoin",
        data: [0, 1, 2, -1, 1, 0.5, 1.2, 2],
        color: "#3b82f6",
        lineWidth: 3,
      },
      {
        name: "alt",
        data: [0, 0.5, 1.5, -0.8, 0.7, 0.3, 1, 1.5],
        color: "#d1d5db",
        lineWidth: 1,
      },
      {
        name: "pie",
        data: [0, -0.5, 1.2, -1, 0.5, -0.2, 0.8, 1.2],
        color: "#d1d5db",
        lineWidth: 1,
      },
    ],
  };

  return (
    <ChartWrapper
      icon={CiBitcoin}
      title="Bitcoin"
      subtitle={chartData.subtitle}
      data={chartData}
    />
  );
};

export default MarketPerformance;

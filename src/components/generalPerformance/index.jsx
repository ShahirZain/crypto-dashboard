/* eslint-disable react/prop-types */
import { TokenIcon } from "@web3icons/react";
import MarketPerformanceChart from "../lineChart";

// Wrapper Component for Layout, Icon, and Customization
const ChartWrapper = ({ icon: Icon, title, subtitle, data }) => {
  return (
    <div className="relative mx-auto bg-white p-4 rounded-lg shadow w-full max-h-[430px]">
      {/* Chart Section */}
      <div className="w-full h-[480px]">
        <MarketPerformanceChart data={data} />
      </div>

      {/* Customizable Icon and Label */}
      <div className="absolute top-4 right-4 flex items-center space-x-3">
        <div className="relative flex flex-col items-center">
          <div className="flex items-center justify-center w-full">
            <Icon
              className="w-6 h-6 text-yellow-500"
              symbol="btg"
              variant="branded"
            />
          </div>
          <div className="flex items-center space-x-1 mt-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-gray-600 text-sm font-medium">{title}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const MarketPerformance = ({ BTC, marketPerformanceValues }) => {
  const percentageChange = (
    ((BTC.current_price - BTC.price_24h_ago) / BTC.current_price) *
    100
  ).toFixed(2);

  // Customize title and subtitle as HTML
  const chartData = {
    title: `<strong style="font-size:16px;">Bitcoin Market Performance</strong>`,
    subtitle: `<span style="font-size:24px; font-weight:600; line-height:36px;"><b>$${BTC.current_price}</b></span>`,
    percentageChange,
    series: Object.values(marketPerformanceValues),
  };

  return (
    <ChartWrapper
      icon={TokenIcon}
      title="Bitcoin"
      subtitle={chartData.subtitle}
      data={chartData}
    />
  );
};

export default MarketPerformance;

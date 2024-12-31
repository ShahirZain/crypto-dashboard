/* eslint-disable react/prop-types */
import { TokenIcon } from "@web3icons/react";
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
            <Icon
              className="w-8 h-8 text-yellow-500"
              symbol="btg"
              variant="branded"
            />
          </div>
          <div className="flex items-center space-x-1  mt-4">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-gray-700 font-medium">{title}</span>
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
    title: `<strong style="font-size:24px;">Bitcoin Market Performance</strong>`,
    subtitle: `<span><b>$${BTC.current_price}</b></span>`,
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

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useMemo } from "react";

const Dashboard = () => {
  const marketData = useMemo(() => [], []); // Use memoization for better performance

  const chartOptions = {
    chart: {
      type: "line",
    },
    title: {
      text: "General performance of market",
    },
    series: [
      {
        data: [1, 2, 3, 4, 5], // Replace with actual data
      },
    ],
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* Market Performance Section */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-2">Market Performance</h2>
        <div className="flex items-center">
          <p className="text-2xl font-semibold mr-2">
            ${marketData.marketPerformance.bitcoinPrice}
          </p>
          <span
            className={`text-sm ${
              marketData.marketPerformance.bitcoinChange < 0
                ? "text-red-500"
                : "text-green-500"
            }`}
          >
            {marketData.marketPerformance.bitcoinChange}%
          </span>
        </div>
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      </div>

      {/* Altseason Index */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-2">Altseason Index</h2>
        <p className="text-2xl font-semibold">
          {marketData.marketPerformance.altcoinIndex}
        </p>
      </div>

      {/* Fear and Greed Index */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-2">Fear and Greed Index</h2>
        <p className="text-2xl font-semibold">
          {marketData.marketPerformance.fearAndGreedIndex}
        </p>
      </div>

      {/* Top Gainers */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-2">Top Gainers</h2>
        <ul>
          {marketData.topGainers.map((coin) => (
            <li key={coin.name} className="flex justify-between items-center">
              <span>{coin.name}</span>
              <span className="text-green-500">
                ${coin.price} ({coin.change}%)
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Top Losers */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-2">Top Losers</h2>
        <ul>
          {marketData.topLosers.map((coin) => (
            <li key={coin.name} className="flex justify-between items-center">
              <span>{coin.name}</span>
              <span className="text-red-500">
                ${coin.price} ({coin.change}%)
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Domination */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-2">Domination</h2>
        <div className="flex">
          <div className="flex items-center">
            <div className="w-4 h-4 rounded-full bg-blue-500 mr-2"></div>
            <span>Bitcoin: {marketData.dominations.bitcoin}%</span>
          </div>
          <div className="flex items-center ml-4">
            <div className="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
            <span>Altcoins: {marketData.dominations.altcoins}%</span>
          </div>
          <div className="flex items-center ml-4">
            <div className="w-4 h-4 rounded-full bg-gray-500 mr-2"></div>
            <span>Other: {marketData.dominations.other}%</span>
          </div>
        </div>
      </div>

      {/* Prices */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-2">Prices</h2>
        <ul>
          {marketData.prices.map((price) => (
            <li key={price.name} className="flex justify-between items-center">
              <span>{price.name}</span>
              <span>${price.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;

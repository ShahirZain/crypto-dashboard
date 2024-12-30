import { useMemo } from "react";
import { CiCalendar } from "react-icons/ci";
import moment from "moment";
import MarketPerformance from "./components/generalPerformance";
import AltseasonIndexCard from './components/altSeason';
import FearGreedCard from './components/guage';

const mockData = {
  marketPerformance: {
    bitcoinPrice: 27364.48,
    bitcoinChange: -7.5,
    altcoinIndex: 75,
    fearAndGreedIndex: 70,
  },
  topGainers: [
    { name: "BSV", price: 0.00003426, change: 7.5 },
    { name: "SPX", price: 5.3, change: 7.5 },
    { name: "RUNE", price: 0.03426, change: 7.5 },
    { name: "XEC", price: 0.1418, change: 7.5 },
    { name: "DOGE", price: 0.1418, change: 7.5 },
  ],
  topLosers: [
    { name: "BSV", price: 0.00003426, change: -7.5 },
    { name: "SPX", price: 5.3, change: -7.5 },
    { name: "RUNE", price: 0.03426, change: -7.5 },
    { name: "XEC", price: 0.1418, change: -7.5 },
    { name: "DOGE", price: 0.1418, change: -7.5 },
  ],
  dominations: {
    bitcoin: 50.5,
    altcoins: 27.4,
    other: 15.9,
  },
  prices: [
    { name: "Bitcoin Market Cap", value: 27364.48 },
    { name: "ETH", value: 27364.48 },
    { name: "Gold", value: 27364.48 },
    { name: "S&P 500", value: 27364.48 },
  ],
};

const Dashboard = () => {
  const marketData = useMemo(() => mockData, []); // Use memoization for better performance

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
    <div className="flex flex-col  !bg-base_gray w-screen h-screen p-4">
      <div className="flex justify-between  p-4  h-fit w-full">
        <p className="font-semibold text-gray-800 text-lg h-fit">
          Daily Market Overview
        </p>
        <p className=" text-gray-800  justify-center items-center flex h-fit">
          <CiCalendar className="text-lg font-semibold" />
          <span className="text-lg ml-2 font-semibold">
            {moment().format("DD MMM YYYY")}
          </span>
        </p>
      </div>

      <MarketPerformance />

      <div className="grid grid-cols-2 gap-4 mt-4">
        <AltseasonIndexCard  />
        <FearGreedCard value={50} max={100} />
      </div>
    </div>
  );
};

export default Dashboard;

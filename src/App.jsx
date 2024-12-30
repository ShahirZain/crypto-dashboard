import { useMemo } from "react";
import { CiCalendar } from "react-icons/ci";
import moment from "moment";
import MarketPerformance from "./components/generalPerformance";
import AltseasonIndexCard from './components/altSeason';
import FearGreedCard from './components/guage';
import { FaBitcoin, FaEthereum, FaDog } from "react-icons/fa";
import CryptoCard from "./components/cryptoCard"
import DominationCard from './components/progressiveBar'; 

  const gainers = [
    { icon: FaBitcoin, name: "BSV", value: "$0.00003426", percentage: 7.5 },
    { icon: FaEthereum, name: "SPX", value: "$0.8684", percentage: 7.5 },
    { icon: FaBitcoin, name: "RUNE", value: "$5.30", percentage: 7.5 },
    { icon: FaDog, name: "XEC", value: "$0.03426", percentage: 7.5 },
    { icon: FaDog, name: "DOGE", value: "$0.1418", percentage: 7.5 },
  ];

  const losers = [
    { icon: FaBitcoin, name: "BSV", value: "$0.00003426", percentage: -7.5 },
    { icon: FaEthereum, name: "SPX", value: "$0.8684", percentage: -7.5 },
    { icon: FaBitcoin, name: "RUNE", value: "$5.30", percentage: -7.5 },
    { icon: FaDog, name: "XEC", value: "$0.03426", percentage: -7.5 },
    { icon: FaDog, name: "DOGE", value: "$0.1418", percentage: -7.5 },
  ];

   const DominationCardMock = {
     bitcoin: { value: 50.5, percentage: 7.5, positive: true },
     altcoins: { value: 27.4, percentage: -7.5, positive: false },
     other: { value: 15.9, percentage: -7.5, positive: false },
   };
const Dashboard = () => {

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
    <div className="flex flex-col  !bg-base_gray w-screen h-full p-4">
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
        <AltseasonIndexCard />
        <FearGreedCard value={50} max={100} />
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <CryptoCard title="Top Gainers" data={gainers} positive={true} />
        <CryptoCard title="Top Losers" data={losers} positive={false} />
      </div>

      <div className="grid grid-cols-2 place-items-center mt-4">
        <DominationCard
          bitcoin={DominationCardMock.bitcoin}
          altcoins={DominationCardMock.altcoins}
          other={DominationCardMock.other}
        />
      </div>
    </div>
  );
};

export default Dashboard;

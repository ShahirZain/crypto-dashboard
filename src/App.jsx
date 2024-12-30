import { CiCalendar } from "react-icons/ci";
import moment from "moment";
import MarketPerformance from "./components/generalPerformance";
import AltseasonIndexCard from "./components/altSeason";
import FearGreedCard from "./components/guage";
import { FaBitcoin, FaEthereum, FaDog } from "react-icons/fa";
import CryptoCard from "./components/cryptoCard";
import DominationCard from "./components/progressiveBar";
import PricesCard from "./components/priceCard";
import { GiGoldBar } from "react-icons/gi";
import { SiFsecure } from "react-icons/si";

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

const pricesData = [
  {
    icon: FaBitcoin,
    label: "Market Cap",
    price: "$27,364.48",
  },
  {
    icon: FaEthereum,
    label: "ETH",
    price: "$27,364.48",
  },
  {
    icon: GiGoldBar,
    label: "Gold",
    price: "$27,364.48",
  },
  {
    icon: SiFsecure,
    label: "S&P 500",
    price: "$27,364.48",
  },
];

const Dashboard = () => {
  return (
    <div className="flex flex-col !bg-base_gray w-screen h-full p-4">
      <div className="flex justify-between p-4 w-full">
        <p className="font-semibold text-gray-800 text-lg">
          Daily Market Overview
        </p>
        <p className="text-gray-800 flex items-center">
          <CiCalendar className="text-lg" />
          <span className="ml-2 font-semibold">
            {moment().format("DD MMM YYYY")}
          </span>
        </p>
      </div>

      <MarketPerformance />

      {/* Responsive Grid for Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <AltseasonIndexCard />
        <FearGreedCard value={50} max={100} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <CryptoCard title="Top Gainers" data={gainers} positive={true} />
        <CryptoCard title="Top Losers" data={losers} positive={false} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center mt-4">
        <DominationCard
          bitcoin={DominationCardMock.bitcoin}
          altcoins={DominationCardMock.altcoins}
          other={DominationCardMock.other}
        />
      </div>

      {/* Responsive Prices Card */}
      <div className="mt-8">
        <PricesCard prices={pricesData} />
      </div>
    </div>
  );
};

export default Dashboard;

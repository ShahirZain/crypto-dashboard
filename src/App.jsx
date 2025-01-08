import { CiCalendar } from "react-icons/ci";
import moment from "moment";
import MarketPerformance from "./components/generalPerformance";
import AltseasonIndexCard from "./components/altSeason";
import FearGreedCard from "./components/guage";
import CryptoCard from "./components/cryptoCard";
import DominationCard from "./components/progressiveBar";
import PricesCard from "./components/priceCard";
import {
  TokenBSV,
  TokenETH,
  TokenRUNE,
  TokenXEC,
  TokenOMNOM,
  TokenPAXG,
  TokenDSETH,
  TokenKAR,
  TokenKAI,
  TokenPOND,
  TokenVPAD
} from "@web3icons/react";
import Bitcoin from "./assets/topGainer/bitcoin.png";
import Doge from "./assets/topGainer/Doge.png";
import Rune from "./assets/topGainer/RUne.png";
import SGP from "./assets/topGainer/SGP.png";
import XEC from "./assets/topGainer/XEC.png";
import GoldCoin from "./assets/goldcoin.png";
import Eth from "./assets/ethereum-eth-logo.png";
import sp500 from "./assets/sp500.png";
import MockMarketData from "./mock/downloaded-market-data.json";
console.log("🚀 ~ MockMarketData:", MockMarketData)

function getIconForSymbol(symbol) {
  switch (symbol) {
    case "ATAUSDT":
      return Bitcoin;
    case "COOKIEUSDT":
      return SGP;
    case "FUELUSDT":
      return Rune;
    case "STEEMUSDT":
      return XEC;
    case "FMCUSDT":
      return Doge;
    case "PAXGUSDT":
      return Bitcoin;
    case "WRXUSDT":
      return Bitcoin;
    case "AKROUSDT":
      return SGP;
    case "AKIUSDT":
      return Rune;
    case "PONDUSDT":
      return XEC;
    case "VPADUSDT":
      return Doge;
    default:
      return TokenBSV;
  }
}

const gainers = MockMarketData.top_coins.top_gainers.map((gainer) => ({
  icon: getIconForSymbol(gainer.symbol),
  name: gainer.symbol, 
  value: `$${gainer.price.toFixed(8)}`,
  percentage: gainer.change,
  variant: "branded",

}));


const losers = MockMarketData.top_coins.top_losers.map((loser) => ({
  icon: getIconForSymbol(loser.symbol),
  name: loser.symbol,
  value: `$${loser.price.toFixed(8)}`,
  percentage: loser.change.toFixed(2),
  variant: "branded",
}));

const DominationCardMock = {
  bitcoin: {
    value: MockMarketData.market_domination.btc.current.toFixed(2),
    percentage:
      (((MockMarketData.market_domination.total_market_cap.current - MockMarketData
        .market_domination.btc.current) /
        MockMarketData.market_domination.total_market_cap.current) *
      100).toFixed(1),
    positive: MockMarketData.market_domination.btc.change_24h > 0,
  },
  altcoins: {
    value: MockMarketData.market_domination.altcoins.current.toFixed(2),
    percentage:
      ((( MockMarketData.market_domination.total_market_cap.current -  MockMarketData.market_domination.altcoins.current) /
        MockMarketData.market_domination.total_market_cap.current) *
      100).toFixed(1),
    positive: MockMarketData.market_domination.altcoins.change_24h > 0,
  },
  other: {
    value: MockMarketData.market_domination.other.current.toFixed(2),
    percentage:
      (( (MockMarketData.market_domination.total_market_cap.current - MockMarketData.market_domination.other.current) /
        MockMarketData.market_domination.total_market_cap.current) *
      100).toFixed(1), // Assuming no change for 'other' in this case
    positive: false,
  },
};



const pricesData = Object.entries(MockMarketData.other_markets).map(
  ([key, value]) => ({
    icon: {
      eth: Eth,
      sp500: sp500,
      gold: GoldCoin,
    }[key],
    label: key.toUpperCase(),
    price: `$${value.current.toFixed(2)}`,
    variant: "branded",
  })
);

const marketPerformanceValues = Object.fromEntries(
  Object.entries(MockMarketData.market_performance.top_pairs).map(([key, values]) => [key, {data:values.flat(), name:key}])
);
const Dashboard = () => {

  return (
    <div className=" w-screen h-full  !font-sans">
      {/* Container max-width adjusted to fit within 595px */}
      <div className="max-w-[595px] mx-auto !bg-base_gray p-4">
        {/* Header */}
        <div className="flex justify-between p-2 w-full">
          <p className="leading-4 text-[#182230] text-[16px] font-semibold">
            Daily Market Overview
          </p>
          <p className="text-[#182230] flex items-center text-[12px] font-sans font-[500]">
            <CiCalendar className="text-lg text-[#182230]" />
            <span className="ml-2 font-[500] -mb-[2px] text-[12px] font-sans leading-[18px] text-[#182230]">
              {moment("28 June 2024").format("DD MMMM YYYY")}
            </span>
          </p>
        </div>

        {/* Market Performance Section */}
        <MarketPerformance
          BTC={MockMarketData.market_performance.btc}
          marketPerformanceValues={marketPerformanceValues}
        />

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <AltseasonIndexCard
            altSeason={MockMarketData.market_indexes.altseason}
          />
          <FearGreedCard
            value={MockMarketData.market_indexes.fear_and_greed.current}
            prev={MockMarketData.market_indexes.fear_and_greed.previous}
            max={100}
          />
        </div>

        {/* Gainers and Losers Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <CryptoCard title="Top Gainers" data={gainers} positive={true} />
          <CryptoCard title="Top Losers" data={losers} positive={false} />
        </div>

        {/* Domination Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center mt-4 gap-4">
          <DominationCard
            bitcoin={DominationCardMock.bitcoin}
            altcoins={DominationCardMock.altcoins}
            other={DominationCardMock.other}
          />
          <div className="w-full bg-white h-full rounded-md"></div>
        </div>

        {/* Prices Card Section */}
        <div className="mt-6">
          <PricesCard prices={pricesData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

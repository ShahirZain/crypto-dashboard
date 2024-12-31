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

import MockMarketData from "./mock/downloaded-market-data.json";

function getIconForSymbol(symbol) {
  switch (symbol) {
    case "ATAUSDT":
      return TokenBSV;
    case "COOKIEUSDT":
      return TokenETH;
    case "FUELUSDT":
      return TokenRUNE;
    case "STEEMUSDT":
      return TokenXEC;
    case "FMCUSDT":
      return TokenOMNOM;
    case "PAXGUSDT":
      return TokenPAXG;
    case "WRXUSDT":
      return TokenDSETH;
    case "AKROUSDT":
      return TokenKAR;
    case "AKIUSDT":
      return TokenKAI;
    case "PONDUSDT":
      return TokenPOND;
    case "VPADUSDT":
      return TokenVPAD;
    default:
      return TokenBSV;
  }
}

const gainers = MockMarketData.top_coins.top_gainers.map((gainer) => ({
  icon: getIconForSymbol(gainer.symbol),
  name: gainer.symbol.replace("USDT", ""), // Remove "USDT" from symbol
  value: `$${gainer.price.toFixed(4)}`,
  percentage: gainer.change,
  variant: "branded",

}));

const losers = MockMarketData.top_coins.top_losers.map((loser) => ({
  icon: getIconForSymbol(loser.symbol),
  name: loser.symbol.replace("USDT", ""),
  value: `$${loser.price.toFixed(4)}`,
  percentage: loser.change.toFixed(2),
  variant: "branded",
}));

const DominationCardMock = {
  bitcoin: {
    value: MockMarketData.market_domination.btc.current.toFixed(2),
    percentage:
      ((MockMarketData.market_domination.btc.current /
        MockMarketData.market_domination.total_market_cap.current) *
      100),
    positive: MockMarketData.market_domination.btc.change_24h > 0,
  },
  altcoins: {
    value: MockMarketData.market_domination.altcoins.current.toFixed(2),
    percentage:
      ((MockMarketData.market_domination.altcoins.current /
        MockMarketData.market_domination.total_market_cap.current) *
      100),
    positive: MockMarketData.market_domination.altcoins.change_24h > 0,
  },
  other: {
    value: MockMarketData.market_domination.other.current.toFixed(2),
    percentage:
      ((MockMarketData.market_domination.other.current /
        MockMarketData.market_domination.total_market_cap.current) *
      100), // Assuming no change for 'other' in this case
    positive: false,
  },
};



const pricesData = Object.entries(MockMarketData.other_markets).map(([key, value]) => ({
  icon: {
    eth: TokenETH,
    sp500: TokenDSETH,
    gold: TokenPAXG,
  }[key],
  label: key.toUpperCase(),
  price: `$${value.current.toFixed(2)}`,
  variant: "branded",
}));

const marketPerformanceValues = Object.fromEntries(
  Object.entries(MockMarketData.market_performance.top_pairs).map(([key, values]) => [key, {data:values.flat(), name:key}])
);
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

      <MarketPerformance
        BTC={MockMarketData.market_performance.btc}
        marketPerformanceValues={marketPerformanceValues}
      />

      {/* Responsive Grid for Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <AltseasonIndexCard
          altSeason={MockMarketData.market_indexes.altseason}
        />
        <FearGreedCard
          value={MockMarketData.market_indexes.fear_and_greed.current}
          prev={MockMarketData.market_indexes.fear_and_greed.previous}
          max={100}
        />
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

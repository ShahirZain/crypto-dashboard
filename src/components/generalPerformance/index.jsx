/* eslint-disable react/prop-types */
import { TokenIcon } from "@web3icons/react";
import MarketPerformanceChart from "../lineChart";
import BitcoinIcon from "../../assets/bitcoin-btc-logo.png";
// Wrapper Component for Layout, Icon, and Customization
const ChartWrapper = ({ icon: Icon, title, subtitle, data }) => {
  return (
    <div className="relative mx-auto bg-white  w-full max-h-[205px]">
      {/* Chart Section */}
      {/* <div className="w-full h-[480px]"> */}
        <MarketPerformanceChart data={data} />

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
    title: `<strong style="font-size:16px; font-family:Poppins">General performance of market</strong>`,
    subtitle: `<span style="font-size:24px; font-weight:600; line-height:36px; font-family:Poppins;"><b>$${BTC.current_price}</b></span>`,
    percentageChange,
    series: Object.values(marketPerformanceValues),
  };

  return (
    <div className="bg-white border-color-[#E4E7EC] rounded-md border p-2 h-[303px]">
      <div className="px-2">
        <div className="flex items-center justify-between w-full">
          <span className="text-[12px] font-sans text-[#667085] !font-semibold leading-[18px]">
            General performance of market
          </span>
          <img src={BitcoinIcon} alt="Bitcoin" className="w-6 h-6" />
        </div>
        <div className="flex items-center justify-between w-full">
          <p className="text-[#475467] text-[12px] font-medium">
            <span
              className="text-[24px] font-semibold  font-sans"
              style={{ lineHeight: "36px" }}
            >
              <b className="text-[#182230] text-[24px] font-semibold leading-[36px]">
                ${BTC.current_price}
              </b>
            </span>
            <span className="text-[#17B26A] text-[12px] leading-4 font-semibold font-sans ml-2">
              ▲
            </span>{" "}
            <span className="text-[#17B26A] font-sans text-[12px]">
              {percentageChange}%
            </span>
          </p>
          <p
            className="text-[16px] text-[#6b7280] font-normal flex align-center items-center"
            style={{ lineHeight: "18px" }}
          >
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
            Bitcoin
          </p>
        </div>
      </div>
      <ChartWrapper
        icon={TokenIcon}
        subtitle={chartData.subtitle}
        data={chartData}
      />
    </div>
  );
};

export default MarketPerformance;

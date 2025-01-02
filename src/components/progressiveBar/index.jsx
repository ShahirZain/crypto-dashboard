import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { TokenIcon } from "@web3icons/react";
import { BsCircleFill } from "react-icons/bs";
import UpPointedTriange from "../../assets/Icon.png";
import DowPointedTriange from "../../assets/downPointedIcon.png";
import Bitcoin from "../../assets/bitcoin-btc-logo.png";
import Altcoin from "../../assets/altcoin.png";
const ProgressBar = ({ bitcoin, altcoins, other }) => {
    const total = bitcoin + altcoins + other;
    const bitcoinWidth = (bitcoin / total) * 100;
    const altcoinsWidth = (altcoins / total) * 100;
    const otherWidth = (other / total) * 100;


  return (
    <div className="relative w-full h-4 bg-gray-200 rounded-full overflow-hidden flex">
      {/* Other - Gray */}
      <div
        className="h-full bg-orange-500"
        style={{
          width: `${bitcoinWidth}%`,
          borderTopLeftRadius:
             "15px" ,
          borderBottomLeftRadius:
             "15px" ,
        }}
      ></div>

      <div
        className="h-full bg-blue-500"
        style={{
          width: `${altcoinsWidth}%`,
        }}
      ></div>


      <div
        className="h-full bg-gray-300"
        style={{
          width: `${otherWidth}%`,
          borderTopRightRadius:
            otherWidth > 0 && altcoinsWidth === 0 && bitcoinWidth === 0
              ? "15px"
              : "0px",
          borderBottomRightRadius:
            otherWidth > 0 && altcoinsWidth === 0 && bitcoinWidth === 0
              ? "15px"
              : "0px",
        }}
      ></div>

    </div>
  );
};

// Single Crypto Domination Row
const DominationRow = ({
  icon: Icon,
  label,
  value,
  percentage,
  positive,
  symbol,
  variant,
}) => {
  return (
    <div className="flex flex-col items-center text-center space-y-1">
      <div className="flex items-center space-x-1">
        {label === "Other" ? (
          <Icon
            className="w-3 h-3 text-[#D0D5DD]"
            symbol={symbol}
            variant={variant}
          />
        ) : (
          <img src={Icon} className="w-3 h-3"/>
        )}

        <span className="text-[#475467] font-semibold text-[12px] leading-4">
          {label}
        </span>
      </div>
      <div className="text-[24px] leading-9 font-semibold text-[#182230]">
        {value}%
      </div>
      <div
        className={`flex items-center text-[12px] font-sans font-semibold leading-[18px] ${
          positive ? "text-[#17B26A]" : "text-[#F04438]"
        }`}
      >
        {positive ? (
          <img src={UpPointedTriange} />
        ) : (
          <img src={DowPointedTriange} />
        )}
        <span className="ml-1 font-semibold text-xs leading-4">
          {percentage}%
        </span>
      </div>
    </div>
  );
};

// Domination Card Component
const DominationCard = ({ bitcoin, altcoins, other }) => {
  return (
    <div className="bg-white rounded-lg shadow p-2 w-full max-h-[165px]">
      <h2 className="text-[12px] font-semibold mb-2 text-[#667085] text-left leading-4 p-2">
        Domination
      </h2>
      <div className="flex justify-around items-center mb-2">
        <DominationRow
          icon={Bitcoin}
          label="Bitcoin"
          value={bitcoin.value}
          percentage={bitcoin.percentage}
          positive={bitcoin.positive}
          symbol="btg"
          variant="branded"
        />
        <DominationRow
          icon={Altcoin}
          label="Altcoins"
          value={altcoins.value}
          percentage={altcoins.percentage}
          positive={altcoins.positive}
          symbol="alu"
          variant="branded"
        />
        <DominationRow
          icon={BsCircleFill}
          label="Other"
          value={other.value}
          percentage={other.percentage}
          positive={other.positive}
        />
      </div>
      <div className="w-full">
        <ProgressBar
          bitcoin={Number(bitcoin.value)}
          altcoins={Number(altcoins.value)}
          other={Number(other.value)}
        />
      </div>
    </div>
  );
};

export default DominationCard;

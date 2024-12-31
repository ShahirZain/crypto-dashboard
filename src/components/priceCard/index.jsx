import React from "react";

// Single Price Row Component
const PriceRow = ({ icon: Icon, label, price, variant }) => {
  return (
    <div className="flex flex-col items-center space-y-1">
      <div className="flex items-center space-x-1 py-2">
        <Icon className="w-6 h-6 text-yellow-500" variant={variant} />
        <span className="text-gray-600 leading-5 font-sans text-xs font-semibold">
          {label}
        </span>
      </div>
      <div className="text-lg leading-4 font-bold text-[#182230] pb-4">{price}</div>
    </div>
  );
};

// Prices Card Component
const PricesCard = ({ prices }) => {
  return (
    <div className="bg-white rounded-lg shadow p-2 w-full max-h-[138px]">
      <h2 className="text-lg leading-4 font-semibold mb-2 text-[#182230] text-left p-4 pb-0">
        Prices
      </h2>
      <div className="grid grid-cols-3 gap-2">
        {prices.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center ${
              index !== prices.length - 1 ? "border-r" : ""
            } border-gray-200 pr-2`}
          >
            <PriceRow
              icon={item.icon}
              label={item.label}
              price={item.price}
              variant={item.variant}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricesCard;

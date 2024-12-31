import React from "react";

// Single Price Row Component
const PriceRow = ({ icon: Icon, label, price, variant }) => {
  return (
    <div className="flex flex-col items-center space-y-1">
      <div className="flex items-center space-x-1">
        <Icon className="w-6 h-6 text-yellow-500" variant={variant} />
        <span className="text-gray-600 font-medium text-xs">{label}</span>
      </div>
      <div className="text-base font-bold text-gray-800">{price}</div>
    </div>
  );
};

// Prices Card Component
const PricesCard = ({ prices }) => {
  return (
    <div className="bg-white rounded-lg shadow p-2 w-full max-h-[138px]">
      <h2 className="text-md font-bold mb-2 text-gray-800 text-left">
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

import React from "react";

// Single Price Row Component
const PriceRow = ({ icon: Icon, label, price, variant }) => {
  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="flex items-center space-x-2">
        <Icon className="w-8 h-8 text-yellow-500" variant={variant} />
        <span className="text-gray-600 font-medium text-sm sm:text-base">
          {label}
        </span>
      </div>
      <div className="text-2xl sm:text-3xl font-bold text-gray-800">
        {price}
      </div>
    </div>
  );
};

// Prices Card Component
const PricesCard = ({ prices }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 sm:p-6">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6 text-gray-800 text-center sm:text-left">
        Prices
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
        {prices.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center ${
              index !== prices.length - 1 ? "sm:border-r-0 md:border-r" : ""
            } border-gray-200 pr-0 sm:pr-4`}
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

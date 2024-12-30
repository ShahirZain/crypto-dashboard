import React from "react";


// Single Price Row Component
const PriceRow = ({ icon: Icon, label, price }) => {
  return (
    <div className="flex flex-col items-center space-y-2 ">
      <div className="flex items-center space-x-2">
        <Icon className="w-8 h-8 text-yellow-500" />
        <span className="text-gray-600 font-medium">{label}</span>
      </div>
      <div className="text-3xl font-bold text-gray-500">{price}</div>
    </div>
  );
};

// Prices Card Component
const PricesCard = ({ prices }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-6 text-gray-500">Prices</h2>
      <div className="flex justify-around">
        {prices.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center ${
              index !== prices.length - 1 ? "border-r" : ""
            } border-gray-200 pr-6`}
          >
            <PriceRow icon={item.icon} label={item.label} price={item.price} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricesCard
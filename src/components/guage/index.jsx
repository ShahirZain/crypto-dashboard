// import Highcharts from "highcharts";
// import HighchartsReact from "highcharts-react-official";
// // import SolidGaugeModule from "highcharts/modules/solid-gauge";
// // import HighchartsSolidGauge from "highcharts/modules/solid-gauge";
//   // SolidGaugeModule(Highcharts);
// const FearGreedCard = ({ value, max }) => {
//   const options = {
//     chart: {
//       type: "gauge",
//       height: 200,
//       backgroundColor: "transparent",
//     },
//     title: {
//       text: null,
//     },
//     pane: {
//       startAngle: -120,
//       endAngle: 120,
//       background: [
//         {
//           outerRadius: "100%",
//           innerRadius: "85%",
//           shape: "arc",
//           backgroundColor: "#ef4444",
//         },
//         {
//           outerRadius: "85%",
//           innerRadius: "70%",
//           shape: "arc",
//           backgroundColor: "#f59e0b",
//         },
//         {
//           outerRadius: "70%",
//           innerRadius: "55%",
//           shape: "arc",
//           backgroundColor: "#e5e7eb",
//         },
//       ],
//     },
//     yAxis: {
//       min: 0,
//       max,
//       stops: [
//         [0.3, "#ef4444"],
//         [0.6, "#f59e0b"],
//         [1, "#10b981"], // Tailwind green-500
//       ],
//       lineWidth: 0,
//       tickWidth: 0,
//       minorTickInterval: null,
//     },
//     series: [
//       {
//         name: "Greed",
//         data: [value],
//         tooltip: {
//           valueSuffix: " index",
//         },
//       },
//     ],
//     tooltip: {
//       enabled: false,
//     },
//     credits: {
//       enabled: false,
//     },
//   };

//   return (
//     <div className="bg-white rounded-lg shadow p-4">
//       <div className="flex justify-between">
//         <h3 className="text-gray-700 font-semibold">Fear and greed index</h3>
//         <div className="text-green-500 font-medium text-sm">▲ 7.5%</div>
//       </div>
//       <div className="text-center mt-4">
//         <div className="text-4xl font-bold">{value}</div>
//         <div className="text-gray-500 text-lg">Greed</div>
//       </div>
//       <HighchartsReact highcharts={Highcharts} options={options} />
//     </div>
//   );
// };

// export default FearGreedCard;


import React, { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const FearAndGreedIndex = () => {
  const [indexValue, setIndexValue] = useState(70); // Initial value from the image

  useEffect(() => {
    // Simulate fetching data from an API (replace with actual API call)
    const fetchData = async () => {
      const response = await fetch("/api/fear-and-greed-index"); // Replace with your API endpoint
      const data = await response.json();
      setIndexValue(data.index);
    };

    fetchData();
  }, []);

  const options = {
    chart: {
      type: "gauge",
      plotBackgroundColor: null,
      plotBorderWidth: 0,
      plotShadow: false,
    },
    title: {
      text: "Fear and Greed Index",
    },
    pane: {
      startAngle: -90,
      endAngle: 90,
      background: [
        {
          backgroundColor: {
            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
            stops: [
              [0, "#DF5353"], // Red for Fear
              [0.3, "#DF5353"],
              [0.3, "#FFC107"], // Yellow for Caution
              [0.7, "#FFC107"],
              [0.7, "#50B432"], // Green for Greed
              [1, "#50B432"],
            ],
          },
          borderWidth: 0,
          outerRadius: "100%",
        },
      ],
    },
    yAxis: {
      min: 0,
      max: 100,
      title: {
        text: null,
      },
      labels: {
        enabled: false,
      },
    },
    plotOptions: {
      gauge: {
        dataLabels: {
          enabled: true,
          format: '<span style="font-size: 2em">{y}</span>',
        },
        dial: {
          radius: "80%",
        },
      },
    },
    series: [
      {
        name: "Fear and Greed",
        data: [indexValue],
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default FearAndGreedIndex;
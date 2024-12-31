/* eslint-disable react/prop-types */
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const MarketPerformanceChart = ({ data }) => {
  const options = {
    chart: {
      type: "line",
      backgroundColor: "#f9fafb",
    },
    title: {
      text: data.title,
      align: "left",
      margin: 30,
      style: {
        fontSize: "16px",
        color: "#6b7280",
      },
    },
    subtitle: {
      text: `${data.subtitle} <span style="color: #16a34a; font-size:14px;"> ▲ ${data.percentageChange}%</span>`,
      align: "left",
      useHTML: true,
      style: {
        fontSize: "28px",
        color: "#111827",
      },
    },
    xAxis: {
      categories: data.categories,
    },
    yAxis: {
      title: {
        text: null,
      },
    },
    series: data.series,
    legend: {
      enabled: false,
    },
    credits: {
      enabled: false,
    },
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default MarketPerformanceChart;
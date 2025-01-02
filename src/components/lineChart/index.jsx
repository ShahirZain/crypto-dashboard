/* eslint-disable react/prop-types */
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const MarketPerformanceChart = ({ data }) => {
  const options = {
    chart: {
      type: "line",
      backgroundColor: "#fff",
      height: "205px",
    },
    title: null,
    // title: {
    //   text: data.title,
    //   align: "left",
    //   margin: 30,
    //   style: {
    //     fontSize: "16px",
    //     color: "#6b7280",
    //   },
    // },
    // subtitle: {
    //   text: `${data.subtitle} <span style="color: #17B26A; font-family: Poppins; font-size:12px; line-height:18px; font-weight:600;"> ▲ ${data.percentageChange}%</span>`,
    //   align: "left",
    //   useHTML: true,
    //   style: {
    //     fontSize: "28px",
    //     color: "#111827",
    //   },
    // },
    xAxis: {
      categories: data.categories,
      labels: {
        style: {
          color: "#98A2B3",
          fontSize: "10px",
          fontFamily: "Poppins",
          fontWeight: 400,
        },
      },
    },
    yAxis: {
      title: {
        text: null,
      },
      labels: {
        style: {
          color: "#98A2B3",
          fontSize: "10px",
          fontFamily: "Poppins",
          fontWeight: 400,
        },
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
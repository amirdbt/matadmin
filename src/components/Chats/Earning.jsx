import React from "react"
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Earnings",
    numbersuffix: "M",
    theme: "fusion"
  },
  data: [
    {
      label: "Jan",
      value: "100"
    },
    {
      label: "Feb",
      value: "30"
    },
    {
      label: "Mar",
      value: "40"
    },
    {
      label: "Apr",
      value: "87"
    },
    {
      label: "May",
      value: "90"
    },
    {
      label: "Jun",
      value: "43"
    },
    {
      label: "Jul",
      value: "65"
    },
    {
      label: "Aug",
      value: "81"
    },
    {
      label: "Sep",
      value: "54"
    },
    {
      label: "Oct",
      value: "43"
    },
    {
      label: "Nov",
      value: "66"
    },
    {
      label: "Dec",
      value: "11"
    }
  ]
};

class Earning extends React.Component {
  render() {
    return (
      <ReactFusioncharts
        type="column2d"
        width="700"
        height="400"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    );
  }
}

export default Earning
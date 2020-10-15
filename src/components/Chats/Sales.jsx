import React from "react"
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Sales Statistics",
    yaxisname: "Amount",
   
    numbersuffix: "M",
    rotatelabels: "1",
    setadaptiveymin: "1",
    theme: "fusion"
  },
  data: [
    {
      label: "Jan",
      value: "89.45"
    },
    {
      label: "Feb",
      value: "89.87"
    },
    {
      label: "Mar",
      value: "89.64"
    },
    {
      label: "Apr",
      value: "90.13"
    },
    {
      label: "May",
      value: "90.67"
    },
    {
      label: "Jun",
      value: "90.54"
    },
    {
      label: "Jul",
      value: "90.75"
    },
    {
      label: "Aug",
      value: "90.8"
    },
    {
      label: "Sep",
      value: "91.16"
    },
    {
      label: "Oct",
      value: "91.37"
    },
    {
      label: "Nov",
      value: "91.66"
    },
    {
      label: "Dec",
      value: "91.8"
    }
  ]
};

class Sales extends React.Component {
  render() {
    return (
      <ReactFusioncharts
        type="line"
        width="700"
        height="400"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    );
  }
}

export default Sales
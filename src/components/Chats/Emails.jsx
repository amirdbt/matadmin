import React from 'react'


// Step 2 - Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Step 3 - Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Step 4 - Include the chart type
import Column2D from "fusioncharts/fusioncharts.charts";

// Step 5 - Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Step 6 - Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

// Preparing the chart data
const chartData = [
    {
        label: "Read",
        value: "180"
      },
   
    {
      label: "Sent",
      value: "260"
    },
    {
        label: "Unread",
        value: "290"
      },
   
   
  ];
  // Create a JSON object to store the chart configurations
const chartConfigs = {
    type: "doughnut2d", // The chart type
    width: "700", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: "Emails sent",    //Set the chart caption
                //Set the chart subcaption
        xAxisName: "Emails",           //Set the x-axis name
        yAxisName: "Reserves (MMbbl)",  //Set the y-axis name
        numberSuffix: "%",
        theme: "fusion"                 //Set the theme for your chart
      },
      // Chart Data - from step 2
      data: chartData
    }
  };
  class Emails extends React.Component {
    render() {
      return (<ReactFC {...chartConfigs} />);
    }
  }
export default Emails
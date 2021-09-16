import React from "react";
import Chart from "react-apexcharts";
import { useState, useEffect } from "react";
import dataObj from "./data-obj";

const ApexChart = () => {
  const [data, setData] = useState(dataObj);
  useEffect(() => {
    setData(dataObj);
  }, [data]);

  return (
    <div id="chart">
      <Chart
        options={dataObj.options}
        series={dataObj.series}
        type="heatmap"
        height={350}
      />
    </div>
  );
};

export default ApexChart;

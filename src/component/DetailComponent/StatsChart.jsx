import React from "react";
import CanvasJSReact from "@canvasjs/react-charts";
import Loading from "../Loading";

function StatsChart({ stats }) {
  let CanvasJS = CanvasJSReact.CanvasJS;
  let CanvasJSChart = CanvasJSReact.CanvasJSChart;

  if (!stats) {
    return <Loading />;
  }

  const stat = stats.map((v) => {
    return v.stat.name;
  });

  const value = stats.map((v) => {
    return v.base_stat;
  });

  const options = {
    title: {
      text: "Stats",
    },
    data: [
      {
        type: "column",
        dataPoints: [
          { label: stat[0], y: value[0] || 0 },
          { label: stat[1], y: value[1] || 0 },
          { label: stat[2], y: value[2] || 0 },
          { label: stat[3], y: value[3] || 0 },
          { label: stat[4], y: value[4] || 0 },
          { label: stat[5], y: value[5] || 0 },
        ],
      },
    ],
  };
  return (
    <div
      style={{
        width: "500px",
        borderRadius: "24px",
      }}
    >
      <CanvasJSChart
        options={options}
      
      />
    </div>
  );
}

export default StatsChart;

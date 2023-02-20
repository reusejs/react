import React, { useEffect, useState, useRef } from "react";
import resolvedStyleProps from "../../utils/resolvedStyleProps";
import LabelBase from "../../atoms/labels/base";
import { useThemeContext } from "../../theme/ThemeProvider";
import "../../../tailwind.css";
import { LabelBaseProps } from "../../atoms/labels/base";
import type { ChartData, ChartArea } from "chart.js";
import {
  Chart as ChartJS,
  registerables
  // CategoryScale,
  // LinearScale,
  // PointElement,
  // LineElement,
  // Tooltip,
  // Legend,
  // LineController,
} from "chart.js";
// import Chart from 'chart.js/auto';

import { Chart } from "react-chartjs-2";
// import faker from 'faker';
const faker = require("faker");

ChartJS.register(
  ...registerables
  // CategoryScale,
  // LinearScale,
  // PointElement,
  // LineElement,
  // LineController,
  // Tooltip,
  // Legend
);

const labels = ["January", "February", "March", "April", "May", "June", "July"];

// console.log(">>>>", labels.map(() => faker.datatype.number({ min: 0, max: 1000 })));

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
    },
    {
      label: "Dataset 2",
      data: [107, 200, 300, 400, 500, 600, 728],
    },
  ],
};

function createGradient(ctx: CanvasRenderingContext2D, area: ChartArea) {
  // const colorStart = faker.random.arrayElement(colors);
  // console.log("ColorStart>>>>", colorStart);
  // const colorMid = faker.random.arrayElement(
  //   colors.filter(color => color !== colorStart)
  // );
  // const colorEnd = faker.random.arrayElement(
  //   colors.filter(color => color !== colorStart && color !== colorMid)
  // );

  const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);
  // background: linear-gradient(180deg, #10C900 0%, #FFB500 47.92%, #E2183D 100%);
  // const colorStart = "#10C900";
  const colorStart = "rgba(16,200,00, 0.3)";

  const colorMid = "#FFB500";
  const colorEnd = "#E2183D";

  gradient.addColorStop(0, colorStart);
  gradient.addColorStop(0.5, colorMid);
  gradient.addColorStop(1, colorEnd);

  return gradient;
}

export interface GraphBaseProps {}

const GraphBase = (props: GraphBaseProps) => {
  const theme: any = useThemeContext();

  const titleClassNames = resolvedStyleProps(
    "accordionBaseClasses",
    ["width", "padding", "font", "textColor", "backgroundColor", "display"],
    props,
    theme
  );

  const chartRef = useRef<ChartJS>(null);
  const [chartData, setChartData] = useState<ChartData<"bar">>({
    datasets: [],
  });

  useEffect(() => {
    const chart = chartRef.current;

    if (!chart) {
      return;
    }

    const chartData = {
      ...data,
      datasets: data.datasets.map((dataset) => ({
        ...dataset,
        borderColor: createGradient(chart.ctx, chart.chartArea),
      })),
    };

    setChartData(chartData);
  }, []);

  return (
    <div>
      <Chart ref={chartRef} type="line" data={chartData} />
    </div>
  );
};

export default GraphBase;

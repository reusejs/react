import { LabelBase } from '@reusejs/react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { useRef, useEffect, useState } from 'react';

import type { ChartData, ChartArea } from 'chart.js';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(...registerables);

export default {
  title: 'Templates/Gradient Line Graph',
  argTypes: {},
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
  labels,
  datasets: [
    {
      label: 'Dataset',
      data: [30, 240, 300, 350, 520, 600, 728],
    },
  ],
};

function createGradient(ctx: CanvasRenderingContext2D, area: ChartArea) {
  const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);
  const colorStart = '#10C900';
  const colorMid = '#FFB500';
  const colorEnd = '#E2183D';

  gradient.addColorStop(0, colorStart);
  gradient.addColorStop(0.5, colorMid);
  gradient.addColorStop(1, colorEnd);

  return gradient;
}

export const GradientLineGraph = () => {
  const chartRef = useRef<ChartJS>(null);
  const [chartData, setChartData] = useState<ChartData<'bar'>>({
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
    <Chart
      className='rounded-lg border border-yellow-700 bg-yellow-200'
      ref={chartRef}
      type='line'
      data={chartData}
    />
  );
};

// export const GradientLineGraph = () => <GradientLineGraph />;

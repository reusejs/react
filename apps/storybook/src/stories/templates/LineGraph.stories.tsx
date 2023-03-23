import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import GraphDocs from '../docs/Graphs.docs';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default {
  title: 'Templates/Graphs',
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: GraphDocs,
      },
    },
  },
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Line Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 2',
      data: [30, 240, 300, 350, 520, 600, 728],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export const LineGraph = () => {
  //   import React from 'react';
  // import {
  //   Chart as ChartJS,
  //   CategoryScale,
  //   LinearScale,
  //   BarElement,
  //   Title,
  //   Tooltip,
  //   Legend,
  // } from 'chart.js';
  // import { Line } from 'react-chartjs-2';

  // ChartJS.register(
  //   CategoryScale,
  //   LinearScale,
  //   BarElement,
  //   Title,
  //   Tooltip,
  //   Legend
  // );

  // export default {
  //   title: 'Templates/Graphs',
  //   argTypes: {},
  //   parameters: {
  //     docs: {
  //       description: {
  //         // component: StoreButtonDocs,
  //       },
  //     },
  //   },
  // };

  // const options = {
  //   responsive: true,
  //   plugins: {
  //     legend: {
  //       position: 'top' as const,
  //     },
  //     title: {
  //       display: true,
  //       text: 'Line Chart',
  //     },
  //   },
  // };

  // const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  // const data = {
  //   labels,
  //   datasets: [
  //     {
  //       label: 'Dataset 2',
  //       data: [30, 240, 300, 350, 520, 600, 728],
  //       borderColor: 'rgb(53, 162, 235)',
  //       backgroundColor: 'rgba(53, 162, 235, 0.5)',
  //     },
  //   ],
  // };

  // export const LineGraph = () => <Line options={options} data={data} />;

  return <Line options={options} data={data} />;
};

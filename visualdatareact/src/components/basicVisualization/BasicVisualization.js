import { Chart } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  CategoryScale,
} from 'chart.js';

import { useState } from 'react';

export default function BasicVisualization() {
  ChartJS.register(LinearScale, PointElement, LineElement, CategoryScale, Tooltip, Legend);

  const [dataState, setDataState] = useState({
    datasets: [{
      label: '',
      data: null,
      type: "scatter",
      backgroundColor: null,
      borderColor: null,
      pointStyle: 'star',
    }]
  });
  const data = {
    datasets: [
      {
        label: 'A dataset',
        data: [{ x: 1, y: 1 }, { x: 2, y: 3 }],
        type: "scatter",
        backgroundColor: 'rgba(255, 99, 132, 1)',
        borderColor: 'rgba(255, 99, 132, 1)',
        pointStyle: 'star',
      },
      {
        label: 'A dataset',
        data: [{ x: 2, y: 2 }, { x: 10, y: 5 }],
        type: "line",
        backgroundColor: 'rgba(25, 99, 132, 1)',
        borderColor: 'rgba(25, 99, 132, 1)',
        pointStyle: 'circle',
        pointRadius: 0,
      },
    ],
  };

  const options = {
    scale: {
      x: {
        suggestedMax: 10,
        suggestedMin: -10,
      },
    },
    plugins: {
      legend: {
        display: false,
      }
    }
  }

  return (
    <Chart
      data={dataState}
      options={options}
    />
  );
}
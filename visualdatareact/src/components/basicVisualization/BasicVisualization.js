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

import { useState, } from 'react';

export default function BasicVisualization() {
  ChartJS.register(LinearScale, PointElement, LineElement, CategoryScale, Tooltip, Legend);
  const [xState, setxState] = useState('');
  const [yState, setyState] = useState('');

  const xData = xState.split(',');
  const yData = yState.split(',');
  const inputData = [];

  if (xData.length > yData.length) {
    for (const i in xData) {
      if (xData[i] !== "") {
        if (yData[i]) {
          inputData.push({ x: xData[i], y: yData[i] })
        }
        else {
          inputData.push({ x: xData[i], y: 0 })
        }
      }
    }
  }
  if (xData.length <= yData.length) {
    for (const i in yData) {
      if (yData[i] !== "") {
        if (xData[i]) {
          inputData.push({ x: xData[i], y: yData[i] })
        }
        else {
          inputData.push({ x: 0, y: yData[i] })
        }
      }
    }
  }



  const data = {
    datasets: [
      {
        label: 'A dataset',
        data: inputData,
        type: "scatter",
        backgroundColor: 'rgba(255, 99, 132, 1)',
        borderColor: 'rgba(255, 99, 132, 1)',
        pointStyle: 'star',
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
    <>
      <Chart
        data={data}
        options={options}
      />
      <label>x</label>
      <input value={xState} onChange={(e) => { setxState(e.target.value) }}>
      </input>
      <label>y</label>
      <input value={yState} onChange={(e) => { setyState(e.target.value) }}>
      </input>
    </>
  );
}
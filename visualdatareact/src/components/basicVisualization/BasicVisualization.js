import { useState, } from 'react';

//chart js
import { Chart } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  CategoryScale,
  ScatterController,
} from 'chart.js';

//helpers
import { calcLinearFit } from '../../helpers/apiHelpers';

import axios from 'axios';
import Cookies from 'js-cookie'


export default function BasicVisualization() {
  ChartJS.register(LinearScale, PointElement, LineElement, CategoryScale, Tooltip, Legend, ScatterController);
  const [xState, setxState] = useState('');
  const [yState, setyState] = useState('');

  const xData = (xState.split(',')[0] === '') ? [] : xState.split(',');
  const yData = (yState.split(',')[0] === '') ? [] : yState.split(',');
  const inputData = [];

  while (xData.length < yData.length) {
    xData.push(0)
  }

  while (xData.length > yData.length) {
    yData.push(0)
  }

  for (const i in yData) {
    inputData.push({ x: xData[i], y: yData[i] })
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
      <button onClick={() => {
        calcLinearFit(xData, yData).then(
          () => { console.log('asdf') }
        )
      }}>what</button>
    </>
  );
}
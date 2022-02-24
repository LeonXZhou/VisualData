import { useEffect, useState, } from 'react';

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


export default function BasicVisualization() {
  ChartJS.register(LinearScale, PointElement, LineElement, CategoryScale, Tooltip, Legend, ScatterController);
  const [xState, setxState] = useState('');
  const [yState, setyState] = useState('');
  const [lineData, setLineData] = useState([]);

  let xData = xState.split(',')
  let yData = yState.split(',')

  xData = xData.filter(x => x !== '');
  yData = yData.filter(y => y !== '');

  while (xData.length < yData.length) {
    xData.push(0)
  }
  while (xData.length > yData.length) {
    yData.push(0)
  }

  const inputData = [];
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
      }
    ],
  };

  useEffect(() => {
    calcLinearFit(xData, yData).then(
      (res) => {
        setLineData(res.data.data)
      }
    )
  }, [xState, yState])

  if (lineData.length > 0) {
    console.log(lineData)
    data.datasets[1] = {
      label: 'A dataset',
      data: lineData,
      type: "line",
      backgroundColor: 'rgba(255, 99, 132, 1)',
      borderColor: 'rgba(255, 99, 132, 1)',
      pointStyle: 'none',
      pointRadius: 0,
      borderWidth: 1
    }
  }

  const options = {
    // scale: {
    //   x: {
    //     suggestedMax: 10,
    //     suggestedMin: -10,
    //   },
    // },
    plugins: {
      legend: {
        display: false,
      }
    },
    // events: []
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
      }}>Fit</button>
    </>
  );
}
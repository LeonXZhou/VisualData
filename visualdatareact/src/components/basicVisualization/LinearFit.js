import { useEffect, useState, } from 'react'

//styles
import './LinearFit.scss'
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


export default function LinearFit() {
  ChartJS.register(LinearScale, PointElement, LineElement, CategoryScale, Tooltip, Legend, ScatterController);
  const [xState, setxState] = useState('1,2.5,3,4,5.6,6');
  const [yState, setyState] = useState('1,2,3,4.4,5,6');
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
        label: 'x value',
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
      label: 'yvalue dataset',
      data: lineData,
      type: "line",
      backgroundColor: 'rgba(255, 99, 132, 1)',
      borderColor: 'rgba(255, 99, 132, 1)',
      pointStyle: 'none',
      pointRadius: 0,
      borderWidth: 1,
    }
  }

  const options = {
    plugins: {
      legend: {
        display: false,
      }
    },
    events: []
  }

  return (
    <div className='linearFitContainer'>

      <div className='chartContainer'>
        <Chart
          data={data}
          options={options}
        />
      </div>
      <div className="dataAnalysisSectionContainer">

          <div className="userInput">
            <label>x</label>
            <textarea value={xState} onChange={(e) => { setxState(e.target.value) }}>
            </textarea>
          </div>
          <div className="userInput">
            <label>y</label>
            <textarea value={yState} onChange={(e) => { setyState(e.target.value) }}>
            </textarea>
          </div>

        <p>Slope:</p>
        <p>Intercept:</p>
      </div>

    </div>
  );
}
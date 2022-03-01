import { useEffect, useState, } from 'react'
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
import { calcLinearFit, calcQuadraticFit } from '../helpers/apiHelpers';


export default function useFit(initialX, initialY, fitType, fitDataSetter) {

  ChartJS.register(LinearScale, PointElement, LineElement, CategoryScale, Tooltip, Legend, ScatterController);
  const [xState, setxState] = useState(initialX);
  const [yState, setyState] = useState(initialY);
  const [lineDataState, setLineDataState] = useState([]);
  useEffect(() => {
    if (fitType === "linear")
    {
      calcLinearFit(xData, yData).then(
        (res) => {
          setLineDataState(res.data.data)
          fitDataSetter(res.data.slopeIntercept)
        }
      )
    }

    if (fitType === "quadratic")
    {
      calcQuadraticFit(xData, yData)
    }
  }, [xState, yState])

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


  if (lineDataState.length > 0) {
    console.log(lineDataState)
    data.datasets[1] = {
      label: 'yvalue dataset',
      data: lineDataState,
      type: "line",
      backgroundColor: '#1e5b94',
      borderColor: '#1e5b94',
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

  const Chartjsx = (<Chart
    data={data}
    options={options}
  />)

  return { Chartjsx, xState, setxState, yState, setyState }

}
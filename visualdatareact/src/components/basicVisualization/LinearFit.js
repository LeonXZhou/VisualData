
import { useState } from 'react';
//styles
import './fit.scss'
//custom hooks
import useFit from '../../hooks/useFit';
//components
import ValueTable from './ValueTable';


export default function LinearFit() {
  const [slopeInterceptState, setSlopeInterceptState] = useState({ slope: "", intercept: "", slopeErr: "", interceptErr: "" })
  const { Chartjsx,
    xState,
    setxState,
    yState,
    setyState,
    inputData } = useFit('1,2.5,3,4,5.6,6', '1,2,3,4.4,5,6', 'linear', setSlopeInterceptState);

  return (
    <div className='fitContainer'>
      <div className='chartTableFlex'>
        <div className='chartContainer'>
          {Chartjsx}
        </div>
        <ValueTable inputData={inputData}></ValueTable>
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
        {/* <div className="userInput">
          <label>y</label>
          <input type="color" onChange={(e)=>{console.log(e.target.value)}}>
          </input>
        </div>
       */}
        <p>Slope: {slopeInterceptState.slope} &#177; {slopeInterceptState.slopeErr} </p>
        <p>Intercept: {slopeInterceptState.intercept} &#177; {slopeInterceptState.interceptErr}</p>
      </div>

    </div>
  );
}
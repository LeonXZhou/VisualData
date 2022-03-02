import { useState } from 'react';
//styles
import './fit.scss'
//chart js
import useFit from '../../hooks/useFit';
// import { calcLinearFit } from '../helpers/apiHelpers';

export default function QuadraticFit() {
  const { Chartjsx,
    xState,
    setxState,
    yState,
    setyState } = useFit('-5.5,-4.2,-2.7,-2.8,-1.1,.5,1.3,1.9,3.1,4.1,6', '25,16,9,4,1,0,1,4,9,16,25', 'quadratic');


  return (
    <div className='fitContainer'>
      <div className='chartContainer'>
        {Chartjsx}
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
      </div>

    </div>
  );
}
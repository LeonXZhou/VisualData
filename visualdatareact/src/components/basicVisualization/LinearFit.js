//styles
import './LinearFit.scss'
//chart js
import useFit from '../../hooks/useFit';

export default function LinearFit() {

  const {Chartjsx, xState, setxState, yState, setyState, slopeInterceptState} = useFit();
  return (
    <div className='linearFitContainer'>

      <div className='chartContainer'>
        {Chartjsx}
        {/* <Chart
          data={data}
          options={options}
        /> */}
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
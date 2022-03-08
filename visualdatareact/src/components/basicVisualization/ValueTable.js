import { useEffect, useState } from "react"

export default function ValueTable(props) {
  const [tableHeightState, setTableHeightState] = useState('100px');

  useEffect(() => {
    setTableHeightState(document.querySelector('.chartContainer canvas').offsetHeight)

    function resize() {
      if (document.querySelector('.chartContainer canvas')) {
        setTimeout(() => { setTableHeightState(document.querySelector('.chartContainer canvas').offsetHeight) }, 200);
      }
    };
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    }
  }, []);
  console.log(props);

  const xyValues = props.inputData.map((iData) => {
    return (
      <tr>
        <td>{iData.x}</td>
        <td>{iData.y}</td>
      </tr>
    )
  })


  return (<table style={{ height: `${tableHeightState}px` }}>
    <thead>

      <tr>
        <th>x values</th>
        <th>y values</th>
      </tr>
    </thead>
    <tbody>
      {xyValues}
    </tbody>
  </table>)
}
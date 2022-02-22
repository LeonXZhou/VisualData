import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import './App.scss';
import NavBar from "./components/navigation/NavBarTop"
import Home from "./components/home/Home";
import axios from 'axios';
import BasicVisualization from "./components/basicVisualization/BasicVisualization";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <div className={'contentBody'}>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<BasicVisualization />} />
        </Routes>
        <button onClick={() => {
          axios.get('/api')
            .then((res) => { console.log(res) })
        }}>what</button>
      </div>
    </BrowserRouter>

  );
}
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import './App.scss';
import NavBar from "./components/navigation/NavBarTop"
import Home from "./components/home/Home";
import BasicVisualization from "./components/basicVisualization/BasicVisualization";


import axios from 'axios';
import Cookies from 'js-cookie'

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
          axios.get('/api/')
            .then((res) => {
              console.log(res)
              console.log('cookie', Cookies.get('csrftoken'))
              axios.post('/api/', { asdf: 'oops' },
                { headers: { 'X-CSRFToken': Cookies.get('csrftoken') } })
                .then((res) => { console.log(res) })
            })
        }}>what</button>
      </div>
    </BrowserRouter>

  );
}
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useEffect } from "react";

//styles
import './App.scss';

//components
import NavBar from "./components/navigation/NavBarTop"
import Home from "./components/home/Home";
import BasicVisualization from "./components/basicVisualization/BasicVisualization";

//helpers
import { getCsrfCookie, calcLinearFit } from "./helpers/apiHelpers";

export default function App() {

  useEffect(() => { getCsrfCookie() }, [])

  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <div className={'contentBody'}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/data" element={<BasicVisualization />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}
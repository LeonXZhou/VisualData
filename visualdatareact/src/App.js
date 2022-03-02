import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

//styles
import './App.scss';

//components
import NavBar from "./components/navigation/NavBarTop"
import Home from "./components/home/Home";
import LinearFit from "./components/basicVisualization/LinearFit";
import QuadraticFit from "./components/basicVisualization/QuadraticFit";

//helpers
import { getCsrfCookie } from "./helpers/apiHelpers";
import ParticleBackground from "./components/ParticleBackground";

export default function App() {

  useEffect(() => { getCsrfCookie() }, [])

  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <div className='contentBody'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/linear" element={<LinearFit />} />
          <Route path="/quadratic" element={<QuadraticFit />} />
        </Routes>
      </div>
      <ParticleBackground></ParticleBackground>
    </BrowserRouter>

  );
}
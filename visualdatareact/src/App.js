import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

//styles
import './App.scss';

//components
import NavBar from "./components/navigation/NavBarTop"
import Home from "./components/home/Home";
import LinearFit from "./components/basicVisualization/LinearFit";

//helpers
import { getCsrfCookie} from "./helpers/apiHelpers";

export default function App() {

  useEffect(() => { getCsrfCookie() }, [])

  return (
    <BrowserRouter>
      <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/data" element={<LinearFit />} />
        </Routes>
    </BrowserRouter>

  );
}
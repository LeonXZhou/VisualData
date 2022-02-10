import NavBar from "./components/navigation/NavBarTop"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
      </Routes>
    </BrowserRouter>

  )
}
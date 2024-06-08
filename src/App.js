import "./App.css";
import { Analysis } from "./components/Analysis/Analysis";
import Landing from "./components/mainlanding/Landing";
import { History } from "./components/history/History";
import { About } from "./components/About/About";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/mainlanding/Header";

function App() {
  const location = useLocation()
  // console.log(location)
  return (
    <>
      {location.pathname === "/" ? "" : <Header location = {location}/>}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/history" element={<History />} />
        <Route path="/analysis" element={<Analysis />} />
      </Routes>
    </>
  );
}

export default App;

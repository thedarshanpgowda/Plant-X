import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { Suspense, lazy } from "react";

import Landing from "./components/mainlanding/Landing";
import Header from "./components/mainlanding/Header";
import Upload from "./components/Upload/Upload";
import Authenticate from "./components/authenticate/Authenticate";

const HistoryPage = lazy(() => import('./components/history/History'));
const AboutPage = lazy(() => import('./components/About/About'));
const AnalysisPage = lazy(() => import('./components/Analysis/Analysis'));

function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/" ? null : <Header location={location} />}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/upload" element={<Upload />} />
          {/* <Route element={<Authenticate />}> */}
            <Route path="/analysis" element={<AnalysisPage />} />
          {/* </Route> */}
        </Routes>
      </Suspense>
    </>
  );
}

export default App;

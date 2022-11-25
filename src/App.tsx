import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import PhotographyGallery from "./Pages/PhotgraphyGallery";
import GraphicGallery from "./Pages/GraphicGallery";
import NotFoundPage from "./Pages/NotFoundPage";
import About from "./Pages/About";
import ReactGA from "react-ga";
const TRACKING_ID = "G-8DH5546CJL"; // OUR_TRACKING_ID

ReactGA.initialize(TRACKING_ID);

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/photo-gallery" element={<PhotographyGallery />} />
          <Route path="/photography" element={<PhotographyGallery />} />
          <Route path="/graphicdesign" element={<GraphicGallery />} />
          <Route path="/graphics-gallery" element={<GraphicGallery />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="/aboutme" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

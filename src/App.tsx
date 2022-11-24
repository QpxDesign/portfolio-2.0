import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import PhotoGallery from "./Pages/PhotoGallery";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/photo-gallery" element={<PhotoGallery />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

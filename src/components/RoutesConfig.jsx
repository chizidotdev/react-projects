import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import ResultsContainer from "./ResultsContainer";

const RoutesConfig = () => {
  return (
    <div className="p-4">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/search" element={<ResultsContainer />} />
        <Route path="/image" element={<ResultsContainer />} />
        <Route path="/news" element={<ResultsContainer />} />
        <Route path="/videos" element={<ResultsContainer />} />
      </Routes>
    </div>
  );
};

export default RoutesConfig;
// ("/search", "/images", "/news", "/videos")

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useResultContext } from "./context/ResultContext";
import Detail from "./pages/Detail";
import Home from "./pages/Home";

const App = () => {
  const { detail } = useResultContext();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={`/details/`} element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

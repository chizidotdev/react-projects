import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./pages/Detail";
import Home from "./pages/Home";

import { ThemeProvider } from "styled-components";
import { useState } from "react";
import Header from "./components/Header";

const lightTheme = {
  id: 0,
  textColor: "hsl(200, 15%, 8%)",
  bgColor: "hsl(0, 0%, 98%)",
  elColor: "hsl(0, 0%, 100%)",
  shadow: "0 1px 8px -3px hsl(0, 0%, 52%)",
  btnShadow: "0 1px 2px 0px hsl(0, 0%, 52%)",
};
const darkTheme = {
  id: 1,
  bgColor: "hsl(207, 26%, 17%)",
  textColor: "hsl(0, 0%, 100%)",
  elColor: "hsl(209, 23%, 22%)",
  shadow: "0 1px 8px -2px hsl(0, 0%, 10%)",
  btnShadow: "0 1px 2px 0px hsl(0, 0%, 10%)",
};

const App = () => {
  const [theme, setTheme] = useState(false);

  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <Header setTheme={setTheme} theme={theme} />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home setTheme={setTheme} theme={theme} />}
          />
          <Route
            path={`/details/`}
            element={<Detail setTheme={setTheme} theme={theme} />}
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;

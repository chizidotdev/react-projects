import React from "react";
import { ResultContextProvider } from "./context/ResultContext";
import { ThemeContextProvider } from "./context/ThemeContext";
import Home from "./pages/Home";

const App = () => {
  return (
    <ResultContextProvider>
      <ThemeContextProvider>
        <Home />
      </ThemeContextProvider>
    </ResultContextProvider>
  );
};

export default App;

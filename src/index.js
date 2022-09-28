import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ResultContextProvider } from "./context/ResultContext";
import { ThemeContextProvider } from "./context/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ResultContextProvider>
      <ThemeContextProvider>
        <Router>
          <App />
        </Router>
      </ThemeContextProvider>
    </ResultContextProvider>
  </React.StrictMode>
);

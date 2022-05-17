import { useState } from "react";
import Footer from "./components/Footer";
import RoutesConfig from "./components/RoutesConfig";
import { useThemeContext } from "./context/ThemeContext";

function App() {
  const { darkTheme, setDarkTheme } = useThemeContext();

  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
        <RoutesConfig />
      </div>
    </div>
  );
}

export default App;

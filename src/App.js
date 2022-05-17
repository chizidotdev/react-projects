import { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import RoutesConfig from "./components/RoutesConfig";

function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <RoutesConfig />
        <Footer />
      </div>
    </div>
  );
}

export default App;

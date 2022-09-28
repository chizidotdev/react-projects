import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import { FaRegLightbulb, FaMoon } from "react-icons/fa";
import { useThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { darkTheme, setDarkTheme } = useThemeContext();

  return (
    <div className="sticky top-0 bg-gray-100 dark:bg-gray-900 p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200">
      <div className="flex justify-between items-center space-x-5 w-screen">
        <Link to="/">
          <p className="text-2xl  font-bold py-1 px-2 dark:text-gray">Google</p>
        </Link>
        <button
          type="button"
          onClick={() => {
            setDarkTheme(!darkTheme);
          }}
          className="text-xl dark:text-white-900 px-2 py-1"
        >
          {darkTheme ? <FaRegLightbulb /> : <FaMoon />}
        </button>
      </div>
      <Search />
    </div>
  );
};

export default Navbar;

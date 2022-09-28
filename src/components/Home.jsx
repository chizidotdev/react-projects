import "../App.css";
import React, { useState } from "react";

import { MdOutlineCancel } from "react-icons/md";
import { useResultContext } from "../context/ResultContext";
import { FaRegLightbulb, FaMoon } from "react-icons/fa";
import { useThemeContext } from "../context/ThemeContext";
import { useNavigate } from "react-router-dom";

import Footer from "./Footer";

const Home = () => {
  const [text, setText] = useState("");
  const { setSearchTerm } = useResultContext();
  const { darkTheme, setDarkTheme } = useThemeContext();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.length === 0) {
      alert("Please enter search term");
      return;
    }
    setSearchTerm(text);

    navigate("../search", { replace: true });
  };

  return (
    <div className="home">
      <button
        type="button"
        onClick={() => {
          setDarkTheme(!darkTheme);
        }}
        className="theme text-xl dark:text-white-900 px-2 py-1"
      >
        {darkTheme ? <FaRegLightbulb /> : <FaMoon />}
      </button>
      <p className="logo">Choogle Search</p>
      <form action="" onSubmit={handleSubmit} className="form">
        <div className="input">
          <input
            type="text"
            value={text}
            className="input__text w-full sm:w-4/6 md:w-3/6 max-w-2xl h-10 dark:bg-gray-200 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg"
            placeholder="Search"
            autoComplete="false"
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <button
            type="button"
            className="clear btn text-gray-700"
            onClick={() => {
              setText("");
            }}
          >
            <MdOutlineCancel />
          </button>
        </div>
        <button type="submit" className="search btn">
          Search
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default Home;

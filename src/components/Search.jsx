import React, { useEffect, useState } from "react";

import { MdOutlineCancel } from "react-icons/md";

import { useDebounce } from "use-debounce";
import { useResultContext } from "../context/ResultContext";
import Links from "./Links";

import "../App.css";

const Search = () => {
  const { searchTerm, setSearchTerm } = useResultContext();
  const [text, setText] = useState(searchTerm);
  const [debounceValue] = useDebounce(text, 300);

  useEffect(() => {
    debounceValue && setSearchTerm(debounceValue);
  }, [debounceValue]);

  return (
    <div className="relative flex flex-col items-center sm:ml-48 sm:-mt-10 mt-3">
      <form className="lg:w-[500px] bg-white dark:bg-gray-100 flex flex-grow px-6 py-3 border border-gray-200 rounded-full shadow-md max-w-5xl items-center">
        <input
          type="text"
          value={text}
          className="flex flex-grow w-full dark:text-slate-500 focus:outline-none dark:bg-gray-100"
          placeholder="Search"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button
          type="button"
          className="text-xl text-gray-500"
          onClick={() => {
            setText("");
          }}
        >
          <MdOutlineCancel className="text-md lg:hidden" />
        </button>
      </form>
      <Links />
    </div>
  );
};

export default Search;

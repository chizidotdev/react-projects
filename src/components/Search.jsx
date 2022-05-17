import React, { useEffect, useState } from "react";

import { MdOutlineCancel } from "react-icons/md";

import { useDebounce } from "use-debounce";
import { useResultContext } from "../context/ResultContext";
import Links from "./Links";

import "../App.css";

const Search = () => {
  const [text, setText] = useState("");
  const { setSearchTerm } = useResultContext();
  const [debounceValue] = useDebounce(text, 300);

  useEffect(() => {
    debounceValue && setSearchTerm(debounceValue);
  }, [debounceValue]);

  return (
    <div className="relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3">
      <input
        type="text"
        value={text}
        className="sm:w-96 h-10 dark:bg-gray-200 border rounded-full shadow-sm outline-none p-5 sm:p-6 text-black hover:shadow-lg"
        placeholder="Search"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      {text && (
        <button
          type="button"
          className="clearbtn top-3 text-2xl text-gray-500"
          onClick={() => {
            setText("");
          }}
        >
          <MdOutlineCancel className="text-lg md:text-2xl" />
        </button>
      )}
      <Links />
    </div>
  );
};

export default Search;

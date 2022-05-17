import React, { useEffect, useState } from "react";

import { MdOutlineBackspace } from "react-icons/md";

import { useDebounce } from "use-debounce";
import { useResultContext } from "../context/ResultContext";
import Links from "./Links";

const Search = () => {
  const [text, setText] = useState("React");
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
        className="sm:w-96 h-10 dark:bg-gray-200 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg"
        placeholder="Search"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      {text && (
        <button
          type="button"
          className="absolute top-3 right-9 text-2xl text-gray-500"
          onClick={() => {
            setText("");
          }}
        >
          <MdOutlineBackspace />
        </button>
      )}
      <Links />
    </div>
  );
};

export default Search;

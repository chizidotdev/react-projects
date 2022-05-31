import { createContext, useContext, useState } from "react";

const ResultContext = createContext();
// const baseUrl = "https://restcountries.com/v3.1/all";
const baseUrl = "https://restcountries.com/v3.1/subregion/europe";

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState();

  const getResults = async () => {
    const response = await fetch(baseUrl);
    const data = await response.json();

    setResults(data);
    console.log(data);
  };

  return (
    <ResultContext.Provider value={{ results, getResults }}>
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);

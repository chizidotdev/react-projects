import { createContext, useContext, useEffect, useState } from "react";

const ResultContext = createContext();
const baseUrl = "https://restcountries.com/v3.1/";

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState();
  const [error, setError] = useState(false);
  const [details, setDetail] = useState(results);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllResults();
  }, []);

  const getAllResults = async () => {
    setError(false);
    setLoading(true);
    const response = await fetch(`${baseUrl}all/`);
    if (response.status === 200) {
      const data = await response.json();

      setDetail(data[0]);
      setResults(data);
      setLoading(false);
    } else {
      setError(true);
      return;
    }
  };

  const getSearchResults = async (name) => {
    setError(false);
    setLoading(true);
    const response = await fetch(`${baseUrl}name/${name}/`);
    if (response.status === 404) {
      setError(true);
      return;
    }
    const data = await response.json();
    setResults(data);
    setLoading(false);
  };

  const getFilteredResults = async (region) => {
    setError(false);
    setLoading(true);
    if (region === "Filter by Region") {
      getAllResults();
      return;
    }
    const response = await fetch(`${baseUrl}region/${region}/`);
    if (response.status === 404) {
      setError(true);
      return;
    }
    const data = await response.json();
    setResults(data);
    setLoading(false);
  };

  return (
    <ResultContext.Provider
      value={{
        results,
        error,
        details,
        loading,
        getAllResults,
        getSearchResults,
        getFilteredResults,
        setError,
        setResults,
        setDetail,
        setLoading,
      }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);

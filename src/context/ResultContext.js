import { createContext, useContext, useEffect, useState } from "react";

const ResultContext = createContext();
const baseUrl = "https://restcountries.com/v3.1/";

const dummyData = {
  name: {
    common: "Dominican Republic",
    official: "Dominican Republic",
    nativeName: {
      spa: {
        official: "República Dominicana",
        common: "República Dominicana",
      },
    },
  },
  tld: [".do"],
  cca2: "DO",
  ccn3: "214",
  cca3: "DOM",
  cioc: "DOM",
  independent: true,
  status: "officially-assigned",
  unMember: true,
  currencies: {
    DOP: {
      name: "Dominican peso",
      symbol: "$",
    },
  },
  idd: {
    root: "+1",
    suffixes: ["809", "829", "849"],
  },
  capital: ["Santo Domingo"],
  altSpellings: ["DO"],
  region: "Americas",
  subregion: "Caribbean",
  languages: {
    spa: "Spanish",
  },
  translations: {
    ara: {
      official: "جمهورية الدومينيكان",
      common: "جمهورية الدومينيكان",
    },
    ces: {
      official: "Dominikánská republika",
      common: "Dominikánská republika",
    },
    cym: {
      official: "Gweriniaeth Dominica",
      common: "Gweriniaeth Dominica",
    },
    deu: {
      official: "Dominikanische Republik",
      common: "Dominikanische Republik",
    },
    est: {
      official: "Dominikaani Vabariik",
      common: "Dominikaani Vabariik",
    },
    fin: {
      official: "Dominikaaninen tasavalta",
      common: "Dominikaaninen tasavalta",
    },
    fra: {
      official: "République Dominicaine",
      common: "République dominicaine",
    },
    hrv: {
      official: "Dominikanska Republika",
      common: "Dominikanska Republika",
    },
    hun: {
      official: "Dominikai Köztársaság",
      common: "Dominikai Köztársaság",
    },
    ita: {
      official: "Repubblica Dominicana",
      common: "Repubblica Dominicana",
    },
    jpn: {
      official: "ドミニカ共和国",
      common: "ドミニカ共和国",
    },
    kor: {
      official: "도미니카 공화국",
      common: "도미니카 공화국",
    },
    nld: {
      official: "Dominicaanse Republiek",
      common: "Dominicaanse Republiek",
    },
    per: {
      official: "جمهوری دومینیکن",
      common: "جمهوری دومینیکن",
    },
    pol: {
      official: "Republika Dominikańska",
      common: "Dominikana",
    },
    por: {
      official: "República Dominicana",
      common: "República Dominicana",
    },
    rus: {
      official: "Доминиканская Республика",
      common: "Доминиканская Республика",
    },
    slk: {
      official: "Dominikánska republika",
      common: "Dominikánska republika",
    },
    spa: {
      official: "República Dominicana",
      common: "República Dominicana",
    },
    swe: {
      official: "Dominikanska republiken",
      common: "Dominikanska republiken",
    },
    urd: {
      official: "جمہوریہ ڈومینیکن",
      common: "ڈومینیکن",
    },
    zho: {
      official: "多明尼加共和国",
      common: "多明尼加",
    },
  },
  latlng: [19, -70.66666666],
  landlocked: false,
  borders: ["HTI"],
  area: 48671,
  demonyms: {
    eng: {
      f: "Dominican",
      m: "Dominican",
    },
    fra: {
      f: "Dominicaine",
      m: "Dominicain",
    },
  },
  flag: "🇩🇴",
  maps: {
    googleMaps: "https://goo.gl/maps/soxooTHxEeiAbn3UA",
    openStreetMaps: "https://www.openstreetmap.org/relation/307828",
  },
  population: 10847904,
  gini: {
    2019: 41.9,
  },
  fifa: "DOM",
  car: {
    signs: ["DOM"],
    side: "right",
  },
  timezones: ["UTC-04:00"],
  continents: ["North America"],
  flags: {
    png: "https://flagcdn.com/w320/do.png",
    svg: "https://flagcdn.com/do.svg",
  },
  coatOfArms: {
    png: "https://mainfacts.com/media/images/coats_of_arms/do.png",
    svg: "https://mainfacts.com/media/images/coats_of_arms/do.svg",
  },
  startOfWeek: "monday",
  capitalInfo: {
    latlng: [18.47, -69.9],
  },
  postalCode: {
    format: "#####",
    regex: "^(\\d{5})$",
  },
};

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

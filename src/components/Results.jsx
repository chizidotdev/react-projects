import React, { useEffect } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import ReactPlayer from "react-player";
import { useLocation } from "react-router-dom";
import { useResultContext } from "../context/ResultContext";
import Loading from "./Loading";

const Results = () => {
  const { results, isLoading, getResults, searchTerm } = useResultContext();
  const location = useLocation();

  useEffect(() => {
    if (searchTerm) {
      if (location.pathname === "/videos") {
        getResults(`/search/q=${searchTerm} videos`);
      } else {
        getResults(`${location.pathname}/q=${searchTerm}&num=40`);
      }
    }
  }, [searchTerm, location.pathname]);

  if (isLoading) return <Loading />;

  switch (location.pathname) {
    case "/search":
      return (
        <div className="flex flex-wrap w-full sm:w-4/5 mt-5 justify-between px-4 sm:px-7 ">
          {results?.map(({ link, title }, index) => (
            <div key={index} className="md:w-2/5 w-full mb-6 ">
              <a href={link} target="_blank" rel="noreferrer">
                <p className="text-xs sm:text-sm">
                  {link.length > 30 ? link.substring(0, 30) : link}
                </p>
                <p className="text-sm sm:text-lg hover:underline dark:text-blue-300 text-blue-700">
                  {title}
                </p>
              </a>
            </div>
          ))}
        </div>
      );
    case "/image":
      return (
        <div className="flex flex-wrap justify-around items-center mt-5">
          {results?.map(({ image, link }, index) => (
            <a
              href={link.href}
              key={index}
              target="_blank"
              rel="noreferrer"
              className="sm:p-4 p-3 w-2/5 sm:w-2/6 md:w-1/5"
            >
              <img src={image?.src} alt={link.title} loading="lazy" />
              <p className="break-words mt-2 text-xs sm:text-sm">
                {link.title}
              </p>
            </a>
          ))}
        </div>
      );
    case "/news":
      return (
        <div className="flex flex-wrap justify-around items-center sm:px-10">
          {results?.map(({ links, id, source, title }) => (
            <div key={id} className="md:w-2/5 w-full mb-6">
              <a
                href={links?.[0].href}
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                <p className="text-sm sm:text-lg dark:text-blue-300 text-blue-700">
                  {title}
                </p>
              </a>
              <div className="flex gap-4 text-xs sm:text-sm">
                <a href={source?.href} target="_blank" rel="noreferrer">
                  {source?.href}
                </a>
              </div>
            </div>
          ))}
        </div>
      );
    case "/videos":
      return (
        <div className="flex flex-wrap justify-around mt-5">
          {results.map((video, index) => (
            <div key={index} className="p-1">
              <ReactPlayer
                url={video.additional_links?.[0].href}
                controls
                width="10em"
                height="10em"
              />
            </div>
          ))}
        </div>
      );

    default:
      return "ERROR";
  }
};

export default Results;

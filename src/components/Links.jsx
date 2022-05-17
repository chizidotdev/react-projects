import React from "react";
import { FaSearch, FaNewspaper, FaImage, FaVideo } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const links = [
  { url: "/search", text: " All", icon: <FaSearch /> },
  { url: "/image", text: " Images", icon: <FaImage /> },
  { url: "/videos", text: " Videos", icon: <FaVideo /> },
  { url: "/news", text: " News", icon: <FaNewspaper /> },
];

const Links = () => {
  return (
    <div className="flex sm:justify-around justify-between items-center mt-4">
      {links.map(({ url, text, icon }) => (
        <>
          <NavLink
            key={url}
            to={url}
            className={(navData) =>
              navData.isActive
                ? "text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2 flex gap-1 mr-3 items-center"
                : "flex gap-1 mx-3 mb-2 items-center"
            }
            // activeClassName="text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2"
          >
            <span>{icon}</span> {text}
          </NavLink>
        </>
      ))}
    </div>
  );
};

export default Links;

import React from "react";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <div className="text-center px-10 py-3 mt-10 border-t dark:border-gray-700 border-gray-200">
      <h1>&copy; {year} Chizi Victor.</h1>
    </div>
  );
};

export default Footer;

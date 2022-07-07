import React from "react";

const Header = () => {
  return (
    <header>
      <nav className="flex justify-between p-7">
        <div className="w-24">
          <a href="/">
            <img src="/logo.svg" alt="Fylo Logo" />
          </a>
        </div>
        <div className="flex gap-5 opacity-60">
          <a href="/">Features</a>
          <a href="/">Team</a>
          <a href="/">Sign In</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;

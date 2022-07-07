const Header = () => {
  return (
    <nav className="flex justify-between p-7 md:py-14 sm:px-12 lg:px-20 2xl:px-28">
      <div className="w-20 sm:w-28">
        <a href="/">
          <img src="/logo.svg" alt="Fylo Logo" />
        </a>
      </div>
      <div className="flex gap-3 sm:gap-7 lg:gap-10 opacity-60">
        <a href="/">Features</a>
        <a href="/">Team</a>
        <a href="/">Sign In</a>
      </div>
    </nav>
  );
};

export default Header;

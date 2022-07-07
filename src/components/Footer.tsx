import React from "react";

const Footer = () => {
  return (
    <section className="flex flex-col px-10 py-20 text-white bg-[#070439] lg:px-20">
      <img
        src="/logo-footer.svg"
        alt="fylo logo"
        className="sm:self-center lg:self-start w-44 mb-12"
      />
      <div className="flex flex-col sm:items-center sm:text-center lg:items-start lg:text-left lg:flex-row gap-10 text-white">
        <div className="flex sm:items-center lg:items-start flex-col gap-2 w-80">
          <div className="flex items-center gap-4">
            <img src="icon-phone.svg" alt="phone" />
            Phone: +1-543-123-4567
          </div>
          <div className="flex items-center gap-4">
            <img src="icon-email.svg" alt="email" />
            example@fylo.com
          </div>
        </div>
        <div className="flex flex-col gap-3 w-80 lg:pl-20">
          <a href="/">About Us</a>
          <a href="/">Jobs</a>
          <a href="/">Press</a>
          <a href="/">Blog</a>
        </div>
        <div className="flex flex-col gap-3 w-80 lg:pl-20">
          <a href="/">Contact Us</a>
          <a href="/">Terms</a>
          <a href="/">Privacy</a>
        </div>
        <div className="flex justify-center gap-3 w-full sm:w-80">
          <a href="/">Fa</a>
          <a href="/">So</a>
          <a href="/">Wa</a>
        </div>
      </div>
    </section>
  );
};

export default Footer;

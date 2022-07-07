import React from "react";

const Footer = () => {
  return (
    <section className="flex flex-col gap-10 px-10 py-20 text-white bg-[#070439]">
      <img src="/logo-footer.svg" alt="fylo logo" className="w-44" />
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-4">
          <img src="icon-phone.svg" alt="phone" />
          Phone: +1-543-123-4567
        </div>
        <div className="flex items-center gap-4">
          <img src="icon-email.svg" alt="email" />
          example@fylo.com
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <a>About Us</a>
        <a>Jobs</a>
        <a>Press</a>
        <a>Blog</a>
      </div>
      <div className="flex flex-col gap-3">
        <a>Contact Us</a>
        <a>Terms</a>
        <a>Privacy</a>
      </div>
    </section>
  );
};

export default Footer;

import React from "react";

const About = () => {
  return (
    <section className="about bg-slate-50 px-5 pb-20 flex flex-col md:flex-row-reverse md:gap-10 items-center mt-32 md:mt-44 md:px-10 lg:px-20">
      {/*<div className="about-bg" />*/}
      <div className="sm:flex-1">
        <img src="/illustration-2.svg" alt="about" />
      </div>
      <div className="mt-20 flex flex-col gap-6 sm:flex-1">
        <h1 className="text-lg md:text-xl text-center md:text-left font-bold lg:text-3xl">
          Stay productive, wherever you are
        </h1>
        <p className="text-slate-600 md:text-left sm:text-center sm:self-center md:self-start  xl:w-3/4">
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs. <br />
          <br />
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required!
        </p>
        <p className="works w-full flex justify-center md:justify-start text-sm items-center gap-1">
          <a className="text-teal-600" href="/">
            See how Fylo works
          </a>
          <img className="w-6" src="/icon-arrow.svg" alt="arrow" />
        </p>
        <div className="w-full flex items-center justify-center md:justify-start mt-5">
          <div className="flex flex-col gap-2 bg-white p-7 text-xs w-11/12 sm:w-80 shadow-lg rounded-lg">
            <img className="w-4" src="/icon-quotes.svg" alt="quote" />
            <p className="opacity-75">
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div className="flex items-center gap-2 mt-2">
              <img
                className="w-8 h-8 rounded-full"
                src="/avatar-testimonial.jpg"
                alt="kyle burton"
              />
              <div className="opacity-90">
                <h2 className="font-bold">Kyle Burton</h2>
                <p className="">Founder & CEO, Huddle</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

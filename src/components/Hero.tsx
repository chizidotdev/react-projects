import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col items-center my-16 md:mt-5 px-4 sm:px-10 lg:px-20 md:flex-row-reverse sm:gap-10">
      <div className="w-4/5 md:flex-1">
        <img src="/illustration-1.svg" alt="secure file location" />
      </div>
      <div className="flex flex-col items-center md:items-start gap-5 mt-16 md:mt-0 md:flex-1">
        <h1 className="text-2xl text-center md:text-left font-bold lg:text-3xl">
          All your files in one secure location, accessible anywhere.
        </h1>
        <p className="text-center md:text-left w-5/6 md:w-full lg:text-lg">
          Fylo stores your most important files in one secure location. Access
          them wherever you need, share and collaborate with friends, family,
          and co-workers.
        </p>
        <form className="flex flex-col items-center md:items-start lg:flex-row lg:w-full gap-3 w-4/5">
          <input
            className="w-full border border-slate-700 rounded-md text-xs px-8 py-4"
            type="text"
            placeholder="Enter your email..."
          />
          <button className="bg-sky-600 w-full lg:w-64 2xl:w-96 rounded-md py-3 text-white shadow-sm">
            Get Started
          </button>
        </form>
      </div>
    </section>
  );
};

export default Hero;

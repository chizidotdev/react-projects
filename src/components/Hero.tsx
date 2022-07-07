import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col items-center my-16 px-4">
      <div className="w-4/5">
        <img src="/illustration-1.svg" alt="secure file location" />
      </div>
      <div className="flex flex-col items-center gap-5 mt-16">
        <h1 className="text-2xl text-center font-bold">
          All your files in one secure location, accessible anywhere.
        </h1>
        <p className="text-center w-5/6">
          Fylo stores your most important files in one secure location. Access
          them wherever you need, share and collaborate with friends, family,
          and co-workers.
        </p>
        <form className="flex flex-col items-center gap-3 w-4/5">
          <input
            className="w-full border border-slate-700 rounded-md text-xs px-8 py-3"
            type="text"
            placeholder="Enter your email..."
          />
          <button className="bg-sky-600 w-full rounded-md py-2 text-white">
            Get Started
          </button>
        </form>
      </div>
    </section>
  );
};

export default Hero;

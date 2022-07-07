import React from "react";

const Newsletter = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-6 px-5 py-16 text-white bg-[#585989]">
      <div className="flex flex-col items-center gap-3 w-11/12">
        <h1 className="font-bold text-lg">Get early access today</h1>
        <p className="text-center">
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
      </div>
      <form className="flex flex-col items-center gap-3 w-4/5">
        <input
          className="w-full border border-slate-700 rounded-md text-xs px-2 py-3"
          type="text"
          placeholder="email@example.com"
        />
        <button className="bg-sky-600 w-full rounded-md py-2 text-white">
          Get Started
        </button>
      </form>
    </section>
  );
};

export default Newsletter;

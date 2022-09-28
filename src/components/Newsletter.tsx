const Newsletter = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center gap-6 px-5 lg:px-20 py-16 lg:py-24 text-white bg-[#585989]">
      <div className="flex flex-col items-center lg:items-start gap-3 w-11/12">
        <h1 className="font-bold text-lg md:text-2xl">
          Get early access today
        </h1>
        <p className="text-center lg:text-left md:text-lg md:w-3/4 lg:w-3/4">
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
      </div>
      <form className="flex flex-col items-center lg:items-start gap-3 w-4/5 md:w-1/2 lg:w-4/5 xl:w-2/3">
        <input
          className="w-full border border-slate-700 rounded-md text-xs py-4 px-5"
          type="text"
          placeholder="email@example.com"
        />
        <button className="bg-sky-600 w-full lg:w-2/5 rounded-md py-3 text-white shadow-md">
          Get Started For Free
        </button>
      </form>
    </section>
  );
};

export default Newsletter;

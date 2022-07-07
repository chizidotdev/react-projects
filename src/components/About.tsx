import React from "react";

const About = () => {
  return (
    <section className="about-bg bg-slate-50 px-5 pb-20 flex flex-col items-center my-20 mt-32">
      <div>
        <img src="/illustration-2.svg" alt="about image" />
      </div>
      <div className="mt-20 flex flex-col gap-8">
        <h1 className="text-xl text-center font-bold">
          Stay productive, wherever you are
        </h1>
        <p className="text-slate-600">
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs. <br />
          <br />
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required!
        </p>
        <p className="works w-full flex justify-center text-sm items-center gap-1">
          <a className="text-teal-600" href="/">
            See how Fylo works
          </a>
          <img className="w-6" src="/icon-arrow.svg" alt="arrow" />
        </p>
        <div className="w-full flex items-center justify-center mt-5">
          <div className="flex flex-col gap-2 bg-white p-7 text-xs w-10/12 shadow-lg rounded-lg">
            <img className="w-4" src="/icon-quotes.svg" alt="quote" />
            <p className="">
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div className="flex items-center gap-2 ">
              <img
                className="w-8 h-8 rounded-full"
                src="/avatar-testimonial.jpg"
                alt="kyle burton"
              />
              <div>
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

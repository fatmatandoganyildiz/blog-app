import React from "react";
import { careers } from "../../../../store/footerContents";

function Careers() {
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center">
        <div className="my-10 w-full max-w-screen-2xl">
          <h1 className="text-[54px] flex justify-center font-extralight tracking-widest ">
            Careers at Blog
          </h1>
          <h4 className="text-center tracking-wide my-6 mx-4">
            Welcome to the dynamic world of career opportunities at Blog. As a
            thriving and innovative player in the blog sector, we are
            continuously seeking talented individuals to become a part of our
            growing team. Uncover the possibilities and embark on a fulfilling
            career journey with us.
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
            {careers.map((career, index) => (
              <div
                key={index}
                className="relative flex w-full max-w-[46rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
              >
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                  <img
                    src={career.Image}
                    alt={career.MainHeader}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-[#BE3726] antialiased">
                    {career.MainHeader}
                  </h6>
                  <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {career.Header}
                  </h4>
                  <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                    {career.Content}
                  </p>
                  <a className="inline-block" href="#">
                    <button
                      className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-[#BE3726] transition-all hover:bg-pink-500/10 active:bg-[#aa2312] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      type="button"
                    >
                      Learn More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        ></path>
                      </svg>
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Careers;

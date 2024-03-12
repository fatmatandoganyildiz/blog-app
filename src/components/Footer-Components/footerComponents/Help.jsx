import React, { useState } from "react";
import { helpContent } from "../../../store/footerContents";
import SearchLogo from "../../../assets/images/Search_transparent.png";

function Help() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSearchTerm("");
  };

  return (
    <div className="container mx-auto mb-12">
      <div className="flex items-center justify-center">
        <img src={SearchLogo} alt="Search Logo" className="h-58 w-72" />
        <form
          onSubmit={handleFormSubmit}
          className="w-2/4 flex items-center justify-center"
        >
          <div className="w-full h-auto p-5 rounded-3xl bg-white border-b border-b-[#be3726] flex z-10">
            <section className="w-full h-10 flex items-center">
              <span className="w-7 h-full"></span>
              <input
                placeholder="Search something..."
                className="w-full h-full font-medium md:pl-2 focus:outline-none"
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />{" "}
            </section>
          </div>
        </form>
      </div>
      <div className="my-12 pb-3">
        {helpContent
          .filter((e) => {
            return searchTerm.toLowerCase() === ""
              ? e
              : e.Question.toLowerCase().includes(searchTerm) ||
                  e.Response.toLowerCase().includes(searchTerm);
          })
          .map((e, index) => (
            <div key={index} className="my-6 mx-2">
              <div className="font-bold">{e.Question}</div>
              <div>{e.Response}</div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Help;

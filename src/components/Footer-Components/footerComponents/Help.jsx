import React, { useState } from "react";
import { helpContent } from "../../../store/footerContents"; 
 
 function Help() {
  const [searchTerm, setSearchTerm] = useState("");
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSearchTerm("");
  };

  return (
    <div>
      <div className="w-full h-2/6 flex font-light tracking-widest items-center justify-center flex-col py-40 bg-gradient-to-r from-[#BE3726] to-fuchsia-500">
    
        <h1 className="text-[60px] text-white">How can we help?</h1>
        <form
          onSubmit={handleFormSubmit}
          className="w-2/4 flex items-center justify-center"
        >
          <div className="w-full h-auto p-5 rounded-3xl bg-white">
            <section className="w-full h-10 flex items-center">
              <span className="w-7 h-full"></span>
              <input
                placeholder="Search..."
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

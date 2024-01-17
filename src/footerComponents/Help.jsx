import React, { useEffect, useState } from "react";

function Help() {
  const[data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // useEffect(()=>{
  //   fetchImage()
  // },[]);

  // const fetchImage = async() => {
  //   const storagedData = localStorage.getItem("helpPage")
  //   if(storagedData){

  //   }
  // }
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="bg-blue-200 w-full h-2/6 flex items-center justify-center flex-col py-40">
        <h1 className="text-[60px]">How can we help?</h1>
        <form
          onSubmit={handleFormSubmit}
          className="w-2/4 flex items-center justify-center bg-purple-600"
        >
          <input
            placeholder="Search..."
            className="border py-2 w-1/2 mx-1 my-2 outline-none rounded-3xl"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="bg-blue-300 px-2 py-1 rounded-2xl hover:bg-blue-400 hover:font-semibold transition"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default Help;

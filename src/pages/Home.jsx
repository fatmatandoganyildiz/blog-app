import React, { useState, useEffect } from "react";
import Main from "./Main";
import requests from "../request";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";

function Home() {
  // const [data, setData] = useState([]);
  // const [id, setId] = useState([]);

  // useEffect(() => {
  //   fetchImages();
  // }, []);

  // const fetchImages = async () => {
  //   const storagedData = localStorage.getItem("dataHome");

  //   if (storagedData) {
  //     const datas = JSON.parse(storagedData);
  //     setData(datas);
  //   } else {
  //     const response = await fetch(requests.requestHome);
  //     const datas = await response.json();
  //     setData(
  //       localStorage.setItem("dataHome", JSON.stringify(datas?.map((e) => e)))
  //     );
  //     setId(datas?.map((e) => e.id));
  //   }
  // };

  return (
    <div>
      <SearchBar/>
      <Main />
      <div className="my-12">
        <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {data?.map((d) => {
            return (
              <div key={d.id}>
                <Link to={`/article/${d.id}`}>
                  <div className="border bg-stone-100">
                    <img
                      className="w-[560px] h-[200px] border object-cover"
                      src={d.urls.regular}
                      alt="alt"
                    />
                    <h4 className="text-xl my-2 font-light tracking-wider font-serif">{`${d.user?.username}`}</h4>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;

import React, { useEffect, useState } from "react";
import requests from "../request";
import { Link } from "react-router-dom";
import Article from "./Article";

function Travel() {
  const [data, setData] = useState([]);
  const [id, setId] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    const storagedData = localStorage.getItem("dataTravel");

    if (storagedData) {
      const datas = JSON.parse(storagedData);
      setData(datas);
    } else {
      const response = await fetch(requests.requestTravel);
      const datas = await response.json();
      setData(
        localStorage.setItem("dataTravel", JSON.stringify(datas?.map((e) => e)))
      );
      setId(datas?.map((e) => e.id));
    }
  };
  return (
    <>
      <h1 className="text-center my-16 mx-16 text-6xl font-extralight tracking-widest">
        TRAVEL{" "}
      </h1>
      <div className="mx-16 my-16">
        {/* <div>
          <img
            className="w-full h-[240px] object-cover"
            src={`${images[0]}`}
            alt="pic"
          />
        </div> */}
        <div className="my-12">
          <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {data?.map((d) => {
              console.log(d);
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
                  {/* <Article key={d.id} d={d} /> */}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Travel;

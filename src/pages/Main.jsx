import React, { useEffect, useState } from "react";
import requests from "../request";
import { Link } from "react-router-dom";

function Main() {
  const [data, setData] = useState([]);
  const [id, setId] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    const storagedData = localStorage.getItem("dataMain");

    if (storagedData) {
      const datas = JSON.parse(storagedData);
      setData(datas);
      // console.log(data[0].id);
    } else {
      const response = await fetch(requests.requestMain);
      const datas = await response.json();

      localStorage.setItem("dataMain", JSON.stringify(datas));
      setData(datas);

      setId(datas?.map((e) => e.id));
    }
  };

  return (
    <div className="flex flex-row mx-14 my-12 gap-4">
      <div className="border w-3/4">
        <Link to={data.length > 0 ? `/article/${data[0].id}` : "#"}>
          {/* {data.length > 0 && data[0] && ( */}
            <img
              className="w-full h-[450px] object-cover"
              src={`${data[0]?.urls.full}`}
              alt="main-pic"
            />
          {/* )} */}
        </Link>
      </div>
      <div className=" border w-1/4 gap-2">
        <Link to={data.length > 0 ? `/article/${data[1].id}` : "#"}>
          <div className="border">
            <img
              className="w-full h-[225px] object-cover"
              src={`${data[1]?.urls.full}`}
              alt="pic"
            />
          </div>
        </Link>
        <Link to={data.length > 0 ? `/article/${data[2].id}` : "#"}>
          <div className="border">
            <img
              className="w-full h-[225px] object-cover"
              src={`${data[2]?.urls.full}`}
              alt="pic2"
            />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Main;

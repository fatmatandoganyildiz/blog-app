import React, { useEffect, useState } from "react";
import requests from "../request";

function Main() {
  const [images, setImages] = useState([]);
  // const image = images[Math.floor(Math.random() * images.width)]

  const fetchImages = async () => {
    const response = await fetch(requests.requestMain);
    
    const data = await response.json();
    console.log(data);
    setImages(
      data.map((e) => {
        return e.urls.small;
      })
    );
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="flex flex-row mx-14 my-12 gap-4">
      <div className="border w-3/4">
        <img
          className="w-full h-[450px] object-cover"
          src={`${images[0]}`}
          alt="main-pic"
        />
      </div>
      <div className=" border w-1/4">
        <div className="border">
          <img
            className="w-full h-[225px] object-cover"
            src={`${images[1]}`}
            alt="pic"
          />
        </div>
        <div className="border">
          {" "}
          <img
            className="w-full h-[225px] object-cover"
            src={`${images[2]}`}
            alt="pic-2"
          />
        </div>
      </div>
    </div>
  );
}

export default Main;

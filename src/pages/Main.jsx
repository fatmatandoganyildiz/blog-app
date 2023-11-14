import React, { useEffect, useState } from "react";
import requests from "../request";

function Main() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    const check = localStorage.getItem("images");

    if (check) {
      const imageUrls = JSON.parse(check);
      setImages(imageUrls);
      console.log(imageUrls);

    } else {

      const response = await fetch(requests.requestMain);
      const data = await response.json();
      console.log(data);

      const imageUrls = data.map((e) => e.urls.small);

      localStorage.setItem("images", JSON.stringify(imageUrls));

      setImages(imageUrls);

    }
  };

  return (
    <div className="flex flex-row mx-14 my-12 gap-4">
      <div className="border w-3/4">
        {images.length>0?(  <img
          className="w-full h-[450px] object-cover"
          src={`${images[0]}`}
          alt="main-pic"
        />): (<p>No images</p>)}
      
      </div>
      <div className=" border w-1/4 gap-2">
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

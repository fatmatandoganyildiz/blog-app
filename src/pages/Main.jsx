import React, { useEffect, useState } from "react";
import requests from "../request";

function Main() {
  const [imagesMain, setImagesMain] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    const check = localStorage.getItem("imagesMain");

    if (check) {
      const imageUrls = JSON.parse(check);
      setImagesMain(imageUrls);
    } else {
      const response = await fetch(requests.requestMain);
      const data = await response.json();
      console.log(data);

      setImagesMain(
        localStorage.setItem(
          "imagesMain",
          JSON.stringify(data.map((e) => e.urls.small))
        )
      );
    }
  };

  return (
    <div className="flex flex-row mx-14 my-12 gap-4">
      <div className="border w-3/4">
        {imagesMain.length > 0 ? (
          <img
            className="w-full h-[450px] object-cover"
            src={`${imagesMain[0]}`}
            alt="main-pic"
          />
        ) : (
          <p>No images</p>
        )}
      </div>
      <div className=" border w-1/4 gap-2">
        <div className="border">
          <img
            className="w-full h-[225px] object-cover"
            src={`${imagesMain[1]}`}
            alt="pic"
          />
        </div>
        <div className="border">
          {" "}
          <img
            className="w-full h-[225px] object-cover"
            src={`${imagesMain[2]}`}
            alt="pic-2"
          />
        </div>
      </div>
    </div>
  );
}

export default Main;

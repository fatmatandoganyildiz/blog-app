import React, { useEffect, useState } from "react";
import requests from "../request";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

function Health() {
  // const [images, setImages] = useState([]);
  // const [desc, setDesc] = useState([]);
  // const [altdesc, setAltdesc] = useState([]);

  // const image = images[Math.floor(Math.random() * 12)];

  // useEffect(() => {
  //   fetchImages();
  // }, []);

  // const fetchImages = async () => {
  //   const response = await fetch(requests.requestHealth);

  //   const data = await response.json();
  //   setImages(
  //     data.map((e) => {
  //       return e.urls.small;
  //     })
  //   );
  //   // console.log(data);

  //   setDesc(
  //     data.map((d) => {
  //       return d.current_user_collections.description;
  //     })
  //   );
  //   console.log(desc);

  //   setAltdesc(
  //     data.map((a) => {
  //       return a.alt_description;
  //     })
  //   );
  // };
  return (
    <>
      <h1 className="text-center my-16 mx-16 text-6xl font-extralight tracking-widest">
        HEALTH{" "}
      </h1>
      {/* <div className="mx-16 my-16">
        <div>
          <img
            className="w-full h-[240px] object-cover"
            src={`${images[0]}`}
            alt="pic"
          />
        </div>
        <div className="my-12 justify-items-center border">
        <div className="border grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
           {images.map((image, id) => (
            <div className="border ">
              <img
                key={id}
                className="w-[560px] h-[200px] border object-cover "
                src={`${image}`}
                alt="alt"
              />
              <h4 className="text-2xl my-2">{`${desc[id]}`}</h4>
              <p className="ml-1">{`${altdesc[id]}`}</p>
            </div>
          ))}
        </div>
        </div>
   */}
      {/* </div> */}

    </>
  );
}

export default Health;

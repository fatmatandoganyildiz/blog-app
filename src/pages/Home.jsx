import React, { useState, useEffect } from "react";
import Main from "./Main";
import requests from "../request";
import { Link } from "react-router-dom";

function Home() {
  const [imageHome, setImagesHome] = useState([]);
  // const [id, setId] = useState("");
  const [altDesc, setAltdesc] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    const storagedImages = localStorage.getItem("imageHome");

    if (storagedImages) {
      const imageUrl = JSON.parse(storagedImages);
      setImagesHome(imageUrl);
    } else {
      const response = await fetch(requests.requestHome);
      const datas = await response.json();
      console.log(datas);

      setImagesHome(
        localStorage.setItem(
          "imageHome",
          JSON.stringify(datas.map((e) => e.urls.small))
        )
      );

      // setAltdesc(
      //   datas.map((a) => {
      //     return a.alt_description;
      //   })
      // );
    }
  };

  // const fetchImages = async () => {
  //   const storagedImages = localStorage.getItem("imageHome");

  //   if (storagedImages) {
  //     const imageUrl = JSON.parse(storagedImages);
  //     setImagesHome(imageUrl);
  //   } else {
  //     const response = await fetch(requests.requestHome);
  //     const datas = await response.json();
  //     console.log(datas);

  //     setImagesHome(
  //       localStorage.setItem(
  //         "imageHome",
  //         JSON.stringify(datas.map((e) => e.urls.small))
  //       )
  //     );

  //     // setAltdesc(
  //     //   datas.map((a) => {
  //     //     return a.alt_description;
  //     //   })
  //     // );
  //   }
  // };

  //   // // const image = images[Math.floor(Math.random() * 12)];

  return (
    <div>
      <Main />
      <div className="mx-14 my-12 justify-items-center border">
        <div className="border grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {imageHome.map((image, id) => (
            <Link to={"/article/" + image[id]}>
              <div className="border">
                <img
                  key={image.id}
                  className="w-[560px] h-[200px] border object-cover "
                  src={`${image}`}
                  alt="alt"
                />
                {/* <h4 className="text-2xl my-2"  key={image.id}>{`${desc[id]}`}</h4>  */}
                <p className="ml-1" key={image.id}>{`${altDesc[id]}`}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;

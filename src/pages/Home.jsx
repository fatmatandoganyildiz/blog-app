import React, { useState, useEffect } from "react";
import Main from "./Main";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import requests from "../request";
import { Link } from "react-router-dom";

function Home() {
  const [images, setImages] = useState([]);
  const [desc, setDesc] = useState([]);
  const [altdesc, setAltdesc] = useState([]);

  const image = images[Math.floor(Math.random() * 12)];

  const fetchImages = async () => {
    const response = await fetch(requests.requestHome);

    const data = await response.json();
    console.log(data);
    setImages(
      data.map((e) => {
        return e.urls.small;
      })
    );

    setDesc(
      data.map((d) => {
        return d.current_user_collections.description;
      })
    );
    console.log(desc);

    setAltdesc(
      data.map((a) => {
        return a.alt_description;
      })
    );
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div>
      <Header />
      <Navbar />
      <Main />
      <div className="mx-14 my-12 justify-items-center border">
        <div className="border grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {images.map((image, id) => (
            <Link to={"/article/" + image.id}>
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
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;

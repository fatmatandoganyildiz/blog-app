import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { key } from "../request";

function Article() {
  let params = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    if (params.id) {
      const fetchDetails = async () => {
        try {
          const response = await fetch(
            `https://api.unsplash.com/photos/${params.id}?client_id=${key}`
          );
          if (!response.ok) {
            throw new Error("Photo not found");
          }
          const detailData = await response.json();
          console.log(detailData);
          setDetails(detailData);
        } catch (error) {
          console.error("Error fetching photo details:", error.message);
        }
      };
      fetchDetails();
    }

  }, [params.id]);

  const truncateString = (str, num) => {
    if(str?.length > num){
      return str.slice(0,num) + "..."
    } else{
      return str;
    }
  }

  return (
    <div className=" grid justify-center">
      <div className="bg-stone-300 grid justify-center px-10 py-10 my-40">
        {details?.description && (
          <h2 className="text-3xl font-light justify-center tracking-wider font-serif mb-2 text-center">
            {truncateString(details.alt_description,20)}
          </h2>
        )}
        <div className="grid justify-center mt-2">
          {" "}
          {details?.urls && (
            <img
              className="w-[550px] h-[350px] object-cover"
              src={details.urls.regular}
              alt={details.alt_description}
            />
          )}
          {details?.user?.first_name && (
            <h2 className="text-2xl font-light tracking-wider font-serif">
              {details.user.first_name}
            </h2>
          )}
          <p>{truncateString(details?.description, 70)}</p>
        </div>
      </div>
    </div>
  );
}

export default Article;

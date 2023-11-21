import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { key } from "../request";

function Article() {
  const { name } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    if (name) {
      const fetchDetails = async () => {
        try {
          const response = await fetch(
            `https://api.unsplash.com/photos/${name}?client_id=${key}`
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
  }, [name]);

  return (
    <div>
      <p>Photo Name: {details?.alt_description}</p>
    </div>
  );
}

export default Article;

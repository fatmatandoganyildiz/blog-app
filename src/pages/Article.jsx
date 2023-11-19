import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { key } from "../request";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

function Article({item}) {
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = UserAuth();

  let params = useParams();

  const articleID = doc(db, "users", `${user?.email}`);

  const saveArticle = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(articleID, {
        saveArticle: arrayUnion({
          id: item.id,
          title: item.title,
          // img: item.backdrop_path,//
        }),
      });
    } else {
    }
  };

  const [details, setDetails] = useState({});

  useEffect(() => {
    // setDetails({});
    if (params.name) {
      const fetchDetails = async () => {
        const data = await fetch(
          `https://api.unsplash.com/photos/query=${params.name}&client_id=${key}
          `
        );
        const detailData = await data.json();
        console.log(detailData);
        setDetails(detailData);
      };
      fetchDetails();
    }
  }, [params.name]);

  return (
    <div>
      <img
        key={details.current_user_collections}
        className="w-[560px] h-[200px] border object-cover "
        src={`${details.urls}`}
        alt="alt"
      />
      {/* <h4 className="text-2xl my-2" key={details.id}>{`${details.current_user_collections.description}`}</h4>  */}
      <p className="ml-1">{`${details}`}</p>
    </div>
  );
}

export default Article;

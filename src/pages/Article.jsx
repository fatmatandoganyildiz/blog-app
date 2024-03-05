import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

function Article() {
  let params = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      if (params.id) {
        const docRef = doc(db, "posts", `${params.id}`);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setPost(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } else {
        console.log("Makale bulunamadi");
      }
    };

    fetchData();
  }, [params.id]);

  return (
    <div className="flex justify-center min-w-screen min-h-screen bg-gray-100">
      <div className="bg-white p-10 my-16 max-w-2xl w-full rounded-md shadow-md h-auto">
        {post && (
          <h2 className="text-3xl font-semibold mb-4 font-serif text-left">
            {post.title}
          </h2>
        )}
        {post?.author?.name && (
          <h2 className="font-serif flex">
            <p className="font-semibold">Author: </p>
            <Link
              to={`/authorPage/${post.author.id}`}
              className="hover:underline ml-2"
            >
              {post.author.name}
            </Link>
          </h2>
        )}
        <div className="mt-6">
          {post?.image && (
            <img
              className="w-full h-auto rounded-md shadow-md"
              src={post.image}
              alt={post.image}
            />
          )}
        </div>
        <p className="mt-6 text-gray-800">{post?.postText}</p>
      </div>
    </div>
  );
}

export default Article;

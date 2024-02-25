import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db, storage } from "../firebase";
import { getDownloadURL, ref } from "firebase/storage";

function Health() {
  const [postList, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  const getPosts = async () => {
    try {
      const data = await getDocs(query(postsCollectionRef, where("categories", "array-contains", "Life-Style")));
      const posts = await Promise.all(
        data.docs.map(async (doc) => {
          const postData = doc.data();
          const imageUrl = await getDownloadURL(ref(storage, postData.image));
          return {
            ...postData,
            id: doc.id,
            imageUrl,
          };
        })
      );

      setPostList(posts);
    } catch (error) {
      console.error("Error getting posts: ", error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="mx-16 my-16">
      <h1 className="text-center my-16 text-6xl font-extralight tracking-widest">
        LIFE-STYLE
      </h1>
      <div className="my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center p-8">
        {postList.map((post) => (
          <div
            className="bg-white rounded-md overflow-hidden shadow-md transition-transform transform hover:scale-105"
            key={post.id}
          >
            <Link to={`/article/${post.id}`}>
              <img
                className="w-full h-48 object-cover"
                src={post.imageUrl}
                alt={post.title}
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-700">{post.postText.slice(0,100)}...</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-gray-600">{post.author.name}</span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Health;
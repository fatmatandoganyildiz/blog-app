import React, { useEffect, useState } from "react";
import { getDocs, collection, query, where, doc } from "firebase/firestore";
import { db, storage } from "../firebase";
import { getDownloadURL, ref } from "firebase/storage";
import { Link, useParams } from "react-router-dom";

function AuthorPage() {
  let { id } = useParams();

  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      if (id) {
        // console.log(id);
        try {
          const data = await getDocs(
            query(postsCollectionRef, where("author.id", "==", id))
          );
          const posts = await Promise.all(
            data.docs.map(async (doc) => {
              const postData = doc.data();
              const imageUrl = await getDownloadURL(
                ref(storage, postData.image)
              );
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
      }
    };

    getPosts();
  }, [id]);

  return (
    <div className="mx-16 my-16">
      <h1 className="text-center my-16 text-6xl font-light tracking-wide">
        Welcome to the Author's Page, {id}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center p-8">
        {postLists.map((post) => (
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
                <p className="text-gray-700">
                  {post.postText.slice(0, 100)}...
                </p>
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

export default AuthorPage;

import React from "react";
import { createContext, useContext, useState } from "react";
import { db, storage } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";
import { Link } from "react-router-dom";

const PostContext = createContext();

export function PostContextProvider({ children }) {
  const [postList, setPostList] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const postsCollectionRef = collection(db, "posts");

  const postPerPage = 12;
  const pageVisited = pageNumber * postPerPage;
  const pageCount = Math.ceil(postList.length / postPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const displayPosts = postList
    .slice(pageVisited, pageVisited + postPerPage)
    .map((post) => {
      return (
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
              <p className="text-gray-700">{post.postText.slice(0, 100)}...</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-gray-600">{post.author.name}</span>
              </div>
            </div>
          </Link>
        </div>
      );
    });
 
  const getPostsByCategory = async (category) => {
    try {
      const postsCollectionRef = collection(db, "posts");
      const data = await getDocs(
        query(
          postsCollectionRef,
          where("categories", "array-contains", category)
        )
      );
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

  return (
    <PostContext.Provider
      value={{
        postList,
        setPostList,
        getPostsByCategory,
        displayPosts,
        changePage,
        pageCount,
        pageVisited,
        pageNumber,
        postsCollectionRef,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}

export const usePostContext = () => useContext(PostContext);

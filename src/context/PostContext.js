import React from "react";
import { createContext, useContext, useState } from "react";
import { db, storage } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";

const PostContext = createContext();

export function PostContextProvider({ children }) {
  const [postList, setPostList] = useState([]);

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
      value={{ postList, setPostList, getPostsByCategory }}
    >
      {children}
    </PostContext.Provider>
  );
}

export const usePostContext = () => useContext(PostContext);

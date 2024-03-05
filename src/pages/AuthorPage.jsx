import React, { useEffect } from "react";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db, storage } from "../firebase";
import { getDownloadURL, ref } from "firebase/storage";
import { useParams } from "react-router-dom";
import { usePostContext } from "../context/PostContext";
import Pagination from "../components/Pagination";

function AuthorPage() {
  let { id } = useParams();
  const { setPostList, displayCategoryPosts, pageCount, changePage,postsCollectionRef } =
    usePostContext();
  // const postsCollectionRef = collection(db, "posts");

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
        {displayCategoryPosts}
        <Pagination pageCount={pageCount} changePage={changePage} />
      </div>
    </div>
  );
}

export default AuthorPage;

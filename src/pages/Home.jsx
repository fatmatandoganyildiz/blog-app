import React, { useEffect } from "react";
import { getDocs } from "firebase/firestore";
import { storage } from "../firebase";
import { getDownloadURL, ref } from "firebase/storage";
import Pagination from "../components/Pagination";
import { usePostContext } from "../context/PostContext";

function Home() {
  const {
    displayPosts,
    pageCount,
    changePage,
    setPostList,
    postsCollectionRef,
  } = usePostContext();

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      const data = await getDocs(postsCollectionRef);
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
    <div className="container mx-auto px-4">
      <h1 className="text-center my-16 text-5xl font-extralight tracking-widest">
        HOME
      </h1>{" "}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {displayPosts}
        <Pagination pageCount={pageCount} changePage={changePage} />
      </div>
    </div>
  );
}

export default Home;

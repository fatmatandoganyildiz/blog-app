import React, { useEffect, useState } from "react";
import { getDocs } from "firebase/firestore";
import { storage } from "../firebase";
import { getDownloadURL, ref } from "firebase/storage";
import { Link } from "react-router-dom";
import Pagination from "../components/Pagination";
import { usePostContext } from "../context/PostContext";

function Home() {
  const {
    // pageNumber,
    // setPageNumber,
    postList,
    setPostList,
    postsCollectionRef,
  } = usePostContext();
  
  const [pageNumber, setPageNumber] = useState([]);

  const postsPerPage = 12;
  const pageVisited = pageNumber * postsPerPage;
  const pageCount = Math.ceil(postList.length / postsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const displayPosts = postList
    .slice(pageVisited, pageVisited + postsPerPage)
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

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-center my-16 text-6xl font-extralight tracking-widest">
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

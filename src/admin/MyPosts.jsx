import React, { useEffect} from "react";
import {
  getDocs,
  query,
  where,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db, storage, auth } from "../firebase";
import { getDownloadURL, ref } from "firebase/storage";
import { Link } from "react-router-dom";
import { usePostContext } from "../context/PostContext";
import Pagination from "../components/Pagination";

function MyPosts() {
  const {
    pageNumber,
    postList,
    setPostList,
    pageCount,
    changePage,
    postsCollectionRef,
  } = usePostContext();

  const currentUser = auth.currentUser;
  const currentUserUId = currentUser ? currentUser.uid : null;

  const postsPerPage = 12;
  const pageVisited = pageNumber * postsPerPage;

  const getPosts = async (currentUserUId) => {
    if (!currentUserUId) {
      alert("Error: User is not authenticated");
      return;
    }
    try {
      const data = await getDocs(
        query(postsCollectionRef, where("author.id", "==", currentUserUId))
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

  useEffect(() => {
    getPosts(currentUserUId);
  }, [currentUserUId]);

  const displayPosts = postList
    .slice(pageVisited, pageVisited + postsPerPage)
    .map((post) => {
      return (
        <div
          className="bg-white rounded-md overflow-hidden shadow-md transition-transform transform hover:scale-105 relative"
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
          <div className="absolute bottom-2 right-2">
            <button
              className="py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-300"
              onClick={() => {
                handleDelete(post.id);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      );
    });

  const handleDelete = async (id) => {
    const post = doc(db, "posts", id);
    deleteDoc(post);
    setPostList(postList.filter((post) => post.id !== id));
  };

  return (
    <div className="mx-16 my-16">
      <h1 className="text-center my-16 text-6xl font-extralight tracking-widest">
        MY POSTS
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center p-8">
        {displayPosts}
        <Pagination pageCount={pageCount} changePage={changePage} />
      </div>
    </div>
  );
}
export default MyPosts;

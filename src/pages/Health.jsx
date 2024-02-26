import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { usePostContext } from "../context/PostContext";

function Health() {
  const { postList, getPostsByCategory } = usePostContext();

  useEffect(() => {
    getPostsByCategory("Health");
  }, []);

  return (
    <div className="mx-16 my-16">
      <h1 className="text-center my-16 text-6xl font-extralight tracking-widest">
        HEALTH
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

export default Health;

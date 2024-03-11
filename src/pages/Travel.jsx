import React, { useEffect } from "react";
import { usePostContext } from "../context/PostContext";
import Pagination from "../components/Pagination";

function Travel() {
  const { getPostsByCategory, displayPosts, pageCount, changePage } =
    usePostContext();

  useEffect(() => {
    getPostsByCategory("Travel");
  }, []);

  return (
    <div className="mx-16 my-16">
      <h1 className="text-center my-16 text-5xl font-extralight tracking-widest">
        TRAVEL
      </h1>
      <div className="my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center p-8">
        {displayPosts}
        <Pagination pageCount={pageCount} changePage={changePage} />
      </div>
    </div>
  );
}

export default Travel;

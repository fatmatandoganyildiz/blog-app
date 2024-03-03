import React from "react";
import ReactPaginate from "react-paginate";

function Pagination({ pageCount, changePage }) {
  return (
    <div className="fixed bottom-2 right-12">
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={
          "flex bg-gray-100 p-2 rounded-md justify-center items-center mt-4 mb-12"
        }
        previousLinkClassName={"bg-gray-200 rounded-md px-3 py-1 mr-2"}
        nextLinkClassName={"bg-gray-200 rounded-md px-3 py-1 ml-2"}
        disabledClassName={"opacity-50 cursor-not-allowed"}
        activeClassName={"bg-pink-500 text-white px-3 mx-1 py-1 rounded-md"}
      />
    </div>
  );
}

export default Pagination;

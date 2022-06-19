import React from "react";

function Pagination({ pageProp, previousPage, nextPage }) {
  return (
    <>
      <div className="mb-8 flex justify-center">
        <button
          className="p-0.5 md:p-2 font-bold border-2 border-indigo-400 text-indigo-500 border-r-0 rounded-l-xl"
          onClick={previousPage}
        >
          Previous
        </button>
        <button className="p-0.5 md:p-2 font-bold border-2 border-indigo-400 text-indigo-500 bg-gray-200">
          {pageProp}
        </button>
        <button
          className="p-0.5 md:p-2 font-bold border-2 border-indigo-400 text-indigo-500 border-l-0 rounded-r-xl"
          onClick={nextPage}
        >
          Next
        </button>
      </div>
    </>
  );
}
export default Pagination;

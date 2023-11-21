import React from "react";

function Account() {
  return (
    <div className=" bg-red-200">
      <form className="mx-14 my-12">
        <h1 className="text-2xl font-light font-serif tracking-widest text-center py-2">
          Your Articles
        </h1>
        {/* <div>
            <h2 className="text-xl font-light font-serif tracking-wider py-2">
              Choose an Section
            </h2>
            <ul className="px-1">
              <li>
                <input type="checkbox" />
                Life-Style
              </li>
              <li>
                {" "}
                <input type="checkbox" />
                Travel
              </li>
              <li>
                {" "}
                <input type="checkbox" />
                Health
              </li>
            </ul>
          </div> */}
        <div className="flex flex-col items-center bg-blue-400">
          <h2 className="text-2xl font-light font-serif tracking-wider py-2">
            Tell Your Story
          </h2>
          <input
            placeholder="Title"
            type="text"
            className="border-l outline-none p-2 mb-2 text-xl font-medium"
          />
          <input placeholder="Your Story"  type="text" className="outline-none p-2 mx-9" />
        </div>
      </form>
    </div>
  );
}

export default Account;

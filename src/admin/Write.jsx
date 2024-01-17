import React from 'react'
function Write() {

    return (
        <div className=" bg-red-200">
          <form className="mx-14 my-12" >
            <h1 className="text-2xl font-light font-serif tracking-widest text-center py-2">
              Tell Your Story
            </h1>
            <div className="flex flex-col items-center bg-blue-400 py-2">
              <input
                placeholder="Title"
                type="text"
                className="border-l w-1/2 outline-none p-2 mb-2 text-xl font-medium"
              />
              <textarea
                placeholder="Your Story"
                type="text"
                className="border-l w-4/6 h-96 outline-none p-2 mb-2 text-xl font-medium"
              />
            </div>
            <div className=" bg-green-400 flex flex-row justify-between px-5">
              <div>
                <h2 className="text-xl font-light font-serif tracking-wider py-2">
                  Category
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
              </div>
              <div>
              <h2 className="text-xl font-light font-serif tracking-wider py-2">
                  Add an Image
              </h2>
              <input type="file"/>
              </div>
              <div>
                Buraya bir sey gelecek
              </div>
            </div>
            <div>
              <div className="bg-yellow-500">
                <button className="bg-red-800 text-white px-2 rounded-md">Publish</button>
              </div>
            </div>
          </form>
        </div>
      );
}

export default Write
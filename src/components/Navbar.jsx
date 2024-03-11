import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <ul className="flex flex-row justify-evenly my-3 bg-white">
        <Link to="/">
          <li className="relative hover:text-[white] py-2 px-6 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-[#aa2312] after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-gray-600">
            HOME
          </li>
        </Link>
        <Link to="/lifestyle">
          <li className="relative hover:text-[white] py-2 px-6 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-[#aa2312] after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-gray-600">
            LIFE STYLE
          </li>
        </Link>
        <Link to="/health">
          <li className="relative hover:text-[white] py-2 px-6 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-[#aa2312] after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-gray-600">
            HEALTH
          </li>
        </Link>
        <Link to="/travel">
          <li className="relative hover:text-[white] py-2 px-6 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-[#aa2312] after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-gray-600">
            TRAVEL
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;

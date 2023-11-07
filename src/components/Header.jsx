import React from "react";
import {
  PiFacebookLogoThin,
  PiInstagramLogoThin,
  PiTwitterLogoThin,
} from "react-icons/pi";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="border flex flex-row  justify-between">
      <div className=" flex flex-row gap-3 px-4 py-2">
        <PiFacebookLogoThin className="cursor-pointer" />
        <PiTwitterLogoThin className="cursor-pointer" />
        <PiInstagramLogoThin className="cursor-pointer" />
      </div>
      <p className="text-2xl font-light font-serif tracking-widest text-center py-2">
        BLOG
      </p>
      <div className="px-4 py-2">
        <Link to="/login">
          <button className="text-black cursor-pointer">Sign In</button>
        </Link>
        <Link to="/signup">
          <button className="bg-black text-white cursor-pointer ml-1 px-1 rounded-sm">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Header;

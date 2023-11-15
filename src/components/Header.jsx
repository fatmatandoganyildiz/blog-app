import React from "react";
import {
  PiFacebookLogoThin,
  PiInstagramLogoThin,
  PiTwitterLogoThin,
} from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

function Header() {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(user.email);

  return (
    <div className="border flex flex-row  justify-between">
      <div className=" flex flex-row gap-3 px-4 py-2">
        <PiFacebookLogoThin className="cursor-pointer" />
        <PiTwitterLogoThin className="cursor-pointer" />
        <PiInstagramLogoThin className="cursor-pointer" />
      </div>
      <Link to="/">
        <p className="text-2xl font-light font-serif tracking-widest text-center py-2">
          BLOG
        </p>
      </Link>
      {user?.email ? (
        <div className="px-4 py-2">
          <Link to="/account">
            <button className="text-black cursor-pointer">Account</button>
          </Link>
          <button
            onClick={handleLogout}
            className="bg-black text-white cursor-pointer ml-1 px-1 rounded-sm"
          >
            Log Out
          </button>
        </div>
      ) : (
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
      )}
    </div>
  );
}

export default Header;

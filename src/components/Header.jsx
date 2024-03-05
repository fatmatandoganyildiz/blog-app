import React from "react";
import {
  PiFacebookLogoThin,
  PiInstagramLogoThin,
  PiTwitterLogoThin,
} from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import BlogLogo from "../assets/images/The Blog_transparent.png";
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

  return (
    <div className="border flex flex-row items-center justify-between sticky-top ">
      {/* <div className="flex flex-row gap-3 px-4 py-2">
      <PiFacebookLogoThin className="cursor-pointer" />
      <PiTwitterLogoThin className="cursor-pointer" />
      <PiInstagramLogoThin className="cursor-pointer" />
    </div> */}
      <div>
        <Link to="/">
          <img src={BlogLogo} alt="BlogLogo" className="h-auto w-52" />
        </Link>
      </div>
      <div className="flex flex-row">
        {user?.email ? (
          <div className="px-4 py-2">
            <Link to="/account">
              <button className="text-black cursor-pointer">Account</button>
            </Link>
            <Link to="/write">
              <button className="text-black cursor-pointer bg-pink-500">
                Write
              </button>
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
              <button className="relative py-2 px-8 mx-2 text-black text-base font-bold nded-full overflow-hidden bg-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#BE3726] before:[#c45f52] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0">
                Sign In
              </button>
            </Link>
            <Link to="/signup">
              <button className="relative py-2 px-8 text-black text-base font-bold nded-full overflow-hidden bg-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#BE3726]  before:[#5f1c13] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0">
                Sign Up
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;

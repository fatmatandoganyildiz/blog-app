import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="fixed bottom-0 w-full bg-white">
      <ul className="flex flex-row justify-evenly my-3 tracking-wide">
        <li className="hover:text-[#aa2312] ">
          <Link to="/help">HELP</Link>
        </li>
        <li className="hover:text-[#aa2312]">
          <Link to="/contact">CONTACT</Link>
        </li>
        <li className="hover:text-[#aa2312]">
          <Link to="/about">ABOUT</Link>
        </li>
        <li className="hover:text-[#aa2312]">
          <Link to="/careers">CAREERS</Link>
        </li>
        <li className="hover:text-[#aa2312]">
          <Link to="/terms">TERMS</Link>
        </li>
        <li className="hover:text-[#aa2312]">
          <Link to="/teams">TEAMS</Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;

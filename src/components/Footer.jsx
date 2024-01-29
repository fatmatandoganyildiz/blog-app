import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="fixed bottom-0 w-full bg-white">
      <ul className="flex flex-row justify-evenly my-3 tracking-wide">
        <Link to="/help">
          <li>HELP</li>
        </Link>
        <Link to="/contact">
          <li>CONTACT</li>
        </Link>
        <Link to="/about">
          <li>ABOUT</li>
        </Link>
        <Link to="/careers">
          <li>CAREERS</li>
        </Link>
        <Link to="/terms">
          <li>TERMS</li>
        </Link>
        <Link to="/teams">
          <li>TEAMS</li>
        </Link>
      </ul>
    </footer>
  );
}

export default Footer;

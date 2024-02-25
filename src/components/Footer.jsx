import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="fixed bottom-0 w-full bg-white">
      <ul className="flex flex-row justify-evenly my-3 tracking-wide">
        <li>
          <Link to="/help">HELP</Link>
        </li>
        <li>
          <Link to="/contact">CONTACT</Link>
        </li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
        <li>
          <Link to="/careers">CAREERS</Link>
        </li>
        <li>
          <Link to="/terms">TERMS</Link>
        </li>
        <li>
          <Link to="/teams">TEAMS</Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;


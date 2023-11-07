import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <ul className="flex flex-row justify-evenly my-3">
        <Link to="/"><li>HOME</li></Link>
        <Link to="/lifestyle"><li>LIFE STYLE</li></Link>
        <Link to="/health"><li>HEALTH</li></Link>
        <Link to="/travel"><li>TRAVEL</li></Link>
      </ul>
    </div>
  );
}

export default Navbar;

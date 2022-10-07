import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div id="navbar">
        <ul>
          <li className="nav-link" id="nav-item-1">
            <Link to="/">Home</Link>
          </li >
          <li className="nav-link" id="nav-item-2">
            <Link to="/users">Log In</Link>
          </li>
          <li className="nav-link" id="nav-item-3">
            <Link to="/locations">Add A Location</Link>
          </li>
        </ul >
      </div>
    </nav >
  )
}

export default Navbar;
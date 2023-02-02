import React from "react";
import "./Header.css";

function Header() {
  return (
    <div id="section">
      <nav className="nav-container">
      <h1 id="logo">REACT</h1>
        <ul className="rotess">
          <li><a href="#"> Welcome</a></li>
          <li><a href="#"> Log in</a></li>
          <li><a href="#"> About</a></li>
          <li><a href="#"> Contact</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;

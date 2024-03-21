import React from "react";
import "../Components/Header.css";

const Header = () => {
  return (
    <>
      <nav className="navbar">
        <div className="Navbar_Container">
          <div className="logo">
            <h3 className="">Smart Adriots</h3>
          </div>

          <div className="center">
            <ul className="menu_items">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Blogs</li>
              <li>Portfolio</li>
            </ul>
          </div>
          <div>
            <button className="contact_button"> Contact Us</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

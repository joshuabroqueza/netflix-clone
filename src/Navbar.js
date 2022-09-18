import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "./images/netflix-logo.png";

function Navbar() {
  //scroll down css function
  const [show, handleShow] = useState(false);

  useEffect(() => {
    const letShow = () => {
      return window.scrollY > 100 ? handleShow(true) : handleShow(false);
    };

    window.addEventListener("scroll", letShow);

    return () => {
      window.removeEventListener("scroll", letShow);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className="nav__logo" src={logo} alt="netflix-logo" />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
        alt="netflix-avatar"
        className="nav__avatar"
      />
    </div>
  );
}

export default Navbar;

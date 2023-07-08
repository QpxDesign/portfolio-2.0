import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import ThemeSwitch from "./ThemeSwitch";

export default function DropdownMenu() {
  const activePage = window.location.pathname.replace("/", "");
  const [showDropdown, setshowDropdown] = useState(false);
  function isLoggedIn() {
    if (localStorage.getItem("user") !== null) {
      return true;
    } else {
      return false;
    }
  }
  function handleSignout() {
    if (localStorage.getItem("user") !== null) {
      localStorage.removeItem("user");
    }
    window.location.reload();
  }
  return (
    <>
      <div
        className={showDropdown ? "dropdown-wrapper show" : "dropdown-wrapper"}
      >
        <ThemeSwitch />
        <Link to="/aboutme">
          <h5 className={activePage === "aboutme" ? "underline" : ""}>
            About Me
          </h5>
        </Link>
        <Link to="/contact">
          <h5 className={activePage === "contact" ? "underline" : ""}>
            Contact
          </h5>
        </Link>
        <Link to="/blog">
          <h5 className={activePage === "blog" ? "underline" : ""}>Blog</h5>
        </Link>
        <a href="/Assets/Resume.pdf">
          <h5>Resume</h5>
        </a>
        {isLoggedIn() ? (
          <Link to={window.location.pathname}>
            <h5 onClick={handleSignout} className="underline-hover">
              Sign Out
            </h5>
          </Link>
        ) : (
          <Link to="/login">
            <h5>Sign In</h5>
          </Link>
        )}
      </div>
      <BiMenuAltRight
        className="dropdown-toggle"
        role="button1"
        onClick={() => setshowDropdown(!showDropdown)}
      />
    </>
  );
}

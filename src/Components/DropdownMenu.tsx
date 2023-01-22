import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import ThemeSwitch from "./ThemeSwitch";

export default function DropdownMenu() {
  const activePage = window.location.pathname.replace("/", "");
  const [showDropdown, setshowDropdown] = useState(false);
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
        <Link to="/blog">
          <h5 className={activePage === "blog" ? "underline" : ""}>Blog</h5>
        </Link>
      </div>
      <BiMenuAltRight
        className="dropdown-toggle"
        role="button1"
        onClick={() => setshowDropdown(!showDropdown)}
      />
    </>
  );
}

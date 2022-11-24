import React from "react";
import { Link } from "react-router-dom";

interface HeaderProps {
  activePage: string;
}

export default function Header(props: HeaderProps) {
  return (
    <nav>
      <Link to="/">
        <h1>Quinn Patwardhan</h1>
      </Link>
      <Link to="/aboutme">
        <h5 className={props.activePage === "aboutme" ? "underline" : ""}>
          About Me
        </h5>
      </Link>
    </nav>
  );
}

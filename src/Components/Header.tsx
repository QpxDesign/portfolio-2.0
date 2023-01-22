import React from "react";
import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";

export default function Header() {
  return (
    <nav>
      <Link to="/">
        <h1>Quinn Patwardhan</h1>
      </Link>
      <DropdownMenu />
    </nav>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";

interface HeaderProps {
  activePage: string;
}

export default function Header(props: HeaderProps) {
  return (
    <nav>
      <Link to="/">
        <h1>Quinn Patwardhan</h1>
      </Link>
      <DropdownMenu activePage={props.activePage} />
    </nav>
  );
}

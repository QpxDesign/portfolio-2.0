import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="footer-wrapper">
      <Link to="/">
        <h1>copyright 2022 quinn patwardhan</h1>
        <h2>made with ❤️ in dc</h2>
      </Link>
    </div>
  );
}

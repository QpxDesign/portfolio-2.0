import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="footer-wrapper">
      <Link to="/">
        <h1>copyright 2026 quinn patwardhan</h1>
        <h2>made with ❤️ in dc &amp; la</h2>
      </Link>
    </div>
  );
}

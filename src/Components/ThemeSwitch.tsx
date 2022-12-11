import React, { useState, useEffect } from "react";
import { BsMoonFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";

export default function ThemeSwitch() {
  const [on, setOn] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("theme") === "darkmode") {
      setOn(true);
      document.documentElement.style.setProperty("--backgroundcolor", "black");
      document.documentElement.style.setProperty("--textcolor", "white");
      document.documentElement.style.setProperty(
        "--headerbackgroundcolor",
        "#111827"
      );
      document.documentElement.style.setProperty(
        "--headerbackgroundtext",
        "#e5e7eb"
      );
    } else if (localStorage.getItem("theme") === "lightmode") {
      document.documentElement.style.setProperty("--backgroundcolor", "white");
      document.documentElement.style.setProperty("--textcolor", "black");
      document.documentElement.style.setProperty(
        "--headerbackgroundcolor",
        "#e5e7eb"
      );
      document.documentElement.style.setProperty(
        "--headerbackgroundtext",
        "#111827"
      );
    }
  }, []);
  function handleToggle() {
    if (on) {
      setOn(false);
      document.documentElement.style.setProperty("--backgroundcolor", "white");
      document.documentElement.style.setProperty("--textcolor", "black");
      document.documentElement.style.setProperty(
        "--headerbackgroundcolor",
        "#e5e7eb"
      );
      document.documentElement.style.setProperty(
        "--headerbackgroundtext",
        "#111827"
      );
      localStorage.setItem("theme", "lightmode");
    } else {
      setOn(true);
      document.documentElement.style.setProperty("--backgroundcolor", "black");
      document.documentElement.style.setProperty("--textcolor", "white");
      document.documentElement.style.setProperty(
        "--headerbackgroundcolor",
        "#111827"
      );
      document.documentElement.style.setProperty(
        "--headerbackgroundtext",
        "#e5e7eb"
      );
      localStorage.setItem("theme", "darkmode");
    }
  }
  return (
    <div
      className={on ? "switch on" : "switch off"}
      onClick={() => handleToggle()}
    >
      <div className="icon-wrapper">{on ? <BsMoonFill /> : <FaSun />}</div>
    </div>
  );
}

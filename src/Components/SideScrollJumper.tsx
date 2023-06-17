import React, { useEffect, useState } from "react";
import { BiRadioCircle } from "react-icons/bi";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
export default function SideScrollJumper() {
  const [currentSection, setCurrentSection]: any = useState("");
  const [showExtended, setShowExtended]: any = useState(false);

  useEffect(() => {
    const a = () => {
      if (window.scrollY < 2) {
        setShowExtended(true);
      }
      var body = document.querySelector("body");
      if (body === null || body === undefined) {
        return;
      }

      var firstSectionOffset = window.innerHeight;
      var ph = 0;
      document.querySelectorAll(".project").forEach((item: any) => {
        ph += item.clientHeight;
      });
      if (
        window.scrollY >= firstSectionOffset &&
        window.scrollY < ph + firstSectionOffset
      ) {
        setCurrentSection("projects");
      }
      if (
        window.scrollY >= ph + firstSectionOffset &&
        window.scrollY <
          ph +
            firstSectionOffset +
            document.querySelector(".photography-section")!.clientHeight
      ) {
        setCurrentSection("photography");
      }

      if (
        window.scrollY >=
          ph +
            firstSectionOffset +
            document.querySelector(".photography-section")!.clientHeight &&
        window.scrollY <
          ph +
            firstSectionOffset +
            document.querySelector(".photography-section")!.clientHeight +
            document.querySelector(".graphic-section")!.clientHeight
      ) {
        setCurrentSection("graphics");
      }
    };
    window.onscroll = a;
  }, []);

  if (showExtended) {
    return (
      <div
        style={{
          position: "fixed",
          right: 0,
          height: "100%",

          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          zIndex: 9999999,
        }}
      >
        <div
          className="scrolljumper-container"
          style={{
            fontSize: ".7rem",
            background: "rgba(255,255,255,.89)",
            gap: "2em",
            position: "relative",
            padding: ".25em .5em",
            borderRadius: "2em 0 0 2em",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <BsFillArrowRightCircleFill
            style={{
              fontSize: "4em",
              position: "absolute",
              left: "-.5em",
              top: ".5em",
              background: "#64748b",
              borderRadius: "1000%",
              padding: ".15em",
              color: "white",
            }}
            onClick={() => {
              setShowExtended(false);
            }}
          />
          <h1
            className={currentSection === "projects" ? "active" : ""}
            onClick={() => {
              setCurrentSection("projects");
              window.scrollTo({
                top: window.innerHeight,
                left: 0,
                behavior: "smooth",
              });
            }}
          >
            <BiRadioCircle />
            Latest Projects
          </h1>
          <h1
            className={currentSection === "photography" ? "active" : ""}
            onClick={() => {
              setCurrentSection("photography");
              var ph = 0;
              document.querySelectorAll(".project").forEach((item: any) => {
                ph += item.clientHeight;
              });
              window.scrollTo({
                top: ph + window.innerHeight,
                left: 0,
                behavior: "smooth",
              });
            }}
          >
            <BiRadioCircle />
            Photography
          </h1>
          <h1
            className={currentSection === "graphics" ? "active" : ""}
            onClick={() => {
              var ph = 0;
              setCurrentSection("graphics");
              document.querySelectorAll(".project").forEach((item: any) => {
                ph += item.clientHeight;
              });
              window.scrollTo({
                top:
                  ph +
                  window.innerHeight +
                  document.querySelector(".photography-section")!.clientHeight,
                left: 0,
                behavior: "smooth",
              });
            }}
          >
            <BiRadioCircle />
            Graphic Design
          </h1>
        </div>
        {currentSection === "projects" ? (
          <Link to="/projects">
            <div
              role="link"
              style={{
                position: "fixed",
                right: 0,
                bottom: 0,
                margin: "1em",
                color: "white",
                fontFamily: "Source Serif Pro",
                background: "#818cf8",
                padding: ".25em 1.5em",
                borderRadius: "3em",
                fontSize: ".8em",
                cursor: "pointer",
              }}
            >
              <h1>See All Projects</h1>
            </div>
          </Link>
        ) : (
          ""
        )}
      </div>
    );
  } else {
    return (
      <div
        style={{
          fontSize: ".7rem",
          position: "fixed",
          right: 0,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          zIndex: 9999999,
        }}
      >
        <BsFillArrowRightCircleFill
          onClick={() => {
            setShowExtended(true);
          }}
          style={{
            transform: "rotate(180deg)",
            fontSize: "4em",
            left: "-.5em",
            top: ".5em",

            marginLeft: "1em",
            background: "#64748b",
            borderRadius: "1000%",
            padding: ".15em",
            color: "white",
          }}
        />
        {currentSection === "projects" ? (
          <Link to="/projects">
            <div
              role="link"
              style={{
                position: "fixed",
                right: 0,
                bottom: 0,
                margin: "1em",
                color: "white",
                fontFamily: "Source Serif Pro",
                background: "#818cf8",
                padding: ".25em 1.5em",
                borderRadius: "3em",
                fontSize: "1.125em",
                cursor: "pointer",
              }}
            >
              <h1>See All Projects</h1>
            </div>
          </Link>
        ) : (
          ""
        )}
      </div>
    );
  }
}

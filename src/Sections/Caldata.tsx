import React from "react";
import CaldataScrenshot from "../Assets/caldata-screenshot.png";
import GitLogo from "../Assets/logos/Git.png";
import GitHubLogo from "../Assets/logos/Github.png";
import JavascriptLogo from "../Assets/logos/Javascript.png";
import NPMLogo from "../Assets/logos/NPM.png";
import NodeLogo from "../Assets/logos/Node.png";
import HTTPLogo from "../Assets/logos/http.png";
import CSSLogo from "../Assets/logos/css.png";

export default function Caldata() {
  return (
    <section
      style={{
        color: "#1f2937",
        background: "#e2e8f0",
        justifyContent: "flex-start",
      }}
    >
      <div className="project-info-wrapper">
        <h2>Caldata</h2>
        <h3>Learn about the countries' biggest state.</h3>
      </div>
      <div className="quickfacts">
        <div className="h-stack">
          <img
            src={CaldataScrenshot}
            className="projectScreenshot"
            style={{
              width: "90vw",
              maxHeight: "1000em",
              maxWidth: "min(95%,1000px)",
            }}
          />
          <div className="logos-wrapper" style={{ gap: "2em" }}>
            <img src={JavascriptLogo} alt="javascript logo" />
            <img src={NPMLogo} alt="npm logo" />
            <img src={GitLogo} alt="git logo" />
            <img src={GitHubLogo} alt="github logo" />
            <img src={NodeLogo} alt="github logo" />
            <img src={HTTPLogo} alt="github logo" />
            <img src={CSSLogo} alt="github logo" />
          </div>
        </div>
        <ul>
          <li>Implements Data from the US Department of Education</li>
          <li>Sourced from a live database</li>
          <li>Written in JavaScript using the React Framework</li>
          <li>Uses Open-Source Libraries for Graphing</li>
          <li>Involved Usage of Git CLI and Github CLI</li>
          <div className="options-list">
            <button
              className="button-1"
              style={{
                color: "black",
                border: "3px solid black",
                background: "rgba(0,0,0,.08)",
              }}
            >
              Visit Site
            </button>
            <a href="mailto:quinn@qpxdesign.com" target="_blank">
              <button
                className="button-1"
                style={{
                  color: "black",
                  border: "3px solid black",
                  background: "rgba(0,0,0,.08)",
                }}
              >
                Get In Touch
              </button>
            </a>
          </div>
        </ul>
      </div>
    </section>
  );
}

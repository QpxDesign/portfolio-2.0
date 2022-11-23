import React from "react";
import CompositeScreenshot from "../Assets/composite_screenshot_1.png";
import GitLogo from "../Assets/logos/Git.png";
import GitHubLogo from "../Assets/logos/Github.png";
import JavascriptLogo from "../Assets/logos/Javascript.png";
import NPMLogo from "../Assets/logos/NPM.png";
import NodeLogo from "../Assets/logos/Node.png";

export default function Composite() {
  return (
    <section
      style={{
        color: "white",
        background: "#6366f1",
        justifyContent: "flex-start",
      }}
    >
      <div className="project-info-wrapper">
        <h2>Composite</h2>
        <h3>College comparison tool with a focus on equity.</h3>
      </div>
      <div className="quickfacts">
        <div className="h-stack">
          <img
            src={CompositeScreenshot}
            className="projectScreenshot"
            alt="demo of composite"
          />
          <div className="logos-wrapper">
            <img src={JavascriptLogo} alt="javascript logo" />
            <img src={NPMLogo} alt="npm logo" />
            <img src={GitLogo} alt="git logo" />
            <img src={GitHubLogo} alt="github logo" />
            <img src={NodeLogo} alt="github logo" />
            NodeLogo
          </div>
        </div>
        <ul>
          <li>Implements Data from the US Department of Education</li>
          <li>Sourced from a live database</li>
          <li>Written in JavaScript using the React Framework</li>
          <li>Uses Open-Source Libraries for Graphing</li>
          <li>Involved Usage of Git CLI and Github CLI</li>
          <div className="options-list">
            <button className="button-1">Visit Site</button>
            <a
              href="mailto:quinn@qpxdesign.com"
              target="_blank"
              rel="noreferrer"
            >
              <button className="button-1">Get In Touch</button>
            </a>
          </div>
        </ul>
      </div>
    </section>
  );
}

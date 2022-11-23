import React from "react";

interface ProjectObject {
  name: string;
  blurb: string;
  backgroundcolor: string;
  textcolor: string;
  imageslug: string;
  points: string[];
  technologies: string[];
  link: string;
}

interface ProjectProps {
  data: ProjectObject;
}

export default function Project(props: ProjectProps) {
  return (
    <section
      style={{
        color: props.data.textcolor,
        background: props.data.backgroundcolor,
        justifyContent: "flex-start",
      }}
    >
      <div className="project-info-wrapper">
        <h2>{props.data.name}</h2>
        <h3>{props.data.blurb}</h3>
      </div>
      <div className="quickfacts">
        <div className="h-stack">
          <img
            src={require("../Assets/" + props.data.name + ".png")}
            className="projectScreenshot"
            alt={`demo of ${props.data.name}`}
          />
          <div className="logos-wrapper">
            {props.data.technologies.map((x, index) => {
              return (
                <img
                  src={require("../Assets/logos/" + x + ".png")}
                  key={index}
                  alt={x}
                />
              );
            })}
          </div>
        </div>
        <ul>
          {props.data.points.map((x, index) => {
            return <li key={index}>{x}</li>;
          })}
          <div className="options-list">
            <button
              className="button-1"
              style={{
                background: props.data.backgroundcolor,
                color: props.data.textcolor,
                borderColor: props.data.textcolor,
              }}
            >
              Visit Site
            </button>
            <a
              href="mailto:quinn@qpxdesign.com"
              target="_blank"
              rel="noreferrer"
            >
              <button
                className="button-1"
                style={{
                  background: props.data.backgroundcolor,
                  color: props.data.textcolor,
                  borderColor: props.data.textcolor,
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

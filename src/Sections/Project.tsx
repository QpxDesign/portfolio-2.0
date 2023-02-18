import React from "react";

interface ProjectObject {
  name: string;
  title: string;
  blurb: string;
  backgroundcolor: string;
  textcolor: string;
  points: string[];
  technologies: string[];
  link: string;
  isWebsite: boolean;
  github_link: string;
  centerButtons: boolean;
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
        <h2>{props.data.title}</h2>
        <h3>{props.data.blurb}</h3>
      </div>
      <div className="quickfacts">
        <div className="h-stack">
          <img
            src={"Assets/" + props.data.name + ".png"}
            className="projectScreenshot"
            alt={`demo of ${props.data.title}`}
          />
          <div className="logos-wrapper">
            {props.data.technologies.map((x, index) => {
              return (
                <img
                  src={"Assets/logos/" + x + ".png"}
                  key={index}
                  alt={x}
                  style={{
                    background: props.data.backgroundcolor,
                    color: props.data.textcolor,
                    borderColor: props.data.textcolor,
                  }}
                />
              );
            })}
          </div>
        </div>
        <ul>
          {props.data.points.map((x, index) => {
            return <li key={index}>{x}</li>;
          })}
          <div
            className={
              props.data.centerButtons ? "options-list center" : "options-list"
            }
          >
            <a href={props.data.github_link}>
              <button
                className="button-1"
                style={{
                  background: props.data.backgroundcolor,
                  color: props.data.textcolor,
                  borderColor: props.data.textcolor,
                }}
              >
                View Code
              </button>
            </a>
            <a href={props.data.link}>
              <button
                className={
                  props.data.isWebsite ? "button-1" : "button-1 disabled"
                }
                style={{
                  background: props.data.backgroundcolor,
                  color: props.data.textcolor,
                  borderColor: props.data.textcolor,
                }}
              >
                Visit Project
              </button>
            </a>
          </div>
        </ul>
      </div>
    </section>
  );
}

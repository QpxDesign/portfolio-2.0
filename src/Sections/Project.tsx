import React from "react";
import { AiFillApple } from "react-icons/ai";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import AppStoreBadge from "../Assets/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg";
import PlayStoreBadge from "../Assets/google-play-cusus.svg";
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
  onAppStore: boolean;
  onPlayStore: boolean;
  appstore_link: string;
  playstore_link: string;
}

interface ProjectProps {
  data: ProjectObject;
}

export default function Project(props: ProjectProps) {
  return (
    <section
      className="project"
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
                <BsFillArrowRightCircleFill />
              </button>
            </a>
            {props.data.isWebsite ? (
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
                  <BsFillArrowRightCircleFill />
                </button>
              </a>
            ) : (
              ""
            )}

            {props.data.onAppStore ? (
              <a href={props.data.appstore_link}>
                <img src={AppStoreBadge} style={{ width: "10em" }} />
              </a>
            ) : (
              ""
            )}
            {props.data.onPlayStore ? (
              <a href={props.data.playstore_link}>
                <img src={PlayStoreBadge} style={{ width: "11em" }} />
              </a>
            ) : (
              ""
            )}
          </div>
        </ul>
      </div>
    </section>
  );
}

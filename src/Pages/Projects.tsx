import React, { useEffect } from "react";
import projectdata from "../Assets/project-data.json";
import Project from "../Sections/Project";
import Header from "../Components/Header";

export default function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="page-wrapper">
      <Header />

      <h1 className="center" style={{ margin: ".5em 0" }}>
        All Projects
      </h1>
      {projectdata.map((x, index) => {
        return <Project data={x} key={index} />;
      })}
    </div>
  );
}

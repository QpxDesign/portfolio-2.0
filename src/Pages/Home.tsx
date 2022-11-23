import React from "react";
import Lead from "../Sections/Lead";
import Photography from "../Sections/Photography";
import Composite from "../Sections/Composite";
import Caldata from "../Sections/Caldata";
import Project from "../Sections/Project";
import projectdata from "../Assets/project-data.json";

export default function Home() {
  return (
    <div className="home-wrapper">
      <Lead />
      {projectdata.map((x, index) => {
        return <Project data={x} key={index} />;
      })}
    </div>
  );
}

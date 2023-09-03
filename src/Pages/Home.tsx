import React from "react";
import Lead from "../Sections/Lead";
import Photography from "../Sections/Photography";
import Project from "../Sections/Project";
import projectdata from "../Assets/project-data.json";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import GraphicDesign from "../Sections/GraphicDesign";
import SideScrollJumper from "../Components/SideScrollJumper";
import { ProjectData } from "../structs/ProjectData";

export default function Home() {
  return (
    <>
      <SideScrollJumper />
      <div className="home-wrapper">
        <Header />
        <Lead />
        {projectdata
          .filter((a: ProjectData) => a.featured === true)
          .map((x, index) => {
            return <Project data={x} key={index} />;
          })}
        <Photography />
        <GraphicDesign />
        <Footer />
      </div>
    </>
  );
}

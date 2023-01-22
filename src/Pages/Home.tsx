import React from "react";
import Lead from "../Sections/Lead";
import Photography from "../Sections/Photography";
import Project from "../Sections/Project";
import projectdata from "../Assets/project-data.json";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import GraphicDesign from "../Sections/GraphicDesign";

export default function Home() {
  return (
    <div className="home-wrapper">
      <Header />
      <Lead />
      {projectdata.map((x, index) => {
        return <Project data={x} key={index} />;
      })}
      <Photography />
      <GraphicDesign />
      <Footer />
    </div>
  );
}

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Lead from "../Sections/Lead";
import ProjectsCondensed from "../Sections/ProjectsCondensed";
import GraphicDesign from "../Sections/GraphicDesign";
import Photography from "../Sections/Photography";
import _projects from "../Assets/project-data.json";
import { CondensedProjectData } from "../structs/CondensedProjectData";

const projects = _projects as CondensedProjectData[];

export default function Home() {
  return (
    <div style={{ background: "#1F2937", color: "white" }}>
      <Header />
      <Lead />
      <ProjectsCondensed
        background={"#292524"}
        header={"Development"}
        subheader={
          "Some of the websites, apps, command-line tools, and more I've written during my journey through the bowels of computer programming."
        }
        data={projects.filter((p) => p.type === "COMP")}
      />
      <ProjectsCondensed
        background={"#44403c"}
        header={"Video Production"}
        subheader={
          "A smorgasbord of video projects I made to learn a variety of tools."
        }
        data={projects.filter((p) => p.type === "VIDEO")}
      />{" "}
      <ProjectsCondensed
        background={"#78716c"}
        header={"Writing"}
        subheader={
          "Computer Science will always be the dream, but until then writing's the stable option that will pay the bills."
        }
        data={projects.filter((p) => p.type === "WRITING")}
      />
      <Photography />
      <GraphicDesign />
      <Footer />
    </div>
  );
}

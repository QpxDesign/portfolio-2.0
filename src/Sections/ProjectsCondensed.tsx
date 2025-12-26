import { CondensedProjectData } from "../structs/CondensedProjectData";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { FaArrowTurnUp } from "react-icons/fa6";

interface ProjectsCondensedProps {
  header: String;
  subheader: String;
  //  icon: String;
  background: String;
  data: Array<CondensedProjectData>;
}

export default function ProjectsCondensed(props: ProjectsCondensedProps) {
  return (
    <section
      className="vstack projects-condensed"
      style={{
        width: "100%",
        alignItems: "flex-start",
        backgroundColor: "" + props.background,
      }}
    >
      <h1
        style={{ padding: ".2em 1em", paddingTop: ".75em", fontSize: "1.7rem" }}
      >
        {props.header}
      </h1>
      <h2
        style={{
          padding: "0em 1.2em",
          fontSize: "1.3rem",
          fontWeight: 500,
          marginBottom: ".75em",
        }}
      >
        {props.subheader}
      </h2>
      <div
        style={{
          display: "flex",
          margin: "0 auto",
          width: "95%",
          justifyContent: "flex-start",
          gap: "1em",
          overflowX: "scroll",
          paddingBottom: "2em",
        }}
      >
        {props.data.map((p: CondensedProjectData, index: number) => {
          return (
            <div
              onClick={() => {
                window.open(p.link);
              }}
              className="vstack"
              style={{
                cursor: "pointer",
                minWidth: "20em",
                background: "rgba(255, 255, 255, 0.3)",
                padding: ".5em 1em",
                borderRadius: "1em",
                paddingBottom: "1em",
                justifyContent: "space-around",
                flex: 1,
              }}
            >
              <img
                src={"Assets/project-images/" + p.name + ".png"}
                style={{ width: "50%", objectFit: "contain" }}
              />
              <h1
                style={{
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  textAlign: "center",
                }}
              >
                {p.title}
              </h1>
              <h2
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 200,
                  textAlign: "center",
                }}
              >
                {p.blurb}
              </h2>
              <div
                className="hstack"
                style={{
                  width: "100%",
                  flexWrap: "wrap",
                  gap: "1em",
                  paddingBottom: ".5em",
                  marginTop: ".75em",
                }}
              >
                {p.technologies !== undefined
                  ? p.technologies.map((t) => (
                      <img
                        src={"Assets/logos/" + t + ".png"}
                        style={{ height: "3em" }}
                      />
                    ))
                  : ""}
              </div>
              <a style={{ fontSize: "1.2em", marginTop: "1em" }} href={p.link}>
                View Project <FaArrowTurnUp />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}

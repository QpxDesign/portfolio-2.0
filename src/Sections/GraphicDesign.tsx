import graphics_key from "../Assets/graphics_key.json";
import { FaArrowRightLong } from "react-icons/fa6";

export default function GraphicDesign() {
  return (
    <>
      <section
        className="vstack projects-condensed"
        style={{
          width: "100%",
          alignItems: "flex-start",
          backgroundColor: "#d6d3d1",
          color: "black",
        }}
      >
        <h1
          style={{
            padding: ".2em 1em",
            paddingTop: ".75em",
            fontSize: "1.7rem",
          }}
        >
          Graphic Design
        </h1>
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
          {graphics_key.slice(0, 5).map((g) => {
            return (
              <div
                data-image-label={g.name}
                className="vstack graphic-display"
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
                  src={"Assets/graphics/" + g.filename}
                  style={{
                    width: "100%",
                    objectFit: "contain",
                    maxHeight: "20em",
                  }}
                />
              </div>
            );
          })}
          <div
            onClick={() => {
              window.open("/graphics-gallery");
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
            <a href="/graphics-gallery" className="vstack">
              <FaArrowRightLong fontSize={"7em"} />
              <h1 style={{ fontSize: "2em" }}>See More</h1>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

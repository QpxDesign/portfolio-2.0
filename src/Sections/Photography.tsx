import { FaArrowRightLong } from "react-icons/fa6";

export default function Photography() {
  const photos = [1, 2, 3, 4, 5, 6, 7];
  return (
    <>
      <section
        className="vstack projects-condensed"
        style={{
          width: "100%",
          alignItems: "flex-start",
          backgroundColor: "#a8a29e",
        }}
      >
        <h1
          style={{
            padding: ".2em 1em",
            paddingTop: ".75em",
            fontSize: "1.7rem",
          }}
        >
          Photography
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
          {photos.slice(0, 5).map((g) => {
            return (
              <div
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
                  src={"Assets/photos/image" + g + ".webp"}
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
              window.open("/photography");
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
            <a href="/photography" className="vstack">
              <FaArrowRightLong fontSize={"7em"} />
              <h1 style={{ fontSize: "2em" }}>See More</h1>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

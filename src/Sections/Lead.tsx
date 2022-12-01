import React from "react";
import Cycle from "../Components/Cycle";
import { BsArrowDown } from "react-icons/bs";

export default function Lead() {
  function scroll() {
    window.scrollTo({ left: 0, top: window.innerHeight, behavior: "smooth" });
  }
  return (
    <section className="lead">
      <div className="welcomemessage-wrapper">
        <div className="greeting">
          <Cycle
            values={[
              "hi",
              "hello",
              "howdy",
              "welcome",
              "greetings",
              "salutations",
              "hiya",
              "good day",
            ]}
            interval={5000}
            prefix={""}
            suffix={", i'm quinn."}
            textcolor={"white"}
          />
        </div>
        <div className="job-title">
          <Cycle
            prefix={"i'm a "}
            values={[
              "web developer",
              "photographer",
              "writer",
              "graphic designer",
              "skateboarder",
              "student",
              "human",
            ]}
            interval={5000}
            suffix={""}
            textcolor={"white"}
          />
        </div>
      </div>
      <button
        style={{
          marginTop: "10vh",
          bottom: "2em",
          padding: ".5em 2em",
          borderRadius: "10000rem",
          border: "none",
          fontSize: "1em",
          background: "#e2e8f0",
          fontFamily: "Basic-sans, sans",
        }}
        onClick={() => scroll()}
      >
        <BsArrowDown />
        Start The Party 🎉{" "}
      </button>
    </section>
  );
}

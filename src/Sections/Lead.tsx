import React from "react";
import Header from "../Components/Header";
import Cycle from "../Components/Cycle";
import {BsArrowDown} from "react-icons/bs"

export default function Lead() {
  function scroll(){
    window.scrollTo({left: 0, top: window.innerHeight, behavior:"smooth"})
  }
  return (
    <section
      style={{
        background:
          "radial-gradient(at 64% 59%,#e34f6a 0,transparent 50%),radial-gradient(at 39% 30%,#fe897c 0,transparent 50%),radial-gradient(at 16% 50%,#f68dc5 0,transparent 50%),radial-gradient(at 51% 27%,#e84f59 0,transparent 50%),radial-gradient(at 62% 91%,#5cd5f0 0,transparent 50%),radial-gradient(at 19% 8%,#5defa3 0,transparent 50%),radial-gradient(at 91% 13%,#cdf193 0,transparent 50%)",
      }}
    >
      <Header />
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
      <button style={{
        position:"absolute",
        bottom:"2em",
        padding:".5em 2em",
        borderRadius:"10000rem",
        border: "none", 
        fontSize:"1em",
        background: "#e2e8f0",
        fontFamily:"Basic-sans, sans"
      }} onClick={() => scroll()}><BsArrowDown/>Start The Party 🎉 </button>
    </section>
  );
}

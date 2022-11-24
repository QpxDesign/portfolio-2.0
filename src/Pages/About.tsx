import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import SelfImage from "../Assets/self.jpeg";
import GithubLogo from "../Assets/logos/Github.png";
import LinkedInLogo from "../Assets/logos/LinkedIn.png";

export default function About() {
  return (
    <>
      <Header activePage="aboutme" />
      <div className="page-wrapper">
        <h1 className="center" style={{ marginTop: ".5em" }}>
          About Me
        </h1>
        <div
          style={{
            display: "flex",
            width: "90%",
            marginRight: "auto",
            marginLeft: "auto",
            gap: ".5em",
            marginTop: ".5em",
            justifyContent: "center",
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}
        >
          <div className="h-stack">
            <img
              src={SelfImage}
              alt="me"
              style={{
                objectFit: "contain",
                width: "20em",
                marginBottom: ".75em",
                borderRadius: "1em",
              }}
            />
            <div className="logos-wrapper">
              <a href="https://github.com/qpxdesign">
                <img src={GithubLogo} />
              </a>
              <a href="https://www.linkedin.com/in/quinn-patwardhan-3b32441b4/">
                <img src={LinkedInLogo} />
              </a>
            </div>
          </div>
          <p
            style={{
              width: "90%",
              marginRight: "auto",
              marginLeft: "auto",
              maxWidth: "900px",
              fontSize: "1.3em",
            }}
          >
            I'm a high school junior in Washington, DC. My hobbies include
            skateboarding, photography, graphic design, and programming. I am a
            die-hard Ravens fan and an environmentalist. I play ultimate
            frisbee. I am an apsiring Software Engineer and Comedy Writer. See
            below for some of what i'm to in school:
            <ul style={{ marginTop: ".3em" }}>
              <li>Graphics Editor of School Newspaper</li>
              <li>Graphics Editor & Head of School Satirical Newspaper</li>
              <li>Co-Head of CS Club</li>
              <li>Completor of Bebras Computing Challenge</li>
              <li>Member of Varisty Ultimate Frisbee Team</li>
            </ul>
          </p>
        </div>
      </div>{" "}
      <Footer />
    </>
  );
}

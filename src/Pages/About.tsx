import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import SelfImage from "../Assets/self.jpeg";
import GithubLogo from "../Assets/Github.png";
import LinkedInLogo from "../Assets/LinkedIn.png";

export default function About() {
  const skills = [
    "JavaScript",
    "ReactJS",
    "Typescript",
    "CSS",
    "HTML",
    "Git",
    "http",
    "Node",
    "Python",
    "Java",
    "nginx",
    "Linux",
    "ubuntu",
    "AdobeIllustrator",
    "AdobePhotoshop",
    "AdobeLightroom",
  ];

  return (
    <>
      <Header />
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
          <div
            className="contents-wrapper"
            style={{
              width: "90%",
              marginRight: "auto",
              marginLeft: "auto",
              maxWidth: "900px",
              fontSize: "1.3em",
              marginBottom: "1em",
            }}
          >
            <p>
              I'm a high school junior in Washington, DC. My hobbies include
              skateboarding, photography, graphic design, and programming. I am
              a die-hard Ravens fan and an environmentalist. I play ultimate
              frisbee. I am an apsiring Software Engineer and Comedy Writer. See
              below for some of what i'm to in school:
            </p>
            <ul style={{ marginTop: ".3em", fontFamily: "Basic-sans, sans" }}>
              <li>Graphics Editor of School Newspaper</li>
              <li>Graphics Editor & Head of School Satirical Newspaper</li>
              <li>Co-Head of CS Club</li>
              <li>Completor of Bebras Computing Challenge</li>
              <li>Member of Varisty Ultimate Frisbee Team</li>
            </ul>
            <p>
              I coded this wesbite 100% by hand in React using Typescript, NPM,
              vanilla CSS and HTML. See below for all modules I used:
            </p>
            <ul style={{ marginTop: ".3em", fontFamily: "Basic-sans, sans" }}>
              <li>
                <a
                  href="https://github.com/react-icons/react-icons"
                  style={{ color: "#E91E63" }}
                >
                  React Icons
                </a>
              </li>
              <li>
                <a
                  href="https://v5.reactrouter.com/web/guides/quick-start"
                  style={{ color: "#E91E63" }}
                >
                  React Router Dom
                </a>
              </li>
              <li>
                <a
                  href="https://create-react-app.dev/"
                  style={{ color: "#E91E63" }}
                >
                  Create-React-App
                </a>
              </li>
            </ul>
            <h1 className="center" style={{ marginTop: ".5em" }}>
              Skills:
            </h1>
            <div className="logos-wrapper">
              {skills.map((skill, index) => {
                return (
                  <img src={"Assets/logos/" + skill + ".png"} alt={skill} />
                );
              })}
            </div>
          </div>
        </div>
      </div>{" "}
      <Footer />
    </>
  );
}

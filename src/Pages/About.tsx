import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import SelfImage from "../Assets/self.jpeg";
import GithubLogo from "../Assets/Github.png";
import LinkedInLogo from "../Assets/LinkedIn.png";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

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
    "mysql",
    "csharp",
    "swift",
    "AdobeIllustrator",
    "AdobePhotoshop",
    "AdobeLightroom",
  ];

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>about me</title>
        <meta
          name="description"
          content="see a curated collection of quinn's work, including his photography, graphic design and web development. quinn patwardhan is a creative and software developer based in washington, dc"
        />
      </Helmet>
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
            gap: "1.5em",
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
              maxWidth: "900px",
              fontSize: "1.3em",
              marginBottom: "1em",
            }}
          >
            <p>
              I'm a high school junior in Washington, DC. My hobbies include
              skateboarding, photography, graphic design, 3D printing, and
              programming. I am a die-hard Ravens fan and an environmentalist. I
              play ultimate frisbee. I am an apsiring Software Engineer and
              Comedy Writer. See below for some of what i'm up to in and out of
              school:
            </p>
            <ul style={{ marginTop: ".3em", fontFamily: "Basic-sans, sans" }}>
              <li>Graphics Editor of School Newspaper</li>
              <li>Editor-in-Chief of School Satirical Newspaper</li>
              <li>Founder, Co-Head, & Lead Developer of CS Club</li>
              <li>Member of Varisty Ultimate Frisbee Team</li>
              <li>
                Intern at Georgetown University Department of Computer Science's
                InfoSense Artificial Intelligence Research Lab{" "}
              </li>
              <li>
                I've appeared in the{" "}
                <a
                  href="https://www.nytimes.com/2023/07/08/business/student-loans-college-admissions-supreme-court.html"
                  style={{ color: "#E91E63" }}
                >
                  New York Times
                </a>
              </li>
            </ul>
            <p>
              I built this website 100% by hand in React using Typescript, NPM,
              MySQL, Express.js, vanilla CSS and HTML/JSX. My goal when making
              this site was to demonstrate by web development skills by using as
              few modules as I could, and to develop as much of my site by
              myself. You can find the source code on my{" "}
              <a
                href="https://github.com/qpxdesign/portfolio-2.0"
                style={{ color: "#E91E63" }}
              >
                Github
              </a>
              . Adhering to this, principal, I also{" "}
              <Link
                to="/blog/post/3b5ae772-88d2-99ae-ef74-a285dea56b05"
                style={{ color: "#E91E63" }}
              >
                self-host my websites on my own Linux server
              </Link>
              . See below for all of the modules I used:
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
              <li>
                <a
                  href="https://www.npmjs.com/package/bcrypt"
                  style={{ color: "#E91E63" }}
                >
                  Bcrypt
                </a>
              </li>
              <li>
                <a
                  href="https://www.npmjs.com/package/mysql2"
                  style={{ color: "#E91E63" }}
                >
                  mysql2
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

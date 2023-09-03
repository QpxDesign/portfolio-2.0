import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import { ValidateLogin } from "../Helpers/ValidateLogin";
import { useParams } from "react-router-dom";
import { CustomAlert } from "../Helpers/CustomAlert";
import { Helmet } from "react-helmet";

export default function Login() {
  const [mode, setMode] = useState("Login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  var { des }: any = useParams();
  if (des === undefined) {
    des = "";
  }
  function storeLogin(allowLogin: Boolean, token: String, username: String) {
    if ((allowLogin && token !== undefined) || mode === "Sign Up") {
      let data = {
        username: username,
        token: token,
        timestamp: Date.now(),
      };
      localStorage.setItem("user", JSON.stringify(data));
      window.location.pathname = "/" + des.replaceAll("+", "/");
    } else {
      CustomAlert(
        "Couldn't Log You In",
        "We couldn't find a user with that username/password.",
        "Okay"
      );
    }
  }
  useEffect(() => {
    ValidateLogin(des).then((r) => {
      if (r) {
        window.location.pathname = des;
      }
    });
  }, []);
  function HandleLogin() {
    let data = {
      Username: username,
      Password: password,
    };
    if (mode === "Login") {
      fetch("https://api.quinnpatwardhan.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => storeLogin(data.allowLogin, data.token, username));
    }
    if (mode === "Sign Up") {
      if (!validPasswordChecker()) {
        CustomAlert(
          "invalid password",
          "Passwords must be inbetween 8 and 32 characters in length and contain at least one capital letter and one lowercase number",
          "Okay"
        );
        return;
      }
      fetch("https://api.quinnpatwardhan.com/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status !== undefined) {
            storeLogin(data.status === "okay", data.token, username);
          } else if (data.ERROR_FOUND) {
            CustomAlert("Couldn't Create Account", data.ERROR_MESSAGE, "Okay");
          } else {
            CustomAlert("Unknown Error", "We don't know what happened", "Okay");
          }
        });
    }
  }
  function validPasswordChecker() {
    if (mode === "Sign Up") {
      if (password.length < 8 || password.length > 32) return false;
      if (
        password.toLowerCase() === password ||
        password.toUpperCase() === password
      )
        return false;
      return true;
    } else {
      return "dontcheck";
    }
  }
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>login</title>
        <meta
          name="description"
          content="see a curated collection of quinn's work, including his photography, graphic design and web development. quinn patwardhan is a creative and software developer based in washington, dc"
        />
      </Helmet>
      <Header />
      <h1
        className="center"
        style={{
          marginTop: ".5em",
          fontFamily: "Source Serif Pro",
          fontSize: "2.5em",
          color: "var(--textcolor)",
        }}
      >
        {mode}
      </h1>
      <div className="login-wrapper">
        <label
          style={{ marginBottom: "1em" }}
          className={mode === "Sign Up" ? "hide" : ""}
        >
          Don't have an account?{" "}
          <span
            onClick={() => setMode("Sign Up")}
            style={{ color: "blue", cursor: "pointer" }}
            role="link"
          >
            Sign Up
          </span>
        </label>{" "}
        <label
          style={{ marginBottom: "1em" }}
          className={mode === "Sign Up" ? "" : "hide"}
        >
          Have an account?{" "}
          <span
            onClick={() => setMode("Login")}
            style={{ color: "blue", cursor: "pointer" }}
            role="link"
          >
            Login
          </span>
        </label>
        <label>Username</label>
        <input
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          value={username}
        />
        <label>Password</label>
        <div className="h-stack">
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            className={
              validPasswordChecker() !== "dontcheck"
                ? validPasswordChecker()
                  ? "valid"
                  : "invalid"
                : ""
            }
          />
          <AiFillCheckCircle
            className={
              validPasswordChecker() !== "dontcheck"
                ? validPasswordChecker()
                  ? "check"
                  : "hide"
                : "hide"
            }
          />
          <AiFillCloseCircle
            className={
              validPasswordChecker() !== "dontcheck"
                ? validPasswordChecker()
                  ? "hide"
                  : "cross"
                : "hide"
            }
          />
        </div>
        <button
          className="cool-purple-button"
          onClick={HandleLogin}
          style={{ marginTop: ".5em" }}
        >
          {mode}
        </button>
      </div>
    </div>
  );
}

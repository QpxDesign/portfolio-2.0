import React, { useState } from "react";
import Header from "../Components/Header";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";

interface LoginProp {
  destination: String;
}

export default function Login(props: LoginProp) {
  const [mode, setMode] = useState("Login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function validateLogin(allowLogin: Boolean, token: String, username: String) {
    if (allowLogin) {
      let data: any = {
        username: username,
        token: token,
        timestamp: Date.now(),
      };
      localStorage.setItem("user", JSON.stringify(data));
      window.location.pathname = "/" + props.destination;
    } else {
      window.location.reload();
    }
  }
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
        .then((data) => validateLogin(data.allowLogin, data.token, username));
    }
    if (mode === "Sign Up") {
      if (!validPasswordChecker()) {
        alert("invalid password");
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
        .then((data) => validateLogin(data.allowLogin, data.token, username));
    }
  }
  function validPasswordChecker() {
    if (mode === "Sign Up") {
      if (password.length < 8) return false;
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

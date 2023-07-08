import React, { useState, useEffect } from "react";
import { BsPersonFill } from "react-icons/bs";
import { ValidateLogin } from "../Helpers/ValidateLogin";
import uuid from "react-uuid";
import { useParams } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { FormatTime } from "../Helpers/FormatTime";
import { CustomAlert } from "../Helpers/CustomAlert";

export default function Comments() {
  const { id } = useParams();

  const [commentText, setCommentText] = useState("");
  const [res, setRes] = useState([]);
  const [loaded, setLoaded] = useState(false);
  function getUsername() {
    try {
      return JSON.parse(
        localStorage.getItem("user") || "{username:'Not Signed In'}"
      ).username;
    } catch (e) {
      return "Not Signed In";
    }
  }
  async function handlepost() {
    if (commentText.length <= 1) {
      CustomAlert(
        "Too short",
        "Comments must have a length greater than 1.",
        "Okay"
      );
      return false;
    }
    ValidateLogin("/blog/post/" + id).then((r) => {
      if (r) {
        let data = {
          PostID: id,
          CommentID: uuid(),
          CommentText: commentText,
          Username: JSON.parse(localStorage.getItem("user") ?? "").username,
          Token: JSON.parse(localStorage.getItem("user") ?? "").token,
        };
        fetch("https://api.quinnpatwardhan.com/send-comment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify(data),
        });
        window.location.reload();
      } else {
        window.location.pathname = "/login/blog+post+" + id;
      }
    });
  }
  async function handleCommentDelete(c: String) {
    let data = {
      CommentID: c,
      Username: JSON.parse(localStorage.getItem("user") ?? "").username,
      Token: JSON.parse(localStorage.getItem("user") ?? "").token,
    };

    await fetch("https://api.quinnpatwardhan.com/delete-comment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    });
    window.location.reload();
  }
  async function FetchComments() {
    let data = {
      PostID: id,
    };
    await fetch("https://api.quinnpatwardhan.com/get-comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((r) => {
        setRes(r);
        setLoaded(true);
      });
  }
  useEffect(() => {
    FetchComments();
  }, []);
  return (
    <div className="comment-wrapper">
      <h1 style={{ marginBottom: "-.5em" }}>Comments</h1>
      <div className="post-comment-wrapper">
        <textarea
          onChange={(e) => setCommentText(e.target.value)}
          value={commentText}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          <h5>
            <BsPersonFill /> {getUsername()}
          </h5>
          <button className="cool-purple-button" onClick={handlepost}>
            Post
          </button>
        </div>
      </div>
      <hr />
      {loaded
        ? res !== undefined
          ? res.map((comment: any) => {
              return (
                <div className="comment">
                  <div className="user-info">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        marginRight: "auto",
                        alignItems: "center",
                        gap: ".25em",
                      }}
                    >
                      <FaUserCircle className="icon" />
                      <h5>{comment.Username}</h5>{" "}
                      <FaTrashAlt
                        color="red"
                        style={{
                          marginLeft: ".5em",
                          fontSize: "1em",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          handleCommentDelete(comment.CommentID);
                        }}
                        className={
                          (getUsername() === comment.Username) === true
                            ? "show"
                            : "hide"
                        }
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        marginRight: "auto",
                        alignItems: "center",
                        gap: ".25em",
                      }}
                    >
                      {FormatTime(comment.Timestamp)}
                    </div>
                    <p>{comment.CommentText}</p>
                  </div>
                </div>
              );
            })
          : null
        : "loading"}
    </div>
  );
}

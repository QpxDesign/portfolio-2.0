import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import { FaTrashAlt } from "react-icons/fa";
import { RiEditBoxFill } from "react-icons/ri";
import BlogEditor from "./BlogEditor";

export default function EditPosts() {
  const [res, setRes]: Array<any> = useState([]);
  const [loaded, setLoaded]: any = useState(false);
  const [showEdit, setShowEdit]: any = useState(false);
  const [postID, setPostID]: any = useState("");

  async function FetchPosts() {
    await fetch("https://api.quinnpatwardhan.com/get-blog-posts")
      .then((res) => res.json())
      .then((r) => {
        setRes(r);
        setLoaded(true);
      });
  }
  useEffect(() => {
    FetchPosts();
  }, []);
  async function handlePostDelete(postID: String) {
    console.log("a");
    let data = {
      PostID: postID,
      Username: JSON.parse(localStorage.getItem("user") ?? "").username,
      Token: JSON.parse(localStorage.getItem("user") ?? "").token,
    };

    await fetch("https://api.quinnpatwardhan.com/delete-post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    });
    window.location.reload();
  }
  function validateUserLoggedIn() {
    var d: any = localStorage.getItem("user");
    d = JSON.parse(d);
    console.log(d);

    if (d == null) {
      window.location.pathname = "/login+des=EditPosts";
      return false;
    }
    let data = { token: d.token, Username: d.username };
    fetch("https://api.quinnpatwardhan.com/validate-token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((r) => {
        console.log(r);
        if (!r.auth) {
          window.location.pathname = "/login+des=EditPosts";
        }
        return r.auth;
      });
    return true;
  }
  function getPostFromId() {
    return res.find((r: any) => r.PostID === postID);
  }
  if (validateUserLoggedIn() == true)
    if (!showEdit) {
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
            Edit Blog Posts
          </h1>
          <div className="posts-wrapper" style={{ color: "var(--textcolor)" }}>
            {loaded
              ? res !== undefined && res.length !== 0 && loaded
                ? res.map((post: any) => {
                    return (
                      <div className={"post"}>
                        <img src={post.PostThumbnailLink} />
                        <h1>{post.PostTitle}</h1>
                        <h2>{post.AuthorName}</h2>
                        <h5>{post.timestamp}</h5>
                        <FaTrashAlt
                          onClick={() => handlePostDelete(post.PostID)}
                          style={{
                            position: "absolute",
                            right: 0,
                            bottom: 0,
                            margin: "1em",
                            fontSize: "1.5em",
                            color: "red",
                            cursor: "pointer",
                            backgroundColor: "var(--headertextcolor)",
                          }}
                        />{" "}
                        <RiEditBoxFill
                          onClick={() => {
                            setPostID(post.PostID);
                            setShowEdit(true);
                          }}
                          style={{
                            position: "absolute",
                            right: 0,
                            bottom: 0,
                            margin: ".75em 2.5em",
                            fontSize: "1.75em",
                            color: "black",
                            backgroundColor: "var(--headertextcolor)",
                          }}
                        />
                      </div>
                    );
                  })
                : null
              : "loading..."}
          </div>
        </div>
      );
    } else {
      if (getPostFromId() !== undefined) {
        return (
          <BlogEditor
            postTitle={getPostFromId().PostTitle}
            Tags={getPostFromId().PostTags}
            Blurb={getPostFromId().PostBlurb}
            Post={getPostFromId().PostHTML}
            ImageURL={getPostFromId().PostThumbnailLink}
            PostID={postID}
            Mode={"edit"}
          />
        );
      } else {
        return <div>error</div>;
      }
    }
  else {
    return <div>Need to login</div>;
  }
}

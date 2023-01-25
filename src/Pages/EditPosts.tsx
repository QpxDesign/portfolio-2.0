import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import { FaTrashAlt } from "react-icons/fa";
import { RiEditBoxFill } from "react-icons/ri";
import BlogEditor from "./BlogEditor";
import { ValidateLogin } from "../Helpers/ValidateLogin";

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
  function getPostFromId() {
    return res.find((r: any) => r.PostID === postID);
  }
  function formatTime(s: any) {
    if (s === null || s === undefined) return;
    s = parseInt(s);
    const date = new Date(s);
    const dateFormat = date.toLocaleDateString();
    const timeFormat = date.toLocaleTimeString();
    return dateFormat + " - " + timeFormat;
  }
  if (ValidateLogin("/login+des=EditPosts") == true)
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
                        <h5>{formatTime(post.timestamp)}</h5>
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
                            color: "var(--backgroudcolor)"
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
    window.location.pathname = "/login+des=EditPosts"
    return <div>Need to login</div>;
  }
}

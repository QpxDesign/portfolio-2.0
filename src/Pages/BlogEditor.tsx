import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import uuid from "react-uuid";

interface EditProps {
  postTitle: String;
  Tags: String;
  Blurb: String;
  Post: String;
  ImageURL: String;
  Mode: String;
  PostID: String;
}
export default function BlogEditor(props: EditProps) {
  const [postTitle, setpostTitle]: any = useState(props.postTitle);
  const [Tags, setTags]: any = useState(props.Tags);
  const [Blurb, setBlurb]: any = useState(props.Blurb);
  const [Post, setPost]: any = useState(props.Post);
  const [loggedIn, setLoggedIn] = useState(false);
  const [ImageURL, setImageURL]: any = useState(props.ImageURL);
  function validateUserLoggedIn() {
    if (loggedIn) return true;
    setLoggedIn(true);
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
        } else {
          setLoggedIn(true);
        }
        return r.auth;
      });
    return true;
  }
  async function handleFormSubmisson() {
    if (props.Mode === "") {
      let data = {
        PostId: uuid(),
        AuthorName: "Quinn Patwardhan",
        PostTitle: postTitle,
        PostBlurb: Blurb,
        PostTags: Tags,
        PostSlug: "/blog/post/" + encodeURIComponent(postTitle),
        PostThumbnailLink: ImageURL,
        PostHTML: Post,
        timestamp: Date.now(),
      };
      await fetch("https://api.quinnpatwardhan.com/send-post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(data),
      });

      document.location.pathname = "/blog";
    }

    if (props.Mode === "edit") {
      let data = {
        PostId: props.PostID,
        AuthorName: "Quinn Patwardhan",
        PostTitle: postTitle,
        PostBlurb: Blurb,
        PostTags: Tags,
        PostSlug: "/blog/post/" + encodeURIComponent(postTitle),
        PostThumbnailLink: ImageURL,
        PostHTML: Post,
        timestamp: Date.now(),
      };
      await fetch("https://api.quinnpatwardhan.com/edit-post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(data),
      });

      document.location.pathname = "/blog";
    }
    setpostTitle("");
    setBlurb("");
    setTags("");
    setPost("");
    setImageURL("");
  }

  if (validateUserLoggedIn() == true) {
    return (
      <div style={{ backgroundColor: "var(--backgroundcolor" }}>
        <Header />
        <div className="blog-editor-wrapper">
          <div className="form-item">
            <label>
              Image (paste <a href="https://unsplash.com/">Upslash</a> Link)
            </label>
            <img
              src={ImageURL}
              className={ImageURL.length > 10 ? "show" : "hide"}
            />
            <input
              onChange={(e) => {
                setImageURL(e.target.value);
              }}
              value={ImageURL}
              type="url"
            />
          </div>{" "}
          <div className="form-item">
            <label>Title</label>
            <input
              onChange={(e) => setpostTitle(e.target.value)}
              value={postTitle}
            />
          </div>{" "}
          <div className="form-item">
            <label>Tags (Seperate with commas):</label>
            <input onChange={(e) => setTags(e.target.value)} value={Tags} />
          </div>{" "}
          <div className="form-item">
            <label>Blurb</label>
            <textarea
              onChange={(e) => setBlurb(e.target.value)}
              value={Blurb}
            />
          </div>{" "}
          <div className="form-item">
            <label>Post</label>
            <textarea
              className="big"
              onChange={(e) => setPost(e.target.value)}
              value={Post}
            />
          </div>{" "}
          <button onClick={handleFormSubmisson} className="cool-purple-button">
            Post
          </button>
        </div>
        <Footer />
      </div>
    );
  } else {
    return null;
  }
}

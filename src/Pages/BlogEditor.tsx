import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import uuid from "react-uuid";
import { ValidateLogin } from "../Helpers/ValidateLogin";

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
  function handleImageUpload() {
    let input = document.createElement("input");
    input.type = "file";
    console.log("nerd");
    input.click();
    input.onchange = (_) => {
      // you can use this method to get file and perform respective operations
      // let files = Array.from(input.files);
      let files = input.files;
      if (files?.length == 1) {
        const formData = new FormData();

        formData.append("file", files[0]);
        console.log(files[0]);

        formData.append(
          "username",
          JSON.parse(
            localStorage.getItem("user") ?? "{'username':'nerdfailhahayls'}"
          ).username
        );
        formData.append(
          "token",
          JSON.parse(
            localStorage.getItem("user") ?? "{'token':'nerdfailhahayls'}"
          ).token
        );

        fetch("https://media.quinnpatwardhan.com/upload-image", {
          method: "POST",
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
          body: formData,
        })
          .then((r) => r.json())
          .then((r: any) => {
            console.log(r);
            setImageURL(r.url);
          });
      }
    };
  }
  async function handleFormSubmisson() {
    if (props.Mode === "" && localStorage.getItem("user") !== null) {
      let data = {
        PostID: uuid(),
        AuthorName: "Quinn Patwardhan",
        PostTitle: postTitle,
        PostBlurb: Blurb,
        PostTags: Tags,
        PostSlug: "/blog/post/" + encodeURIComponent(postTitle),
        PostThumbnailLink: ImageURL,
        PostHTML: Post,
        timestamp: Date.now(),
        Username: JSON.parse(localStorage.getItem("user") ?? "").username,
        Token: JSON.parse(localStorage.getItem("user") ?? "").token,
      };

      await fetch("https://api.quinnpatwardhan.com/send-post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(data),
      });

      document.location.pathname = "/edit-posts";
    }

    if (props.Mode === "edit") {
      let data = {
        PostID: props.PostID,
        AuthorName: "Quinn Patwardhan",
        PostTitle: postTitle,
        PostBlurb: Blurb,
        PostTags: Tags,
        PostSlug: "/blog/post/" + encodeURIComponent(postTitle),
        PostThumbnailLink: ImageURL,
        PostHTML: Post,
        timestamp: Date.now(),
        Username: JSON.parse(localStorage.getItem("user") ?? "").username,
        Token: JSON.parse(localStorage.getItem("user") ?? "").token,
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

  if (ValidateLogin("/login+des=BlogEditor") == true) {
    return (
      <div style={{ backgroundColor: "var(--backgroundcolor" }}>
        <Header />
        <div className="blog-editor-wrapper">
          <div className="form-item">
            <label style={{ display: "flex" }}>
              <span>
                Image (paste{" "}
                <a
                  href="https://unsplash.com/"
                  style={{ textDecoration: "underline" }}
                >
                  Upslash
                </a>{" "}
                Link or{" "}
              </span>
              <a
                style={{ marginLeft: ".5em", textDecoration: "underline" }}
                onClick={() => handleImageUpload()}
              >
                upload an image
              </a>
              )
            </label>
            <img
              src={ImageURL}
              className={(ImageURL ?? []).length > 10 ? "show" : "hide"}
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
    window.location.pathname = "/login+des=BlogEditor";
    return null;
  }
}

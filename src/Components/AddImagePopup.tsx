import React, { useState } from "react";

interface AddImagePopupProps {
  mode: string;
}

export default function AddImagePopup(props: AddImagePopupProps) {
  const [ImageURL, setImageURL] = useState("");
  const [imageTitle, setImageTitle] = useState("");
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
  async function handleSubmit() {
    let data = {
      Username: JSON.parse(localStorage.getItem("user") ?? "").username,
      Token: JSON.parse(localStorage.getItem("user") ?? "").token,
      imageURL: ImageURL,
      title: imageTitle,
    };

    await fetch(`https://api.quinnpatwardhan.com/add-${props.mode}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    })
      .then((r) => r.json())
      .then((r2) => {
        console.log(r2);
        window.location.reload();
      });
  }
  return (
    <div
      style={{
        position: "fixed",
        zIndex: 100,
        background: "red",
        top: "50%",
        left: "50%",
        padding: ".5em 2em",
        backgroundColor: "#d4d4d8",
        width: "min(80%,40em)",
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="blog-editor-wrapper">
        <h1>Add an Image: </h1>
        <div className="form-item">
          <label style={{ display: "flex" }}>
            <span>
              Image (paste{" "}
              <a
                href="https://unsplash.com/"
                style={{ textDecoration: "underline", display: "inline" }}
              >
                Upslash
              </a>{" "}
              Link or
            </span>
            <a
              style={{
                marginLeft: ".5em",
                textDecoration: "underline",
                display: "inline",
              }}
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
            onChange={(e) => setImageTitle(e.target.value)}
            value={imageTitle}
          />
        </div>{" "}
      </div>{" "}
      <button
        className="cool-purple-button"
        onClick={() => {
          handleSubmit();
        }}
      >
        Post
      </button>
    </div>
  );
}

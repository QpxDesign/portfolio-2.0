import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { CustomAlert } from "../Helpers/CustomAlert";

export default function Contact() {
  const [messageTitle, setMessageTitle] = useState("");
  const [messageName, setMessageName] = useState("");
  const [messageBody, setMessageBody] = useState("");
  async function handleSendContactField() {
    let data = {
      author: messageName,
      title: messageTitle,
      messageBody: messageBody,
    };

    await fetch("https://api.quinnpatwardhan.com/send-contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    }).then(() => {
      CustomAlert("Message Sent.", "", "close");
      setMessageTitle("");
      setMessageName("");
      setMessageBody("");
    });
  }
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>contact me</title>
        <meta
          name="description"
          content="see a curated collection of quinn's work, including his photography, graphic design and web development. quinn patwardhan is a creative and software developer based in washington, dc"
        />
      </Helmet>
      <Header />
      <div className="page-wrapper">
        <h1 className="center" style={{ marginTop: ".5em" }}>
          Contact Me
        </h1>
        <div className="blog-editor-wrapper">
          <div className="form-item">
            <label>Title</label>
            <input
              onChange={(e) => setMessageTitle(e.target.value)}
              value={messageTitle}
            />
          </div>{" "}
          <div className="form-item">
            <label>Name</label>
            <input
              onChange={(e) => setMessageName(e.target.value)}
              value={messageName}
            />
          </div>{" "}
          <div className="form-item">
            <label>Post</label>
            <textarea
              className="big"
              style={{ height: "40vh" }}
              onChange={(e) => setMessageBody(e.target.value)}
              value={messageBody}
            />
          </div>{" "}
          <button
            onClick={() => handleSendContactField()}
            className="cool-purple-button"
            style={{ fontSize: "1.5em" }}
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
}

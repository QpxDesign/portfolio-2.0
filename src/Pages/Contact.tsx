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
        <div className="center" style={{fontWeight:"300"}}>
          <h2>Please email me: qroshan5 [a_t] gmail.com </h2>
        </div>
        </div>
    </>
  );
}

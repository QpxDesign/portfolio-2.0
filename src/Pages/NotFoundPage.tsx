import React from "react";
import Header from "../Components/Header";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

export default function NotFoundPage() {
  return (
    <>
      <div className="page-wrapper">
        <Header activePage="" />
        <h1
          style={{ textAlign: "center", fontSize: "4em", marginTop: ".25em" }}
        >
          Error 404 - Page Not Found
        </h1>
        <h3
          style={{
            paddingBottom: "5em",
            fontSize: "2em",
            maxWidth: "70%",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          Sorry, the page you are looking for does not exist. Please check the
          URL or go back to the{" "}
          <Link to="/" className="error-link">
            home page
          </Link>
        </h3>
      </div>
      <Footer />
    </>
  );
}

import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import { BsArrowLeft } from "react-icons/bs";
import { AiFillCloseCircle, AiFillPlusCircle } from "react-icons/ai";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import graphics_key from "../Assets/graphics_key.json";
import Footer from "../Components/Footer";
import { ValidateLogin } from "../Helpers/ValidateLogin";
import AddImagePopup from "../Components/AddImagePopup";

export default function PhotgraphyGallery() {
  const runtime = new Array(graphics_key.length + 1);
  for (let i = 0; i < runtime.length; i++) {
    runtime[i] = i;
  }
  const [graphics, setGraphics]: any = useState([]);
  const [showSlideshow, toggleSlideshow] = useState(false);
  const [showAddImageOption, setShowAddImageOption] = useState(false);
  const [activeImage, setActiveImage] = useState(1);
  const [showAddImagePopup, setShowAddImagePopup] = useState(false);
  function handleSlideShowBack() {
    if (activeImage === 1) {
      setActiveImage(runtime.length - 1);
    } else {
      setActiveImage(activeImage - 1);
    }
  }
  function handleSlideShowForward() {
    if (activeImage === runtime.length - 1) {
      setActiveImage(1);
      return;
    } else {
      setActiveImage(activeImage + 1);
    }
  }
  window.onscroll = () => {
    if (showSlideshow) {
      window.scroll(0, 0);
    }
  };
  useEffect(() => {
    fetch("https://api.quinnpatwardhan.com/get-graphics")
      .then((r) => r.json())
      .then((r2) => setGraphics(r2));
    if (ValidateLogin("dont-redirect")) {
      setShowAddImageOption(true);
    }
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        toggleSlideshow(false);
      }
    });
  }, []);
  function handleSlideshowClose() {
    toggleSlideshow(false);
  }
  return (
    <>
      {showAddImagePopup ? <AddImagePopup mode={"graphic"} /> : ""}
      <Header />
      <div
        className={
          showSlideshow ? "slideshow-wrapper show" : "slideshow-wrapper hide"
        }
      >
        <AiFillCloseCircle
          onClick={() => handleSlideshowClose()}
          className="close-icon"
          role="button"
        />
        <div className="nav-img-wrapper">
          <div className="backward-area" onClick={() => handleSlideShowBack()}>
            <IoIosArrowBack className="backward-button" />
          </div>
          <img
            style={{ objectFit: "contain" }}
            src={
              "Assets/graphics/" +
              graphics_key.find((x) => x.id === activeImage)?.filename
            }
          />
          <div
            className="forward-area"
            onClick={() => handleSlideShowForward()}
          >
            <IoIosArrowForward className="forward-button" />
          </div>
        </div>
      </div>
      <div className="page-wrapper" style={{ paddingBottom: "1em" }}>
        <div className="title-wrapper">
          <Link to="/">
            <BsArrowLeft className="back-icon" />
          </Link>
          <h1>Graphics</h1>
        </div>

        <div className="graphic-gallery">
          <div
            className="graphic"
            style={{ display: showAddImageOption ? "" : "none" }}
            onClick={() => {
              setShowAddImagePopup(true);
            }}
          >
            <AiFillPlusCircle style={{ fontSize: "4rem" }} />
          </div>
          {graphics.map((graphic: any, index: any) => {
            return (
              <img
                src={graphic.imageURL}
                className="graphic"
                onClick={() => {
                  setActiveImage(index + 1);
                  toggleSlideshow(true);
                }}
                onContextMenu={(e) => {
                  e.preventDefault();
                  return false;
                }}
                alt={graphic.title}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

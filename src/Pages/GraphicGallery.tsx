import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import { BsArrowLeft } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import graphics_key from "../Assets/graphics/graphics_key.json";

export default function PhotgraphyGallery() {
  console.log();
  const runtime = new Array(129);
  for (let i = 0; i < runtime.length; i++) {
    runtime[i] = i;
  }
  const [showSlideshow, toggleSlideshow] = useState(false);
  const [activeImage, setActiveImage] = useState(1);
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
      <Header activePage="" />
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
            src={require("../Assets/photos/image" + activeImage + ".webp")}
          />
          <div
            className="forward-area"
            onClick={() => handleSlideShowForward()}
          >
            <IoIosArrowForward className="forward-button" />
          </div>
        </div>
      </div>
      <div className="page-wrapper" style={{ backgroundColor: "#fff" }}>
        <div className="title-wrapper">
          <Link to="/">
            <BsArrowLeft className="back-icon" />
          </Link>
          <h1>Graphics</h1>
        </div>

        <div className="gallery-wrapper graphic-gallery">
          {graphics_key.map((graphic, index) => {
            return (
              <img
                src={require("../Assets/graphics/" + graphic.filename)}
                className="graphic"
                alt={graphic.name}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
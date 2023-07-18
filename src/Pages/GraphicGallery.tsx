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

export default function GraphicsGallery() {
  const [graphics, setGraphics]: any = useState([]);
  const [showSlideshow, toggleSlideshow] = useState(false);
  const [showAddImageOption, setShowAddImageOption] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const [showAddImagePopup, setShowAddImagePopup] = useState(false);
  function handleSlideShowBack() {
    if (activeImage === 0) {
      setActiveImage(graphics.length - 1);
    } else {
      setActiveImage(activeImage - 1);
    }
  }
  function handleSlideShowForward() {
    if (activeImage === graphics.length - 1) {
      setActiveImage(0);
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
  async function checkVal() {
    await ValidateLogin("dont-redirect").then((r) => {
      console.log("cn: " + r);
      if (r) {
        setShowAddImageOption(true);
      }
    });
  }
  useEffect(() => {
    fetch("https://api.quinnpatwardhan.com/get-graphics")
      .then((r) => r.json())
      .then((r2) => setGraphics(r2));
    checkVal();
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
            src={graphics[activeImage]?.imageURL}
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
                  setActiveImage(index);

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

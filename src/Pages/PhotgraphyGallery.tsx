import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import { BsArrowLeft } from "react-icons/bs";
import { AiFillCloseCircle, AiFillPlusCircle } from "react-icons/ai";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import { ValidateLogin } from "../Helpers/ValidateLogin";
import AddImagePopup from "../Components/AddImagePopup";

export default function PhotgraphyGallery() {
  const [photos, setPhotos]: any = useState([]);

  const [showSlideshow, toggleSlideshow] = useState(false);
  const [activeImage, setActiveImage] = useState(1);
  const [showAddImageOption, setShowAddImageOption] = useState(false);
  const [showAddImagePopup, setShowAddImagePopup] = useState(false);

  function handleSlideShowBack() {
    if (activeImage === 1) {
      setActiveImage(photos.length - 1);
    } else {
      setActiveImage(activeImage - 1);
    }
  }
  function handleSlideShowForward() {
    if (activeImage === photos.length - 1) {
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
  function handleKeyPress(event: any) {
    console.log("a");
    if (event.key === "ArrowRight") {
      handleSlideShowForward();
    }
    if (event.key === "ArrowLeft") {
      handleSlideShowBack();
    }
    if (event.key === "Escape") {
      toggleSlideshow(false);
    }
  }
  async function checkVal() {
    await ValidateLogin("dont-redirect").then((r) => {
      console.log("cn: " + r);
      if (r) {
        setShowAddImageOption(true);
      }
    });
  }
  useEffect(() => {
    fetch("https://api.quinnpatwardhan.com/get-photos")
      .then((r) => r.json())
      .then((r2) => setPhotos(r2));
    checkVal();
    window.scrollTo(0, 0);
  }, []);
  function handleSlideshowClose() {
    toggleSlideshow(false);
  }
  return (
    <>
      {showAddImagePopup ? <AddImagePopup mode={"photo"} /> : ""}
      <Header />
      <div
        className={
          showSlideshow ? "slideshow-wrapper show" : "slideshow-wrapper hide"
        }
        onKeyDown={handleKeyPress}
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
          <img src={photos[activeImage]?.imageURL} />
          <div
            className="forward-area"
            onClick={() => handleSlideShowForward()}
          >
            <IoIosArrowForward className="forward-button" />
          </div>
        </div>
      </div>
      <div
        className="page-wrapper"
        style={{ backgroundColor: "#fff", paddingBottom: "1em" }}
      >
        <div className="title-wrapper">
          <Link to="/">
            <BsArrowLeft className="back-icon" />
          </Link>
          <h1>Photography</h1>
        </div>

        <div className="gallery-wrapper">
          <div
            className="faux-photo"
            style={{
              display: showAddImageOption ? "flex" : "none",
              backgroundColor: "#cbd5e1",
              justifyContent: "center",
              minHeight: "20em",
              alignItems: "center",
            }}
            onClick={() => {
              setShowAddImagePopup(true);
            }}
          >
            <AiFillPlusCircle style={{ fontSize: "4rem" }} />
          </div>
          {
            // map runtimee
            photos.map((image: any, index: any) => {
              return (
                <img
                  onClick={() => {
                    setActiveImage(index);
                    toggleSlideshow(true);
                  }}
                  onContextMenu={(e) => {
                    e.preventDefault();
                    return false;
                  }}
                  key={index}
                  src={image.imageURL}
                />
              );
            })
          }
        </div>
      </div>{" "}
      <Footer />
    </>
  );
}

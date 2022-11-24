import React from "react";
import { TbMapPin } from "react-icons/tb";
import { BsArrowRight } from "react-icons/bs";
import graphics_key from "../Assets/graphics/graphics_key.json";
import { Link } from "react-router-dom";

export default function GraphicDesign() {
  return (
    <section
      className="graphic-section"
      style={{
        color: "white",
        background: "#64748b",
        justifyContent: "flex-start",
        height: "100vh",
        maxHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <div
        className="project-info-wrapper"
        style={{
          textAlign: "left",
          marginLeft: "none",
          marginRight: "auto",
          width: "100%",
        }}
      >
        <h2>Graphic Design</h2>
      </div>
      <div className="photo-stack">
        {graphics_key.map((image, index) => {
          if (image.isFeatured === true) {
            return (
              <div className="photo-frame" key={index}>
                <img
                  src={require("../Assets/graphics/" + image.filename)}
                  alt=""
                />
                <h5>{image.name}</h5>
              </div>
            );
          }
        })}
      </div>
      <div className="container">
        <Link to="/graphics-gallery">
          <button className="button-1">
            Gallery <BsArrowRight />
          </button>
        </Link>
      </div>
    </section>
  );
}

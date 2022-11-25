import React from "react";
import { TbMapPin } from "react-icons/tb";
import { BsArrowRight } from "react-icons/bs";
import featured_images_key from "../Assets/featured_images_key.json";
import { Link } from "react-router-dom";

export default function Photography() {
  return (
    <section
      className="photography-section"
      style={{
        color: "white",
        background: "#164e63",
        justifyContent: "flex-start",
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
        <h2>Photography</h2>
      </div>
      <div className="photo-stack">
        {featured_images_key.map((image, index) => {
          return (
            <div className="photo-frame" key={index}>
              <img
                src={"Assets/photos/image" + image.id + ".webp"}
                alt={image.description}
              />
              <h5>
                <TbMapPin />
                {image.location}
              </h5>
            </div>
          );
        })}
      </div>
      <div className="container">
        <Link to="/photo-gallery">
          <button className="button-1">
            Gallery <BsArrowRight />
          </button>
        </Link>
      </div>
    </section>
  );
}

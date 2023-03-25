import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

export const About = () => {
  return (
    <div className="about-section-container" id="about">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Food Is An Important Part Of A Balanced Diet
        </h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
          suscipit soluta unde et aut reiciendis iure dolorem iusto, dicta
          accusantium, modi ratione sunt harum quibusdam, error at nemo optio
          consectetur.
        </p>
        <p className="primary-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas nisi
          similique possimus fuga fugit ullam illum porro, ipsum corporis, sit
          quidem dolorum eaque nobis ea at ducimus non aut labore?
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { Navbar } from "./Navbar";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";

export const Home = () => {
  return (
    <div className="home-section-container" id="home">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Your Favorite Food Delivered Hot & Fresh
          </h1>
          <p className="primary-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
            vitae rem harum aperiam inventore dolore dicta soluta voluptatum
            iste. Unde, in ratione?
          </p>
          <button className="secondary-button">
            Order Now
            <FiArrowRight />
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

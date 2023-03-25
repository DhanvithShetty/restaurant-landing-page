import React from "react";
import logo from "../Assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="footer-section-container" id="footer">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={logo} alt="" />
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Quality</span>
          <span>Help</span>
          <span>Share</span>
          <span>Careers</span>
          <span>Testimonials</span>
          <span>Work</span>
        </div>
        <div className="footer-section-columns">
          <span>123-4567-8910</span>
          <span>business@food.com</span>
          <span>testimonials@food.com</span>
          <span>contact@food.com</span>
        </div>
      </div>
      <div className="footer-section-columns">
        <span>Terms & Conditions</span>
        <span>Privacy Policy</span>
      </div>
    </div>
  );
};

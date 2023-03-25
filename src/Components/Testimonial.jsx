import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

export const Testimonial = () => {
  return (
    <div className="testimonial-section-container" id="testimonials">
      <div className="testimonial-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading" style={{ textAlign: "center" }}>
          What People Are Saying
        </h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          placeat aliquid quidem debitis nulla nisi nihil corrupti. Consequatur
          veritatis nulla magnam molestias doloremque, a optio quasi laborum,
          asperiores impedit fugit.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, sint
          quaerat! Soluta ducimus, amet eaque, quibusdam voluptatibus dolor
          molestias a dicta earum tempore vel unde enim. Provident fugit odit
          ipsa?
        </p>
        <div className="testimonial-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>John Doe</h2>
      </div>
    </div>
  );
};

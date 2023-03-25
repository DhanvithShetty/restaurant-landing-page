import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

export const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi iusto aliquid tempore corrupti fugiat reprehenderit eos sequi, et, non dolor, ullam praesentium ea eaque esse? Cum obcaecati voluptatibus et asperiores!",
    },
    {
      image: ChooseMeals,
      title: "Choose Meals",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi iusto aliquid tempore corrupti fugiat reprehenderit eos sequi, et, non dolor, ullam praesentium ea eaque esse? Cum obcaecati voluptatibus et asperiores!",
    },
    {
      image: DeliveryMeals,
      title: "Delivery Meals",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi iusto aliquid tempore corrupti fugiat reprehenderit eos sequi, et, non dolor, ullam praesentium ea eaque esse? Cum obcaecati voluptatibus et asperiores!",
    },
  ];
  return (
    <div className="work-section-container" id="work">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
          accusantium molestias numquam illo optio animi odit repellat deserunt,
          quo suscipit quam tempora pariatur nesciunt.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info">
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

import React from "react";
import imagesSlide from "../../../assets/images/img.jpg";
import "../../../styles/scss/Slide/Slide.css";

function Slide() {
  return (
    <div id="slide">
      <img src={imagesSlide} alt="" />
      <div className="text-content text-">
        <div className="text-heading">
          <h1>Jilius</h1>
        </div>
        <div className="text-description text-break">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          ducimus, perferendis fugiat officiis molestiae reprehenderit! Aliquam
          ullam impedit iusto eius obcaecati rerum voluptatem dolorum molestias,
          blanditiis fuga quaerat exercitationem eaque!
        </div>
      </div>
    </div>
  );
}
export default Slide;

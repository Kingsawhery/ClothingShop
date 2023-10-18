import React from "react";
import imagesSlide1 from "../../../../assets/images/img.jpg";
import imagesSlide2 from "../../../../assets/images/img2.webp";
import imagesSlide3 from "../../../../assets/images/img1.webp";
import { Carousel } from "react-bootstrap";
import "../../../../styles/scss/Slide/Slide.css";

function Slide() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={imagesSlide1} style={{ width: "100%" }} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={imagesSlide2} style={{ width: "100%" }} />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={imagesSlide3} style={{ width: "100%" }} />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default Slide;

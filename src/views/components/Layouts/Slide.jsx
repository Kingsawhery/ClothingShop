import React from "react";
import { Carousel } from "react-bootstrap";
import "../../../../src/styles/scss/Slide/Slide.css";

function Slide() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src="../../../images/img.jpg" style={{ width: "100%" }} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="../../../images/img1.webp" style={{ width: "100%" }} />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="../../../images/img2.webp" style={{ width: "100%" }} />

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

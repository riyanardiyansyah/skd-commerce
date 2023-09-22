import React from "react";
import Carousel from "react-bootstrap/Carousel";
import logo1 from "../cr1.jpg";
import logo2 from "../cr2.jpg";
import logo3 from "../cr3.jpg";
// import ExampleCarouselImage from "react-bootstrap/Carousel";
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import "./Component.css";

function Hero() {
  return (
    <section className="hero mt-3 mb-3">
      <div className="carousel-hero radius">
        <Carousel data-bs-theme="dark" className="radius">
          <Carousel.Item className="radius">
            <img className="d-block w-100" src={logo1} alt="First slide" />
            <Carousel.Caption>
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="radius">
            <img className="d-block w-100" src={logo2} alt="Second slide" />
            <Carousel.Caption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="radius">
            <img className="d-block w-100" src={logo3} alt="Third slide" />
            <Carousel.Caption>
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
}

export default Hero;

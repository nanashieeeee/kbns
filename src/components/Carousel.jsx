import React from "react";
import "../css/CarouselCSS.css";
import CarouselItem from "./CarouselItem";
import PhotoCard from "./PhotoCard";
import images from "./Images";

function Carousel() {
  return (
    <div className="carouselContainer container-fluid p-0 mt-5">
      <div id="productCarousel" className="carousel slide">
        {/* carousel content */}
        <div className="carousel-inner">
          {/* lightstick carousel */}
          <CarouselItem identifier="lighstStickCarousel" active={true}>
            <div className="d-flex flex-column align-items-center">
              <h1 id="light">
                L
                <img src={images.maveLightstick} alt="" />
                GHT
              </h1>
              <h1 id="sticks">STICKS</h1>
            </div>
          </CarouselItem>
          {/* Photocards Carousel */}
          <CarouselItem identifier="photoCardCarousel">
            <h1
              style={{
                fontSize: "64px",
                color: "aliceblue",
                letterSpacing: "62px",
                fontWeight: "bold",
                margin: '0',
                padding: '0',
              }}
            >
              PHOTOCARDS
            </h1>
            <div className="d-flex justify-content-center align-items-center pt-2">
              <PhotoCard
                frontImgUrl={images.soyeon}
                backImgUrl={images.soyeonBackImg}
              ></PhotoCard>
              <PhotoCard
                frontImgUrl={images.lisa}
                backImgUrl={images.lisaBackImg}
              ></PhotoCard>
              <PhotoCard
                frontImgUrl={images.seulgi}
                backImgUrl={images.seulgiBackImg}
              ></PhotoCard>
              <PhotoCard
                frontImgUrl={images.hanni}
                backImgUrl={images.hanniBackImg}
              ></PhotoCard>
            </div>
          </CarouselItem>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#productCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#productCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;

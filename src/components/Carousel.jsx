import React from "react";
import "../css/CarouselCSS.css";
import CarouselItem from "./CarouselItem";
import PhotoCard from "./PhotoCard";
import CarouselDesc from "./CarouselDesc";
import images from "./Images";

function Carousel() {
  return (
    <div className="carouselContainer container-fluid p-0 mt-5">
      <div id="productCarousel" className="carousel slide">
        {/* carousel content */}
        <div className="carousel-inner">
          {/* lightstick carousel */}
          <CarouselItem identifier="lighstStickCarousel">
            <div className="row">
              <div className="col-6">
                <div className="banner">
                  <div className="lightstick-container">
                    <div className="lightstick"></div>
                  </div>
                  <div className="hexagon-platform">
                    <img src={images.platformHexa} alt="" />
                  </div>
                </div>
              </div>
              <CarouselDesc
                h1="LIGHTSTICKS"
                h2="Elevate Your Concert Experience"
                p="Wide variety of choices. From fan-made to official releases."
              />
            </div>
          </CarouselItem>
          {/* Photocards Carousel */}
          <CarouselItem identifier="photoCardCarousel">
            <div className="row">
              <div className="col-6">
                <div className="banner">
                  <div className="photoCard-container">
                    <div className="photoCard">
                      <PhotoCard
                        frontImgUrl={images.soyeonBackImg}
                        backImgUrl={images.soyeon}
                      ></PhotoCard>
                    </div>
                  </div>
                  <div className="circle-platform">
                    <img src={images.platformCircle} alt="" />
                  </div>
                </div>
              </div>
              <CarouselDesc
                h1="PHOTO CARDS"
                h2="Exclusive Collectibles for Every Fan"
                p="Discover unique designs featuring your favorite idols. Perfect for trading, collecting, and sharing the love of K-pop."
              />
            </div>
          </CarouselItem>
          {/* Album Carousel */}
          <CarouselItem identifier="albumCarousel">
            <div className="row">
              <div className="col-6">
                <div className="banner">
                  <div className="disc-container">
                    <div className="disc"></div>
                  </div>
                  <div className="vinyl-player">
                    <img src={images.vinylPlayer} alt="" />
                  </div>
                </div>
              </div>
              <CarouselDesc
                h1="ALBUMS"
                h2="Own the Music, Celebrate the Art"
                p="From chart-topping hits to exclusive photobooks, experience
                  your favorite artists masterpieces in physical form."
              />
            </div>
          </CarouselItem>
          {/* Last Carousel */}
          <CarouselItem identifier="lastCarousel" active={true}>
            <div
              className="d-flex flex-column justify-content-center align-items-center"
              style={{ height: "400px" }}
            >
              <h1 className="display-1 fw-bold w-50 text-center">
                AND SO MUCH MORE!
              </h1>
              <h2 className="fw-bold mt-5">
                Get into the hobby, <a href="" style={{color: '#B181FF'}}>Sign up</a> now to start
                browsing.
              </h2>
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

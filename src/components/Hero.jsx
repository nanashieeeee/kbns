import React from "react";
import aespa_logo from "../assets/hero_aespa_logo.png";
import "../css/HeroCSS.css";

function Hero() {
  return (
    <div
      className="container pt-5 pb-3 heroContainer d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="row">
        <div
          className="col-12 col-lg-6 heroStatements d-flex flex-column gap-3"
          style={{ color: "#F2EAFF" }}
        >
          <div className="hero-container">
            <h1 className="fw-bold heroTitle">NUMBER 1</h1>
            <h1 className="heroTitleShadow fw-bold">NUMBER 1</h1>
          </div>
          <div className="heroSubStatement d-flex flex-column gap-3">
            <h1 className="fw-bold display-5">
              Korean Merchandise Buy and Sell Platform in the Philippines.
            </h1>
            <h6 className="mb-5">
              Approved by K-Pop enthusiasts nationwide.
            </h6>
          </div>

          <div className="heroStatementFooter">
            <button className="rounded-pill fw-bold heroBtn">
              <span>
                Get Started
                <i className="fa-solid fa-right-to-bracket ms-2 mt-1"></i>
              </span>
            </button>
            <p className="my-3 text-center w-75">
              Already have an account?{" "}
              <a href="" style={{ color: "#B181FF" }}>
                Log in
              </a>{" "}
              instead
            </p>
          </div>
        </div>
        <div className="col-0 col-lg-6 d-none d-md-block text-center">
          <div className="heroImgContainer">
            <div className="card heroImg2">
              <img
                src={aespa_logo}
                alt="aespalogo"
                style={{ height: "50%", width: "70%" }}
                draggable="false"
              />
            </div>
            <div className="card heroImg1"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

import React from "react";
function CarouselDesc(props) {
  return (
    <div className="col-6 d-flex flex-column justify-content-center">
      <h1 className="fw-bold display-1">{props.h1}</h1>
      <h2 className="fw-bold" style={{ color: "#B181FF" }}>
        {props.h2}
      </h2>
      <p className="">
        {props.p}
      </p>
      <p>
        Get into the hobby!{" "}
        <a href="" style={{ color: "#B181FF" }}>
          Sign up
        </a>{" "}
        now.
      </p>
    </div>
  );
}

export default CarouselDesc;

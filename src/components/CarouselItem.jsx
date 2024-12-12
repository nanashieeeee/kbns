import React from "react";

function CarouselItem(props) {
  return (
    <div className={`carousel-item ${props.active ? "active" : null}`}>
      <div className={`d-block w-100 ${props.identifier}`}>
        <div className="container text-center">
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default CarouselItem;

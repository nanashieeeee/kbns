import React from "react";

function Product(props) {
  return (
    <div className={`carousel-item ${props.active ? "active" : ""}`} data-bs-interval="10000">
      <div
        className={`w-100 ${props.identifier}`}
        style={{ color: "aliceblue" }}
      >
        <div className="container">
          <div className="row">{props.children}</div>
        </div>
      </div>
    </div>
  );
}

export default Product;

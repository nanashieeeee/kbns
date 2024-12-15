import React from "react";
import images from "./Images";
function ProductItem(props) {
  return (
    <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
      <div className="banner">
        <div className={props.containerId}>
          <div className={props.itemId}>{props.children}</div>
        </div>
        <div className="platform-circle">
          <img src={images.platformCircle} alt="" />
        </div>
      </div>
    </div>
  );
}

export default ProductItem;

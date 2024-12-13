import React from "react";


function PhotoCard(props) {
  return (
    <div className="card-container">
      <div className="photo-card">
        <div
          className="photo-card-front"
          style={{ backgroundImage: `url(${props.frontImgUrl})` }}
        ></div>
        <div className="photo-card-back" style={{backgroundImage: `url(${props.backImgUrl})`}}>
        </div>
      </div>
    </div>
  );
}

export default PhotoCard;

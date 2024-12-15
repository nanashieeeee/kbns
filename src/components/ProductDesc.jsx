import React from "react";
function ProductDesc(props) {
  return (
    <div className="col-12 col-md-6 d-flex flex-column justify-content-center gap-3" style={{zIndex:"2"}}>
      <h1 className="fw-bold display-1">{props.h1}</h1>
      <h2 className="fw-bold" style={{ color: "#B181FF" }}>
        {props.h2}
      </h2>
      <p className="">
        {props.p}
      </p>
      <div className="d-flex align-items-center gap-3">
        <button className="labelBtn" style={{backgroundColor: '#B181FF'}}>Get Started</button>
        <button className="labelBtn" style={{background: 'none', border: '1px solid #D891EF'}}>Shop Now</button>
      </div>
    </div>
  );
}

export default ProductDesc;

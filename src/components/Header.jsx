import React from "react";

function Header(){
  return(
    <nav className="navbar">
      <div className="container d-flex justify-content-between align-items-center">
        <h2 className="fw-bold text-light">kBN'S</h2>
        <div className="d-flex">
          <a href="#" className="me-3">Careers</a>
          <a href="#" className="me-3">Login</a>
          <a href="#" className="me-3">Sign up</a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
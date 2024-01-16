import React from "react";

const Header = () => {
  return (
    <div className="head">
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark navy py-3 fixed-top">
        <a className=" font-weight-bolder ml-4 title" href="/">
          MeTaxi
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse titlebar" id="navbarNav">
          <ul className="navbar-nav fs-5">
            <li className="nav-item active">
              <a
                className="nav-link font-weight-bold"
                href="/services"
              >
                Services
              </a>
            </li>
            <li className="nav-item active">
              <a
                className="nav-link font-weight-bold"
                href="/about"
              >
                About
              </a>
            </li>
            <li className="nav-item active">
              <a
                className="nav-link font-weight-bold"
                href="/contact"
                // onClick={(e)=>{
                //     // e.preventDefault()
                //     window.alert("Page is currently down(Under Construction). Redirecting to home page.");
                // }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;

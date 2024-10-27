import React from 'react';
import './Navbar.css'; // Importing custom CSS for additional styling
import hospitalLogo from './images/logo.png'; // Assuming you have a hospital-themed logo in your assets

const Navbar = () => {
  return (
    <div>
      {/* Applying custom background style */}
      <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={hospitalLogo} alt="HealthMonitor" className="logo-img" /> {/* Healthcare-themed logo */}
            HealthMonitor
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/SignUp">
                  Sign Up
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Signin">
                  Sign In
                </a>
              </li>
              
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

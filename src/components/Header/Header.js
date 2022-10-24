import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light mb-5">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Travel Bangladesh
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="anavbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/home" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/destinations" className="nav-link">
                Destinations
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success me-2" type="submit">
              Search
            </button>
            <button className="btn btn-outline-danger me-2" type="submit">
              Login
            </button>
            <button className="btn btn-outline-success me-2" type="submit">
              Signup
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;

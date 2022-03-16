import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg text-white navbar-light bg-black">
      <div className="container">
        <Link className="navbar-brand text-white" to="#">
          <img width="19rem" src="img/twitter-navbar.svg" alt="logo" />
        </Link>
        <button
          className="navbar-toggler text-white"
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
              <Link className="nav-link active" aria-current="page" to="#">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Link
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="#">
                    Action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Another action
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Something else here
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link disabled">
                Disabled
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2 rounded-pill bg-dark text-white"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

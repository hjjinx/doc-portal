import React from "react";
import { Link } from "react-router-dom";

export default class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src={"/assets/img/brand.png"}
              className="navbar-brand-img"
              alt="..."
            />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarCollapse">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fe fe-x"></i>
            </button>

            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  id="navbarBookAppointment"
                  to="#"
                  aria-expanded="false"
                >
                  Book an Appointment
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  id="navbarAccount"
                  to="#"
                  aria-expanded="false"
                >
                  My Appointments
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  id="navbarDocumentation"
                  to="/register/doctor"
                  aria-expanded="false"
                >
                  Doctor Registration
                </Link>
              </li>
            </ul>

            <Link
              className="navbar-btn btn btn-sm btn-primary lift ml-auto"
              to="#"
              target="_blank"
            >
              Contact us
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

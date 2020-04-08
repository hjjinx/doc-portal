import React from "react";
import { Link } from "react-router-dom";

export default class DocCard extends React.Component {
  render() {
    return (
      <div class="col-12 col-md-4 pediatrician">
        <Link
          class="card shadow-light-lg mb-7 lift"
          to={`/doctor/${this.props.licenseNo}`}
        >
          <div class="card-zoom">
            {/* <img class="card-img" src={"/assets/img/"} alt="..." /> */}
          </div>
          <div class="card-body bg-white">
            <div class="shape shape-bottom-100 shape-fluid-x svg-shim text-white"></div>
            <h4 class="mb-0">
              {"Dr " + this.props.firstName + " " + this.props.lastName}
            </h4>
            <h6 class="text-uppercase mb-0 text-muted">
              {this.props.speciality}
            </h6>
            <h6 class="text-uppercase mb-1 text-muted">
              {this.props.address + ", " + this.props.city}
            </h6>
            <p class="font-size-sm mb-1">
              Working Hours: {this.props.workingHours}
            </p>
          </div>
        </Link>
      </div>
    );
  }
}

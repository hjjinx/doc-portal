import React from "react";
import { withRouter, Link } from "react-router-dom";
import Axios from "axios";

class Doctor extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    speciality: "",
    workingHours: "",
    clinicName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    phoneNumber: "",
    email: "",
  };
  componentDidMount() {
    let licenseNo = this.props.match.params.id;
    licenseNo = licenseNo.replace("%20", " ");
    Axios.get(`http://localhost:6969/doctor/${licenseNo}`)
      .then((res) => {
        res = res.data;
        if (res.message === "Success" && res.data[0]) {
          res = res.data;
          this.setState({ ...res[0] });
        } else {
          alert("Doctor not found!");
          document.location.href = "/choosedoctor";
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Doctor not found!");
        document.location.href = "/choosedoctor";
      });
  }
  render() {
    return (
      <section className="pt-8 pt-md-11">
        <div className="container">
          <div className="row align-items-center" data-aos="fade-up">
            <div className="col-12 col-md">
              <Link
                to="/choosedoctor"
                className="font-weight-bold font-size-sm text-decoration-none mb-3"
              >
                <i className="fe fe-arrow-left mr-3"></i> Choose a doctor
              </Link>

              <h1 className="display-4 mb-2">
                {"Dr " + this.state.firstName + " " + this.state.lastName}
              </h1>

              <p className="font-size-lg text-gray-700 mb-5 mb-md-0">
                {this.state.speciality} ·{" "}
                {this.state.address + ", " + this.state.city}
              </p>
            </div>
          </div>
          <div className="row" data-aos="fade-up" data-aos-delay="150">
            <div className="col-12">
              <hr className="my-6 my-md-8 border-gray-300" />
            </div>
          </div>
          <div
            className="row"
            data-isotope='{"layoutMode": "masonry"}'
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <div className="col-12 col-md-4">
              <div className="card shadow-light-lg mb-5">
                <div className="card-body">
                  <h4 className="font-weight-bold mb-5">Basic details</h4>

                  <h6 className="font-weight-bold text-uppercase text-gray-700 mb-2">
                    License Number
                  </h6>

                  <p className="font-size-sm mb-5">{this.state.licenseNo}</p>

                  <h6 className="font-weight-bold text-uppercase text-gray-700 mb-2">
                    Speciality
                  </h6>

                  <p className="font-size-sm mb-5">{this.state.speciality}</p>

                  <h6 className="font-weight-bold text-uppercase text-gray-700 mb-2">
                    Working Hours
                  </h6>

                  <p className="font-size-sm mb-0">{this.state.workingHours}</p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="card shadow-light-lg mb-5">
                <div className="card-body">
                  <h4 className="font-weight-bold mb-5">Address</h4>

                  <h6 className="font-weight-bold text-uppercase text-gray-700 mb-2">
                    Clinic name
                  </h6>

                  <p className="font-size-sm mb-5">{this.state.clinicName}</p>

                  <h6 className="font-weight-bold text-uppercase text-gray-700 mb-2">
                    Address
                  </h6>

                  <p className="font-size-sm mb-0">
                    <a
                      href={`http://maps.google.com/?q=${
                        this.state.address + " " + this.state.city
                      }`}
                      className="text-reset"
                    >
                      {this.state.address +
                        "\n" +
                        this.state.city +
                        ", " +
                        this.state.zipCode +
                        ", " +
                        this.state.state}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="card shadow-light-lg mb-5">
                <div className="card-body">
                  <h4 className="font-weight-bold mb-5">Contact details</h4>

                  <h6 className="font-weight-bold text-uppercase text-gray-700 mb-2">
                    Contact number
                  </h6>

                  <p className="font-size-sm mb-5">
                    <a
                      href={`tel:${this.state.phoneNumber}`}
                      className="text-reset"
                    >
                      {this.state.phoneNumber}
                    </a>
                  </p>

                  <h6 className="font-weight-bold text-uppercase text-gray-700 mb-2">
                    Email
                  </h6>

                  <p className="font-size-sm mb-0">
                    <a
                      href={`mailto:${this.state.email}`}
                      className="text-reset"
                    >
                      {this.state.email}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row" data-aos="fade-up" data-aos-delay="200">
            <div className="col-12">
              <hr className="my-6 my-md-8 border-gray-300" />

              <p className="my-6 my-md-8 font-size-sm text-center text-muted">
                Information not accurate? <br />
                <a href="mailto: admin@doctorhub.com">Please let us know</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withRouter(Doctor);

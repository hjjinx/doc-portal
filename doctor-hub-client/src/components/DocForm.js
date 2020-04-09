import React from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

import Spinner from "./Spinner";

export default class DocForm extends React.Component {
  state = {
    data: {
      licenseNo: "",
      firstName: "",
      lastName: "",
      speciality: "Family Physician",
      startTime: "",
      endTime: "",
      clinicName: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      phoneNumber: "",
      email: "",
    },
    loading: false,
  };
  handleInputChange = (e) =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value },
    });
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ loading: true }, () => {
      this.state.data.workingHours =
        this.state.data.startTime + " - " + this.state.data.endTime;
      console.log(this.state.data);
      Axios.post(`http://localhost:6969/register/doctor`, this.state.data)
        .then((res) => {
          res = res.data;
          console.log(res);
          if (res.message === "Successfully inserted data") {
            this.setState({ loading: false });
            document.location.href = `/doctor/${this.state.data.licenseNo}`;
            // Show a positive result message here
          } else {
            this.setState({ loading: false });
            if (res.error.code === "ER_DUP_ENTRY")
              alert("This License No. is already registered.");
            else alert("There was an error. Please try again");
            // Show a negative result message here
          }
        })
        .catch((err) => {
          // Show a negative result message here
          console.error(err);
          this.setState({ loading: false });
        });
    });
  };

  render() {
    if (this.state.loading) return <Spinner />;
    else
      return (
        <section>
          <div class="container d-flex flex-column">
            <div class="row justify-content-center no-gutters min-vh-100">
              <div class="col-8 col-md-6 col-lg-7 offset-md-1 order-md-2 mt-auto mt-md-0 pt-8 pb-4 py-md-11">
                <img
                  src="/assets/img/illustrations/illustration-3.png"
                  alt="..."
                  class="img-fluid"
                  data-aos="fade-up"
                  data-aos-delay="100"
                />
              </div>
              <div
                class="col-12 col-md-5 col-lg-4 order-md-1 mb-auto mb-md-0 pb-8 py-md-11"
                data-aos="fade-up"
              >
                <h1 class="mb-0 font-weight-bold text-center">
                  Register as a doctor
                </h1>

                <p class="mb-6 text-center">Set up your profile in minutes.</p>

                <hr />

                <form
                  class="mb-6"
                  data-aos="fade-up"
                  data-aos-delay="50"
                  onSubmit={this.handleSubmit}
                >
                  <h3 class="mb-3 font-weight-bold text-muted">
                    Personal details
                  </h3>

                  <div class="form-group">
                    <label for="licenseNo">License Number</label>
                    <input
                      name="licenseNo"
                      onChange={this.handleInputChange}
                      type="text"
                      class="form-control"
                      id="licenseNo"
                      placeholder="XXXXXXXXX"
                      required
                    />
                  </div>

                  <div class="form-group mb-5">
                    <label for="firstName">First Name</label>
                    <input
                      name="firstName"
                      onChange={this.handleInputChange}
                      type="text"
                      class="form-control"
                      id="firstName"
                      placeholder="John"
                      required
                    />
                  </div>

                  <div class="form-group mb-5">
                    <label for="lastName">Last Name</label>
                    <input
                      name="lastName"
                      onChange={this.handleInputChange}
                      type="text"
                      class="form-control"
                      id="lastName"
                      placeholder="Doe"
                      required
                    />
                  </div>

                  <div class="form-group mb-5">
                    <label for="speciality">Speciality</label>
                    <select
                      name="speciality"
                      onChange={this.handleInputChange}
                      type="text"
                      class="form-control"
                      id="speciality"
                    >
                      <option>Family Physician</option>
                      <option>Internal Medicine</option>
                      <option>Pediatrician</option>
                      <option>Gynaecologist</option>
                      <option>Surgeon</option>
                      <option>Psychiatrist</option>
                      <option>Cardiologist</option>
                      <option>Dermatologist</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div class="form-group mb-6">
                    <label>Working Hours</label>
                    <div>
                      <input
                        name="startTime"
                        onChange={this.handleInputChange}
                        type="time"
                        class="form-control"
                        id="startTime"
                        required
                      />
                    </div>
                    <p class="mb-0 mw-25 text-center text-muted">to</p>
                    <div>
                      <input
                        name="endTime"
                        onChange={this.handleInputChange}
                        type="time"
                        class="form-control"
                        id="endTime"
                        required
                      />
                    </div>
                  </div>

                  <hr />

                  <h3 class="mb-3 font-weight-bold text-muted">
                    Clinic details
                  </h3>

                  <div class="form-group mb-5">
                    <label for="clinicName">Clinic Name</label>
                    <input
                      name="clinicName"
                      onChange={this.handleInputChange}
                      type="text"
                      class="form-control"
                      id="clinicName"
                      placeholder="Moriarty Clinic"
                      required
                    />
                  </div>

                  <div class="form-group mb-5">
                    <label for="address">Address</label>
                    <input
                      name="address"
                      onChange={this.handleInputChange}
                      type="text"
                      class="form-control"
                      id="address"
                      placeholder="221B Baker Street"
                      required
                    />
                  </div>

                  <div class="form-group mb-5">
                    <label for="city">City</label>
                    <input
                      name="city"
                      onChange={this.handleInputChange}
                      type="text"
                      class="form-control"
                      id="city"
                      placeholder="Baskerville"
                      required
                    />
                  </div>

                  <div class="form-group mb-5">
                    <label for="state">State</label>
                    <input
                      name="state"
                      onChange={this.handleInputChange}
                      type="text"
                      class="form-control"
                      id="state"
                      placeholder="Maharashtra"
                      required
                    />
                  </div>

                  <div class="form-group mb-5">
                    <label for="zipCode">Zip Code</label>
                    <input
                      name="zipCode"
                      onChange={this.handleInputChange}
                      type="text"
                      class="form-control"
                      id="zipCode"
                      placeholder="XXXXXX"
                      pattern="[0-9]{6}"
                      required
                    />
                  </div>

                  <div class="form-group mb-5">
                    <label for="phoneNumber">Phone Number</label>
                    <input
                      name="phoneNumber"
                      onChange={this.handleInputChange}
                      type="number"
                      class="form-control"
                      id="phoneNumber"
                      placeholder="XXXXXXXXXX"
                      pattern="[0-9]{10}"
                      required
                    />
                  </div>

                  <div class="form-group mb-5">
                    <label for="email">Email</label>
                    <input
                      name="email"
                      onChange={this.handleInputChange}
                      type="email"
                      class="form-control"
                      id="email"
                      placeholder="abc@xyzmail.com"
                      required
                    />
                  </div>

                  <hr />

                  <button class="btn btn-block btn-primary lift" type="submit">
                    Register
                  </button>
                </form>

                <p class="mb-0 font-size-sm text-center text-muted">
                  Have any questions? <Link to="/contactus">Contact us</Link>.
                </p>
              </div>
            </div>
          </div>
        </section>
      );
  }
}

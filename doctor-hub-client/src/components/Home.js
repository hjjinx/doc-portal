import React from "react";
import { Link } from "react-router-dom";
import loadjs from "loadjs";

import Review from "./Review";

export default class Home extends React.Component {
  componentDidMount() {
    loadjs("assets/libs/flickity/dist/flickity.pkgd.min.js");
    loadjs("assets/libs/flickity-fade/flickity-fade.js");
  }
  render() {
    return (
      <div>
        <section className="pt-4 pt-md-11">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-md-5 col-lg-6 order-md-2">
                <img
                  src={"/assets/img/illustrations/illustration-1.png"}
                  className="img-fluid mw-md-150 mw-lg-130 mb-6 mb-md-0"
                  alt="..."
                  data-aos="fade-up"
                  data-aos-delay="100"
                />
              </div>
              <div
                className="col-12 col-md-7 col-lg-6 order-md-1"
                data-aos="fade-up"
              >
                <h1 className="display-3 text-center text-md-left">
                  Welcome to <span className="text-primary">DocPortal</span>.{" "}
                  <br />
                  We make it simple.
                </h1>

                <p className="lead text-center text-md-left text-muted mb-6 mb-lg-8">
                  We help you find a doctor who's right for you and make it easy
                  for you to connect with your doctor.
                </p>

                <div className="text-center text-md-left">
                  <Link
                    to="/choosedoctor"
                    className="btn btn-primary shadow lift mr-1"
                  >
                    Find me a doctor{" "}
                    <i className="fe fe-arrow-right d-none d-md-inline ml-3"></i>
                  </Link>{" "}
                  <a href="#steps" className="btn btn-primary-soft lift">
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="steps" className="py-8 py-md-11 border-bottom">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-4" data-aos="fade-up">
                <h3>Find Doctors</h3>

                <p className="text-muted mb-6 mb-md-0">
                  We only list the very best doctors in Tricity. Our interface
                  is carefully designed to help you choose the best doctor for
                  you.
                </p>
              </div>
              <div
                className="col-12 col-md-4"
                data-aos="fade-up"
                data-aos-delay="50"
              >
                <h3>Contact Doctors</h3>

                <p className="text-muted mb-6 mb-md-0">
                  We do our very best to make sure that the most accurate and
                  up-to-date contact details have been listed on DocPortal.
                </p>
              </div>
              <div
                className="col-12 col-md-4"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h3>24x7 Dedicated Support</h3>

                <p className="text-muted mb-0">
                  Facing any issues or have any questions? Our support team is
                  there to help you, always. Just let us know!
                </p>
              </div>
            </div>
          </div>
        </section>
        <Review></Review>
      </div>
    );
  }
}

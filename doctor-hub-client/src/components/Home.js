import React from "react";
import { Link } from "react-router-dom";
import loadjs from "loadjs";

import Review from "./Review";

export default class Home extends React.Component {
  componentDidMount() {
    loadjs("/assets/libs/jquery/dist/jquery.min.js");
    loadjs("assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js");
    loadjs("assets/libs/flickity/dist/flickity.pkgd.min.js");
    loadjs("assets/libs/flickity-fade/flickity-fade.js");
    loadjs("assets/libs/aos/dist/aos.js");
    loadjs("assets/libs/smooth-scroll/dist/smooth-scroll.min.js");
    loadjs("assets/libs/jarallax/dist/jarallax.min.js");
    loadjs("assets/libs/jarallax/dist/jarallax-video.min.js");
    loadjs("assets/libs/jarallax/dist/jarallax-element.min.js");
    loadjs("assets/libs/typed.js/lib/typed.min.js");
    loadjs("assets/libs/countup.js/dist/countUp.min.js");
    loadjs("assets/libs/highlightjs/highlight.pack.min.js");
    loadjs("assets/libs/%40fancyapps/fancybox/dist/jquery.fancybox.min.js");
    loadjs("assets/libs/isotope-layout/dist/isotope.pkgd.min.js");
    loadjs("assets/libs/imagesloaded/imagesloaded.pkgd.min.js");
    loadjs("assets/js/theme.min.js");
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
                  </Link>
                  <Link to="#steps" className="btn btn-primary-soft lift">
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="steps" className="py-8 py-md-11 border-bottom">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-4" data-aos="fade-up">
                <h3>Step 1: Choose a doctor</h3>

                <p className="text-muted mb-6 mb-md-0">
                  Choose a doctor from a wide range of doctors registered with
                  us. Our interface is carefully designed to help you choose the
                  best doctor for you.
                </p>
              </div>
              <div
                className="col-12 col-md-4"
                data-aos="fade-up"
                data-aos-delay="50"
              >
                <h3>Step 2: Fill out your details</h3>

                <p className="text-muted mb-6 mb-md-0">
                  We need these so we can forward them to your doctor to book an
                  appointment. We do not sell your data.
                </p>
              </div>
              <div
                className="col-12 col-md-4"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h3>Step 3: Choose a date and time</h3>

                <p className="text-muted mb-0">
                  And you're done! Set the date and time for your appointment on
                  your calendar and rest easy.
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

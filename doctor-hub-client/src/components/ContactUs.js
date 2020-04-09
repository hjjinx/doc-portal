import React from "react";

export default class Contact extends React.Component {
  handleSubmit = (e) => {
    alert(
      "Your details have been received. A person will contact you shortly!"
    );
    document.location.href = "/";
  };
  render() {
    return (
      <div>
        <section
          class="py-10 py-md-14 overlay overlay-black overlay-60 bg-cover"
          style={{ backgroundImage: "url(/assets/img/covers/cover-2.jpg)" }}
        >
          <div class="container" data-aos="fade-up">
            <div class="row justify-content-center">
              <div class="col-12 col-md-10 col-lg-8 text-center">
                <h1 class="display-2 font-weight-bold text-white">
                  We’re Here to Help.
                </h1>

                <p class="lead text-white-75 mb-0">
                  We always want to hear from you! Let us know how we can best
                  help you and we'll do our very best.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div class="position-relative" data-aos="fade-up">
          <div class="shape shape-bottom shape-fluid-x svg-shim text-light">
            <svg
              viewBox="0 0 2880 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>

        <section
          class="py-7 py-md-9 border-bottom border-gray-300"
          id="info"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div class="container">
            <div class="row">
              <div class="col-12 text-center">
                <a
                  href="#info"
                  class="btn btn-white btn-rounded-circle shadow mt-n11 mt-md-n13"
                  data-toggle="smooth-scroll"
                >
                  <i class="fe fe-arrow-down"></i>
                </a>
              </div>
            </div>
            <div class="row">
              <div class="col-12 col-md-4 text-center border-right border-gray-300">
                <h6 class="text-uppercase text-gray-700 mb-1">Message us</h6>

                <div class="mb-5 mb-md-0">
                  <a href="https://discord.gg/Gs6qYaK" class="h4 text-primary">
                    Start a chat!
                  </a>
                </div>
              </div>
              <div class="col-12 col-md-4 text-center border-right border-gray-300">
                <h6 class="text-uppercase text-gray-700 mb-1">Call anytime</h6>

                <div class="mb-5 mb-md-0">
                  <a href="tel:1800123456" class="h4">
                    1800 123 456
                  </a>
                </div>
              </div>
              <div class="col-12 col-md-4 text-center">
                <h6 class="text-uppercase text-gray-700 mb-1">Email us</h6>

                <a href="mailto:support@docportal.me" class="h4">
                  support@docportal.me
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          class="pt-8 pt-md-11 pb-8 pb-md-14"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-12 col-md-10 col-lg-8 text-center">
                <h2 class="font-weight-bold">Let us hear from you directly!</h2>

                <p class="font-size-lg text-muted mb-7 mb-md-9">
                  Write us a message and we'll get back to you as soon as
                  possible.
                </p>
              </div>
            </div>
            <div
              class="row justify-content-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="col-12 col-md-12 col-lg-10">
                <form>
                  <div class="row">
                    <div class="col-12 col-md-6">
                      <div class="form-group mb-5">
                        <label for="contactName">Full name</label>

                        <input
                          name="contactName"
                          type="text"
                          class="form-control"
                          id="contactName"
                          placeholder="Jane Doe"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-12 col-md-6">
                      <div class="form-group mb-5">
                        <label for="contactEmail">Email</label>

                        <input
                          name="contactEmail"
                          type="email"
                          class="form-control"
                          id="contactEmail"
                          placeholder="abc@xyzmail.com"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12">
                      <div class="form-group mb-7 mb-md-9">
                        <label for="contactMessage">
                          What can we help you with?
                        </label>

                        <textarea
                          name="contactMessage"
                          class="form-control"
                          id="contactMessage"
                          rows="5"
                          placeholder="Tell us what we can help you with!"
                          required
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div class="row justify-content-center">
                    <div class="col-auto">
                      <button
                        type="submit"
                        class="btn btn-primary lift"
                        onClick={this.handleSubmit}
                      >
                        Send message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

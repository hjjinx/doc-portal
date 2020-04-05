import React from "react";

export default class Review extends React.Component {
  render() {
    return (
      <div>
        <section className="pt-10 pt-md-12">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-8 text-center">
                <h2>Our customers are our biggest fans.</h2>

                <p className="font-size-lg text-muted mb-7 mb-md-9">
                  We don't like to brag, but we don't mind letting our customers
                  do it for us. Here are a few nice things folks have said about
                  DocPortal over the years.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="card card-row shadow-light-lg mb-6">
                  <div className="row no-gutters">
                    <div className="col-12 col-md-6">
                      <div
                        className="card-img-slider"
                        data-flickity='{"fade": true, "imagesLoaded": true, "pageDots": false, "prevNextButtons": false, "asNavFor": "#blogSlider", "draggable": false}'
                      >
                        <a
                          className="card-img-left bg-cover"
                          style={{
                            backgroundImage:
                              'url("/assets/img/photos/photo-1.jpg")'
                          }}
                          href="#!"
                        >
                          <img
                            src={"/assets/img/photos/photo-1.jpg"}
                            alt="..."
                            className="img-fluid d-md-none invisible"
                          />
                        </a>
                        <a
                          className="card-img-left bg-cover"
                          style={{
                            backgroundImage:
                              'url("/assets/img/photos/photo-2.jpg")'
                          }}
                          href="#!"
                        >
                          <img
                            src={"/assets/img/photos/photo-2.jpg"}
                            alt="..."
                            className="img-fluid d-md-none invisible"
                          />
                        </a>
                      </div>

                      <div className="shape shape-right shape-fluid-y svg-shim text-white d-none d-md-block">
                        <svg
                          viewBox="0 0 112 690"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M116 0H51V172C76 384 0 517 0 517V690H116V0Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 position-md-static">
                      <div
                        className="position-md-static"
                        data-flickity='{"wrapAround": true, "pageDots": false, "adaptiveHeight": true}'
                        id="blogSlider"
                      >
                        <div className="w-100">
                          <div className="card-body">
                            <blockquote className="blockquote text-center mb-0">
                              <p className="mb-5 mb-md-7">
                                “DocPortal is hands down the most useful thing
                                I've ever used. I can't wait to use it again for
                                my next appointment.”
                              </p>

                              <footer className="blockquote-footer">
                                <span className="h6 text-uppercase">
                                  Sarkaari Saand
                                </span>
                              </footer>
                            </blockquote>
                          </div>
                        </div>
                        <div className="w-100">
                          <div className="card-body">
                            <blockquote className="blockquote text-center mb-0">
                              <p className="mb-5 mb-md-7">
                                “DocPortal has made getting doctor appointments
                                so simple! Booking an appointment with my doctor
                                now takes just a couple of minutes and frees up
                                a lot of time that otherwise would have been
                                wasted in trying to set up the appointment.”
                              </p>

                              <footer className="blockquote-footer">
                                <span className="h6 text-uppercase">
                                  Stonkman Thonks
                                </span>
                              </footer>
                            </blockquote>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="position-relative mt-n8">
          <div className="shape shape-bottom shape-fluid-x svg-shim text-gray-200">
            <svg viewBox="0 0 2880 480" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2160 0C1440 240 720 240 720 240H0V480H2880V0H2160Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
      </div>
    );
  }
}

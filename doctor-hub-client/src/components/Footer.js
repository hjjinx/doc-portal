import React from "react";

export default class Footer extends React.Component {
  render() {
    return (
      <section className="pt-12 pt-md-13 bg-gray-200">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-5 col-lg-6 order-md-2">
              <img
                src={"/assets/img/illustrations/illustration-2.png"}
                alt="..."
                className="img-fluid mb-6 mb-md-0"
              />
            </div>
            <div className="col-12 col-md-7 col-lg-6 order-md-1">
              <h2>
                Stay focused on your health. <br />
                <span className="text-primary">
                  Let us handle the appointment
                </span>
                .
              </h2>

              <p className="font-size-lg text-gray-700 mb-6">
                You have a life to live. Stop worrying about figuring out the
                right time for calling the doctor's place for an appointment,
                negotiating the appointment, and making sure that it has been
                set up. Let us do that for you.
              </p>

              <div className="d-flex">
                <div className="pr-5">
                  <h3 className="mb-0">
                    <span
                      data-toggle="countup"
                      data-from="0"
                      data-to="100"
                      data-aos
                      data-aos-id="countup:in"
                    ></span>
                    %
                  </h3>
                  <p className="text-gray-700 mb-0">Satisfaction</p>
                </div>
                <div className="border-left border-gray-300"></div>
                <div className="px-5">
                  <h3 className="mb-0">
                    <span
                      data-toggle="countup"
                      data-from="0"
                      data-to="24"
                      data-aos
                      data-aos-id="countup:in"
                    ></span>
                    /
                    <span
                      data-toggle="countup"
                      data-from="0"
                      data-to="7"
                      data-aos
                      data-aos-id="countup:in"
                    ></span>
                  </h3>
                  <p className="text-gray-700 mb-0">Support</p>
                </div>
                <div className="border-left border-gray-300"></div>
                <div className="pl-5">
                  <h3 className="mb-0">
                    <span
                      data-toggle="countup"
                      data-from="0"
                      data-to="100"
                      data-aos
                      data-aos-id="countup:in"
                    ></span>
                    k+
                  </h3>
                  <p className="text-gray-700 mb-0">Doctors & Patients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
      </section>
    );
  }
}

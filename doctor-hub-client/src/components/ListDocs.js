import React from "react";
import Axios from "axios";
import loadjs from "loadjs";

import DocCard from "./DocCard";

export default class ListDocs extends React.Component {
  state = {
    doctors: [],
    filterSpeciality: "All",
  };

  componentDidMount() {
    Axios.get("http://localhost:6969/alldoctors")
      .then((res) => {
        res = res.data;
        console.log(res);
        this.setState({ doctors: res });
      })
      .catch((err) => console.error);
  }

  changeSpecialityFilter = (e) => {
    let text = e.target.innerHTML;
    if (text.startsWith("<")) {
      text = text.substr(32);
      text = text.substr(0, text.indexOf("<"));
    }
    this.setState({
      filterSpeciality: text == "all" ? "" : text,
    });
  };

  render() {
    // The HTML page used to make this app uses these scripts. Upon some manipulation to the DOM
    // these scripts need to be re-called in order to maintain the page.
    // This is a bad solution that is extremely inefficient
    // But it works so np

    loadjs("/assets/libs/jquery/dist/jquery.min.js");
    loadjs("/assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js");
    loadjs("/assets/libs/flickity/dist/flickity.pkgd.min.js");
    loadjs("/assets/libs/flickity-fade/flickity-fade.js");
    loadjs("/assets/libs/aos/dist/aos.js");
    loadjs("/assets/libs/smooth-scroll/dist/smooth-scroll.min.js");
    loadjs("/assets/libs/jarallax/dist/jarallax.min.js");
    loadjs("/assets/libs/jarallax/dist/jarallax-video.min.js");
    loadjs("/assets/libs/jarallax/dist/jarallax-element.min.js");
    loadjs("/assets/libs/typed.js/lib/typed.min.js");
    loadjs("/assets/libs/countup.js/dist/countUp.min.js");
    loadjs("/assets/libs/highlightjs/highlight.pack.min.js");
    loadjs("/assets/libs/%40fancyapps/fancybox/dist/jquery.fancybox.min.js");
    loadjs("/assets/libs/isotope-layout/dist/isotope.pkgd.min.js");
    loadjs("/assets/libs/imagesloaded/imagesloaded.pkgd.min.js");
    loadjs("/assets/js/theme.min.js");
    let DocCardList = [];
    if (this.state.filterSpeciality === "All") {
      for (let i = 0; i < this.state.doctors.length; i++)
        DocCardList[i] = (
          <DocCard
            firstName={this.state.doctors[i].firstName}
            lastName={this.state.doctors[i].lastName}
            speciality={this.state.doctors[i].speciality}
            address={this.state.doctors[i].address}
            city={this.state.doctors[i].city}
            workingHours={this.state.doctors[i].workingHours}
            licenseNo={this.state.doctors[i].licenseNo}
          ></DocCard>
        );
    } else
      for (let i = 0; i < this.state.doctors.length; i++)
        if (this.state.doctors[i].speciality === this.state.filterSpeciality)
          DocCardList[i] = (
            <DocCard
              firstName={this.state.doctors[i].firstName}
              lastName={this.state.doctors[i].lastName}
              speciality={this.state.doctors[i].speciality}
              address={this.state.doctors[i].address}
              city={this.state.doctors[i].city}
              workingHours={this.state.doctors[i].workingHours}
              licenseNo={this.state.doctors[i].licenseNo}
            ></DocCard>
          );
    return (
      <div>
        <section
          data-jarallax
          data-speed=".8"
          class="pt-12 pt-md-14 pb-12 pb-md-15 overlay overlay-black overlay-60 bg-cover jarallax"
          style={{
            marginTop: "-83px",
            backgroundImage: "url(/assets/img/covers/cover-1.jpg)",
          }}
        >
          <div class="container">
            <div class="row justify-content-center">
              <div
                class="col-12 col-md-10 col-lg-7 text-center"
                data-aos="fade-up"
              >
                <h1 class="display-2 font-weight-bold text-white">
                  Choose a Doctor
                </h1>

                <p class="lead text-white-75 mb-4">
                  Let's find the perfect doctor for your needs.
                </p>

                <nav class="nav justify-content-center">
                  <a
                    class="badge badge-pill badge-white-soft active mr-1 mb-1"
                    href="#"
                    onClick={this.changeSpecialityFilter}
                    data-toggle="pill"
                    data-filter=""
                    data-target="#doctors"
                  >
                    <span class="h6 text-uppercase">All</span>
                  </a>
                  <a
                    class="badge badge-pill badge-white-soft mr-1 mb-1"
                    href="#"
                    data-toggle="pill"
                    data-filter="Family Physician"
                    data-target="#doctors"
                    onClick={this.changeSpecialityFilter}
                  >
                    <span class="h6 text-uppercase">Family Physician</span>
                  </a>
                  <a
                    class="badge badge-pill badge-white-soft mr-1 mb-1"
                    href="#"
                    data-toggle="pill"
                    data-filter="Internal Medicine"
                    data-target="#doctors"
                    onClick={this.changeSpecialityFilter}
                  >
                    <span class="h6 text-uppercase">Internal Medicine</span>
                  </a>
                  <a
                    class="badge badge-pill badge-white-soft mr-1 mb-1"
                    href="#"
                    data-toggle="pill"
                    data-filter="Pediatrician"
                    data-target="#doctors"
                    onClick={this.changeSpecialityFilter}
                  >
                    <span class="h6 text-uppercase">Pediatrician</span>
                  </a>
                  <a
                    class="badge badge-pill badge-white-soft mr-1 mb-1"
                    href="#"
                    data-toggle="pill"
                    data-filter="Gynaecologist"
                    data-target="#doctors"
                    onClick={this.changeSpecialityFilter}
                  >
                    <span class="h6 text-uppercase">Gynaecologist</span>
                  </a>
                  <a
                    class="badge badge-pill badge-white-soft mr-1 mb-1"
                    href="#"
                    data-toggle="pill"
                    data-filter="Surgeon"
                    data-target="#doctors"
                    onClick={this.changeSpecialityFilter}
                  >
                    <span class="h6 text-uppercase">Surgeon</span>
                  </a>
                  <a
                    class="badge badge-pill badge-white-soft mr-1 mb-1"
                    href="#"
                    data-toggle="pill"
                    data-filter="Psychiatrist"
                    data-target="#doctors"
                    onClick={this.changeSpecialityFilter}
                  >
                    <span class="h6 text-uppercase">Psychiatrist</span>
                  </a>
                  <a
                    class="badge badge-pill badge-white-soft mr-1 mb-1"
                    href="#"
                    data-toggle="pill"
                    data-filter="Cardiologist"
                    data-target="#doctors"
                    onClick={this.changeSpecialityFilter}
                  >
                    <span class="h6 text-uppercase">Cardiologist</span>
                  </a>
                  <a
                    class="badge badge-pill badge-white-soft mr-1 mb-1"
                    href="#"
                    data-toggle="pill"
                    data-filter="Dermatologist"
                    data-target="#doctors"
                    onClick={this.changeSpecialityFilter}
                  >
                    <span class="h6 text-uppercase">Dermatologist</span>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </section>

        <div class="position-relative">
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
          class="py-8 py-md-11 mt-n10 mt-md-n14"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <div class="container">
            <div
              class="row"
              id="doctors"
              data-isotope='{"layoutMode": "masonry"}'
            >
              {DocCardList}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

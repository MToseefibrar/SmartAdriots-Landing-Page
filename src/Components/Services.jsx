import React from "react";
import "../Components/Services.css";
import Servicesone from "../assets/serviceimage.png";
import Mobile from "../assets/mobile.png";
import Web from "../assets/webapplication.png";
import Design from "../assets/uiux.png";
import Wordpress from "../assets/wordpress.png";

const Services = () => {
  return (
    <>
      <section className="services_section">
        <div className="services_container">
          <div>
            <h1>Our Services</h1>
            <p className="services_heading_paragraph">
              It is a long established fact that a reader will be distracted by
              the readable
            </p>
            <p className="services_heading_paragraph">
              content of a page when looking at its layout.
            </p>
          </div>

          <div className="services">
            <div className="text_side_box">
              <h2 className="box-heading">We solve business </h2>
              <h2 className="box-heading">probelms with technology</h2>
              <div>
                <p className="box_paragraph">
                  It is a long established fact that a reader will be
                </p>
                <p className="box_paragraph">
                  distracted by the readable content of a page when
                </p>
                <p className="box_paragraph">
                  looking at its layout. The point of using Lorem Ipsum is that
                </p>
              </div>
            </div>
            <div className="image_side">
              <img src={Servicesone} height={360} width={600} />
            </div>
          </div>

          <div className="services">
            <div className="image_sideone">
              <img src={Mobile} height={360} width={600} />
            </div>
            <div className="text_side_boxgray">
              <h2 className="box-headingray">Mobile Application</h2>
              <div>
                <p className="box_paragraphone">
                  It is a long established fact that a reader will be
                </p>
                <p className="box_paragraphone">
                  distracted by the readable content of a page when
                </p>
                <p className="box_paragraphone">
                  looking at its layout. The point of using Lorem Ipsum is that
                </p>
              </div>
            </div>
          </div>

          <div className="services">
            <div className="text_side_boxgray">
              <h2 className="box-headingray">Web Application</h2>
              <div>
                <p className="box_paragraphone">
                  It is a long established fact that a reader will be
                </p>
                <p className="box_paragraphone">
                  distracted by the readable content of a page when
                </p>
                <p className="box_paragraphone">
                  looking at its layout. The point of using Lorem Ipsum is that
                </p>
              </div>
            </div>
            <div className="image_sideone">
              <img src={Web} height={360} width={600} />
            </div>
          </div>

          <div className="services">
            <div className="image_sideone">
              <img src={Design} height={360} width={600} />
            </div>
            <div className="text_side_boxgray">
              <h2 className="box-headingray">UI UX Designs</h2>
              <div>
                <p className="box_paragraphone">
                  It is a long established fact that a reader will be
                </p>
                <p className="box_paragraphone">
                  distracted by the readable content of a page when
                </p>
                <p className="box_paragraphone">
                  looking at its layout. The point of using Lorem Ipsum is that
                </p>
              </div>
            </div>
          </div>

          <div className="services">
            <div className="text_side_boxgray">
              <h2 className="box-headingray">Wordpress Development</h2>
              <div>
                <p className="box_paragraphone">
                  It is a long established fact that a reader will be
                </p>
                <p className="box_paragraphone">
                  distracted by the readable content of a page when
                </p>
                <p className="box_paragraphone">
                  looking at its layout. The point of using Lorem Ipsum is that
                </p>
              </div>
            </div>

            <div className="image_sideone">
              <img src={Wordpress} height={360} width={600} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;

import React from "react";
import "../Components/Features.css";
import Dollarsign from "../assets/dollar.png";
import Clock from "../assets/clock.png";
import Team from "../assets/team.png";
const Features = () => {
  return (
    <>
      <section className="features_section">
        <div className="features_container">
          <div className="text_area-side">
            <div className="featuretag">Features</div>
            <div className="feature_heading">
              <h1> Why Choose</h1>
              <h1>
                <span className="colourchange">Smartadroits</span>
              </h1>
            </div>

            <div className="feature_paragraph">
              <p>It is a long established fact that a reader will be </p>
              <p>distracted by the readable content of a page when </p>
              <p>looking at its layout. The point of using Lorem Ipsum is </p>
              <p>that system. </p>
            </div>

            <button className="feature_btn">Discuss Your Business</button>
          </div>
          <div className="features_boxes">
            <div className="box1">
              <div className="circle">
                <img src={Dollarsign} height={30} width={15} />
              </div>
              <div className="box_text">
                <h1>Fixed Price</h1>
                <p className="box_description">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>
            </div>

            <div className="box1">
              <div className="circletwo">
                <img src={Clock} height={35} width={35} />
              </div>
              <div className="box_text">
                <h1>Time & Materiel</h1>
                <p className="box_description">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>
            </div>

            <div className="box1">
              <div className="circlethree">
                <img src={Team} height={40} width={30} />
              </div>
              <div className="box_text">
                <h1>Dedicated Team</h1>
                <p className="box_description">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;

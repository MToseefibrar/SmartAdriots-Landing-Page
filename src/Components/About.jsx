import React from "react";
import AboutImage from "../assets/about.png";
import "../Components/About.css";

const About = () => {
  return (
    <>
      <section className="about_section">
        <div className="about_container">
          <div className="about-image">
            <img src={AboutImage} height={430} width={450} />
          </div>
          <div className="text_area-side">
            <div className="aboutshape">About Us</div>
            <div className="about_heading">
              <h1> Building Your Trust</h1>
              <h1> Through Expertise &</h1>
              <h1> Integrity</h1>
            </div>

            <div className="about_paragraph">
              <p>It is a long established fact that a reader will be </p>
              <p>distracted by the readable content of a page when </p>
              <p>looking at its layout. The point of using Lorem Ipsum is </p>
              <p>that system. </p>
            </div>

            <div className="customers">
              <div>
                <h1>40+</h1>
                <p>Complete Projects</p>
              </div>
              <div>
                <h1>50+</h1>
                <p>Satisfied Customers</p>
              </div>
            </div>
            <button className="btn">Read More</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

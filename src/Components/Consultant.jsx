import React from "react";
import "../Components/Consultant.css";
import cons from "../assets/cons.png";
const Consultant = () => {
  return (
    <>
      <section className="consultant_section">
        <div className="consultant_container">
          <div className="tex_side">
            <h1>Free Consultant</h1>
            <div>
              <input
                className="input"
                type="text"
                placeholder="Name"
                name=""
                id=""
              />
            </div>
            <div>
              <input
                className="input"
                type="text"
                placeholder="Your Email"
                name=""
                id=""
              />
            </div>
            <div>
              <input
                className="input"
                type="text"
                placeholder="Email"
                name=""
                id=""
              />
            </div>
            <button className="consultant_button"> Submit</button>
          </div>
          <div className="image_side">
            <img
              className="constult_image"
              src={cons}
              height={370}
              width={330}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Consultant;

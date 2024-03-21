import React from "react";
import "../Components/Technologies.css";
// import Redis from "../assets/redis.png";
import Swift from "../assets/swift.png";
import Reactjs from "../assets/reacts.png";
import Redis from "../assets/redis.png";
import Node from "../assets/node.png";
import DB from "../assets/db.png";
import magento from "../assets/magento.png";
import Kotlin from "../assets/kotlin.png";
import Java from "../assets/java.png";
import Apple from "../assets/apple.png";
import Fire from "../assets/fire.png";

const Technologies = () => {
  return (
    <>
      <section className="technologies_section">
        <div className="technologies_heading">
          <h1>Technologies We Work With!</h1>
        </div>
        <div className="technologies_container">
          <div className="box">
            <div className="technologies_icons">
              <img src={Reactjs} height={60} width={70} />
            </div>

            <div className="technologies_icons">
              <img src={Swift} height={60} width={60} />
            </div>

            <div className="technologies_icons">
              <img src={Redis} height={60} width={60} />
            </div>

            <div className="technologies_icons">
              <img src={Node} height={60} width={60} />
            </div>

            <div className="technologies_icons">
              <img src={Apple} height={60} width={50} />
            </div>

            <div className="technologies_icons">
              <img src={magento} height={60} width={65} />
            </div>

            <div className="technologies_icons">
              <img src={Kotlin} height={60} width={50} />
            </div>
            <div className="technologies_icons">
              <img src={Java} height={60} width={40} />
            </div>
            <div className="technologies_icons">
              <img src={Fire} height={60} width={45} />
            </div>
            <div className="technologies_icons">
              <img src={DB} height={60} width={60} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Technologies;

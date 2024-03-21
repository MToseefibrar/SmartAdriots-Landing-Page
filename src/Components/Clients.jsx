import React from "react";
import "../Components/Clients.css";
import Clientone from "../assets/c1.png";
import Stars from "../assets/stars.png";

const Clients = () => {
  return (
    <>
      <section className="clients_section">
        <div>
          <h1 className="clients_heading">What Our Clients Says</h1>
          <p>What our valuable clients says about our execellent work </p>
        </div>

        <div className="cleints_container">
          <div className="client_box">
            <div className="client_image">
              <img src={Clientone} height={50} width={50} />
            </div>
            <h4 className="name">Alex Carey</h4>
            <p className="client_paragraph">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that
            </p>

            <div className="reviews_image">
              <img src={Stars} height={20} width={70} />
            </div>
          </div>

          <div className="client_box">
            <div className="client_image">
              <img src={Clientone} height={50} width={50} />
            </div>
            <h4 className="name">Alex Carey</h4>
            <p className="client_paragraph">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that
            </p>

            <div className="reviews_image">
              <img src={Stars} height={20} width={70} />
            </div>
          </div>

          <div className="client_box">
            <div className="client_image">
              <img src={Clientone} height={50} width={50} />
            </div>
            <h4 className="name">Alex Carey</h4>
            <p className="client_paragraph">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that
            </p>

            <div className="reviews_image">
              <img src={Stars} height={20} width={70} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Clients;

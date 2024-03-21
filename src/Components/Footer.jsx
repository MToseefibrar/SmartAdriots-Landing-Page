import React from "react";
import "../Components/Footer.css";
import Phone from "../assets/phone.png";
import Mail from "../assets/mail.png";
import Facebook from "../assets/face.png";
import Twitter from "../assets/twitter.png";
import In from "../assets/in.png";

const Footer = () => {
  return (
    <>
      <section className="footer_section">
        <div className="footer_container">
          <div className="company_intro">
            <h2>Smartadriots</h2>
            <p>Unlock business success .</p>
            <p>with SmartAdriots. Your partner for</p>
            <p>exceptional software solutions</p>
            <h3>Brand By</h3>
            <span>Smrtadroits Technologics PVT LTD.</span>
          </div>

          <div className="company_intro">
            <h2>Services</h2>
            <p>Mobile Development .</p>
            <p>Web Development </p>
            <p>Ecommerce</p>
            <p>Quality</p>
            <p>Consultancy</p>
          </div>

          <div className="company_intro">
            <h2>Address</h2>
            <p>
              <b>Pakistan</b> Zealtouch ABBaldergatan 10, 19551
            </p>
            <p>Faislabad</p>
            <div className="phone">
              <div>
                <img src={Phone} className="phone" height={20} width={20} />
              </div>
              <p className="contact_number">0300 123 345 678 </p>
            </div>

            <div className="Mail">
              <div>
                <img src={Mail} className="phone" height={20} width={20} />
              </div>
              <p className="contact_number">0300 123 345 678 </p>
            </div>

            <div className="media_icons">
              <div className="facebook">
                <img src={Facebook} />
              </div>

              <div className="twitter">
                <img src={Twitter} />
              </div>

              <div className="In">
                <img src={In} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;

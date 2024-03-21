import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Image from "../src/assets/mainimage.png";
import One from "../src/assets/one.png";
import Two from "../src/assets/two.png";
import Three from "../src/assets/three.png";
import Four from "../src/assets/four.png";
import Five from "../src/assets/five.png";
import About from "./Components/About";
import Services from "./Components/Services";
import Features from "./Components/Features";
import Workprocess from "./Components/Workprocess";
import Technologies from "./Components/Technologies";
import Clients from "./Components/Clients";
import Footer from "./Components/Footer";
import Consultant from "./Components/Consultant";

function App() {
  return (
    <>
      <Header />
      {/* Section One */}
      <section className="sectionone">
        <div className="header_container">
          <div className="text_area">
            <h1> Boost Your</h1>
            <h1> Software </h1>
            <h1>
              <spn className="orange_text">Business</spn> With
            </h1>
            <h1>Smart Adriots</h1>

            <div className="paragraph">
              <p>Unlock business success with  </p>
              <p>
                <b>Smart Adriots </b>. Your partner for exceptional
              </p>
              <p> software solutions.</p>
            </div>
            <div className="main_btn">
              <button>Lets Get Started</button>
            </div>
          </div>
          <div>
            <img src={Image} height={470} width={490} />
          </div>
        </div>
      </section>

      {/* Section Two */}

      <section className="section_two">
        <div className="companies_logos_container">
          <div>
            <img src={One} />
          </div>

          <div>
            <img src={Two} />
          </div>

          <div>
            <img src={Three} />
          </div>

          <div>
            <img src={Four} height={70} width={70} />
          </div>

          <div>
            <img src={Five} />
          </div>
        </div>
      </section>

      <About />
      <Services />
      <Features />
      <Workprocess />
      <Technologies />
      <Clients />
      <Consultant />
      <Footer />
    </>
  );
}

export default App;

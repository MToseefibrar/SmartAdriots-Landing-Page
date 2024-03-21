import React from "react";
import "../Components/Workprocess.css";
import Process from "../assets/sdlc.png";
import clock from "../assets/clock.png";
import Planing from "../assets/plan.png";
import Analysis from "../assets/analysis.png";
import Design from "../assets/design.png";
import Develop from "../assets/develop.png";
import Testing from "../assets/test.png";
import Reviewing from "../assets/review.png";

const Workprocess = () => {
  return (
    <section className="process_section">
      <div className="process_container">
        <div>
          <h1 className="process_heading">How We Work</h1>
          <p className="services_heading_paragraph">
            A typical flow of iterative agile SDLC can be visualized as follows:
          </p>
        </div>

        <div className="main_process">
          <div className="processimages">
            <img src={Process} height={430} width={470} />
          </div>
          <div>
            <div className="process_box">
              <div className="icon_side">
                <img src={Planing} height={40} width={40} />
              </div>
              <div className="text_side">
                <h4>Requirenments & Planning</h4>

                <p>
                  A typical flow of iterative agile SDLC can be visualized as
                  follows:
                </p>
              </div>
            </div>

            <div className="process_box">
              <div className="icon_side">
                <img src={Analysis} height={40} width={40} />
              </div>
              <div className="text_side">
                <h4>Analysis</h4>

                <p>
                  A typical flow of iterative agile SDLC can be visualized as
                  follows:
                </p>
              </div>
            </div>

            <div className="process_box">
              <div className="icon_side">
                <img src={Design} height={40} width={40} />
              </div>
              <div className="text_side">
                <h4>Designing</h4>

                <p>
                  A typical flow of iterative agile SDLC can be visualized as
                  follows:
                </p>
              </div>
            </div>

            <div className="process_box">
              <div className="icon_side">
                <img src={Develop} height={30} width={40} />
              </div>
              <div className="text_side">
                <h4>Coding</h4>

                <p>
                  A typical flow of iterative agile SDLC can be visualized as
                  follows:
                </p>
              </div>
            </div>

            <div className="process_box">
              <div className="icon_side">
                <img src={Testing} height={40} width={40} />
              </div>
              <div className="text_side">
                <h4>Testing</h4>

                <p>
                  A typical flow of iterative agile SDLC can be visualized as
                  follows:
                </p>
              </div>
            </div>

            <div className="process_box">
              <div className="icon_side">
                <img src={Reviewing} height={40} width={40} />
              </div>
              <div className="text_side">
                <h4>Maintenance</h4>

                <p>
                  A typical flow of iterative agile SDLC can be visualized as
                  follows:
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workprocess;

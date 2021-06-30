import React, { Component } from "react";

import "./styles.css";
import logo from "./abc.png";
import first from "./1.jpg";
import second from "./2.jpg";
import third from "./3.jpg";

export class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md">
              <h3>About Us</h3>
              <br />
              <p>
                At The Alex Fitness, your fitness is our #1 priority. From the
                moment you walk in the doors, you know what to expect. We have a
                full range of professional heavy duty commercial grade strength
                equipment developed by a team of US and European engineers
                providing state of the art design, biomechanics and production
                technology.
              </p>
            </div>
            <div className="col-md">
              <h3>Contacts</h3>
              <br />

              <ul className="contacts">
                <li>
                  <i className="far fa-map"></i>&nbsp;&nbsp;&nbsp;&nbsp;123 Main
                  str., Frisco, TX
                </li>
                <li>
                  <i className="fas fa-phone"></i>&nbsp;&nbsp;&nbsp;&nbsp;(800)
                  123-45678
                </li>
                <li>
                  <i className="far fa-envelope"></i>
                  &nbsp;&nbsp;&nbsp;&nbsp;info@alex.fitness
                </li>
                <li>
                  <i className="far fa-clock"></i>
                  &nbsp;&nbsp;&nbsp;&nbsp;Mon.-Fri.: 10-20 Sun.: 12-16
                </li>
              </ul>
            </div>
            <div className="col-md">
              <h3>Recent Posts</h3>
              <br />
              <div className="last-post">
                <div className="counter">0</div>
                <img src={first} alt="" />
                <div>
                  <h5>TRAINING</h5>
                  <h4>Best Practices To Build Your ...</h4>
                </div>
              </div>
              <div className="last-post">
                <div className="counter">2</div>
                <img src={second} alt="" />
                <div>
                  <h5>Well-being</h5>
                  <h4>Incorporating Mental Health Exercise Programs at ...</h4>
                </div>
              </div>
              <div className="last-post">
                <div className="counter">0</div>
                <img src={third} alt="" />
                <div>
                  <h5>TRAINING</h5>
                  <h4>10 Gym KPIs You Should Be ...</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="row footer-logo-section">
            <h4 className="d-block">Powered by</h4>
            <br />
            <img src={logo} className="footer-logo" />
          </div>
        </div>
      </div>
    );
  }
}

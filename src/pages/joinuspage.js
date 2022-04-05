import React from "react"
import Header from "../components/Header"
import Container from "../components/utils/Container"
import Benefits from "../components/Benefits"
import Questions from "./../components/Questions"
import Footer from "../components/Footer"
import position1 from "../images/position1.jpg"
import position2 from "../images/position2.jpg"
import position3 from "../images/position3.jpg"
import position4 from "../images/position4.jpg"
import position5 from "../images/position5.jpg"
import position6 from "../images/position6.jpg"
import ParallaxY from "../components/utils/ParallaxY"
const joinuspage = () => {
  return (
    <>
      <section className="joinuspage__hero">
        <div className="joinuspage__hero-toomb">
          <Header />

          <div className="joinuspage__hero-block">
            <h1 className="joinuspage__hero-head">
              Steer your career{" "}
              <span className="joinuspage__hero-head-span">
                in the right direction
              </span>
            </h1>
            <p className="joinuspage__hero-text">Join Us</p>
          </div>
        </div>
      </section>
      <section className="joinuspage__position">
        <Container>
          <ParallaxY>
            <h2 className="joinuspage__position-head">Our open positions</h2>
            <ul className="joinuspage__position-list">
              <li className="joinuspage__position-list-item">
                <div className="joinuspage__position-list-item-toomb">
                  <img
                    className="joinuspage__position-list-item-toomb-img"
                    src={position1}
                  />
                </div>
                <div className="joinuspage__position-list-item-content">
                  <h3 className="joinuspage__position-list-item-content-head">
                    WordPress Developer
                  </h3>
                  <a
                    src="/"
                    className="joinuspage__position-list-item-content-text"
                  >
                    Czytaj więcej
                  </a>
                </div>
              </li>
              <li className="joinuspage__position-list-item">
                <div className="joinuspage__position-list-item-toomb">
                  <img
                    className="joinuspage__position-list-item-toomb-img"
                    src={position2}
                  />
                </div>
                <div className="joinuspage__position-list-item-content">
                  <h3 className="joinuspage__position-list-item-content-head">
                    Specjalista ds. rekrutacji
                  </h3>
                  <p className="joinuspage__position-list-item-content-text">
                    Czytaj więcej
                  </p>
                </div>
              </li>
              <li className="joinuspage__position-list-item">
                <div className="joinuspage__position-list-item-toomb">
                  <img
                    className="joinuspage__position-list-item-toomb-img"
                    src={position3}
                  />
                </div>
                <div className="joinuspage__position-list-item-content">
                  <h3 className="joinuspage__position-list-item-content-head">
                    New Business Development Manager
                  </h3>
                  <p className="joinuspage__position-list-item-content-text">
                    Czytaj więcej
                  </p>
                </div>
              </li>
              <li className="joinuspage__position-list-item">
                <div className="joinuspage__position-list-item-toomb">
                  <img
                    className="joinuspage__position-list-item-toomb-img"
                    src={position4}
                  />
                </div>
                <div className="joinuspage__position-list-item-content">
                  <h3 className="joinuspage__position-list-item-content-head">
                    Full Stack Developer
                  </h3>
                  <p className="joinuspage__position-list-item-content-text">
                    Czytaj więcej
                  </p>
                </div>
              </li>
              <li className="joinuspage__position-list-item">
                <div className="joinuspage__position-list-item-toomb">
                  <img
                    className="joinuspage__position-list-item-toomb-img"
                    src={position5}
                  />
                </div>
                <div className="joinuspage__position-list-item-content">
                  <h3 className="joinuspage__position-list-item-content-head">
                    Project Manager
                  </h3>
                  <p className="joinuspage__position-list-item-content-text">
                    Czytaj więcej
                  </p>
                </div>
              </li>
              <li className="joinuspage__position-list-item">
                <div className="joinuspage__position-list-item-toomb">
                  <img
                    className="joinuspage__position-list-item-toomb-img"
                    src={position6}
                  />
                </div>
                <div className="joinuspage__position-list-item-content">
                  <h3 className="joinuspage__position-list-item-content-head">
                    Flutter developer
                  </h3>
                  <p className="joinuspage__position-list-item-content-text">
                    Czytaj więcej
                  </p>
                </div>
              </li>
            </ul>
          </ParallaxY>
        </Container>
      </section>
      <Benefits />
      <Questions />
      <Footer />
    </>
  )
}
export default joinuspage

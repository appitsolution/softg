import React from "react"
import Container from "./utils/Container"
import photoKamil from "../images/photo-Kamil.jpg"
import photoMichal from "../images/photo-Michal.jpg"
import email from "../images/icon/email.svg"
import linkedin from "../images/icon/linkedin.svg"
import phone from "../images/icon/phone.svg"
import arrowRightBlack from "../images/icon/arrowRightBlack.svg"
import ParallaxY from "./utils/ParallaxY"
const MeetUs = () => {
  return (
    <section className="meetus">
      <Container>
        <ParallaxY>
          <h1 className="meetus-head">Meet Us</h1>
          <ul className="meetus__list">
            <li className="meetus__list-item">
              <div className="meetus__list-item-toomb">
                <img className="meetus__list-item-toomb-img" src={photoKamil} />
                <ul className="meetus__list-item-toomb-list">
                  <li className="meetus__list-item-toomb-list-item">
                    <a className="meetus__list-item-toomb-list-item-link">
                      <img
                        className="meetus__list-item-toomb-list-item-icon"
                        src={email}
                      />
                    </a>
                  </li>
                  <li className="meetus__list-item-toomb-list-item">
                    <a className="meetus__list-item-toomb-list-item-link">
                      <img
                        className="meetus__list-item-toomb-list-item-icon"
                        src={linkedin}
                      />
                    </a>
                  </li>
                  <li className="meetus__list-item-toomb-list-item">
                    <a className="meetus__list-item-toomb-list-item-link">
                      <img
                        className="meetus__list-item-toomb-list-item-icon"
                        src={phone}
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <p className="meetus__list-text">Bussines Partner</p>
              <div className="mettus__list-item-content">
                <h2 className="meetus__list-item-content-head">Kamil Cyrana</h2>
                <p className="meetus__list-item-content-text">
                  I have been passionate about competing since childhood.It
                  turned into practicing various kinds of sports. During
                  adolescence period, my interest was also focused on tracking
                  technology development. I was a great enthusiast of
                  transferring all ideas and inventions into the real use of
                  everyday.
                </p>
                <a className="meetus__list-item-content-link">Read more</a>
              </div>
            </li>
            <li className="meetus__list-item">
              <div className="meetus__list-item-toomb">
                <img
                  className="meetus__list-item-toomb-img"
                  src={photoMichal}
                />
                <ul className="meetus__list-item-toomb-list">
                  <li className="meetus__list-item-toomb-list-item">
                    <img
                      className="meetus__list-item-toomb-list-item-icon"
                      src={email}
                    />
                  </li>
                  <li className="meetus__list-item-toomb-list-item">
                    <img
                      className="meetus__list-item-toomb-list-item-icon"
                      src={linkedin}
                    />
                  </li>
                  <li className="meetus__list-item-toomb-list-item">
                    <img
                      className="meetus__list-item-toomb-list-item-icon"
                      src={phone}
                    />
                  </li>
                </ul>
              </div>
              <p className="meetus__list-text">CEO</p>
              <div className="mettus__list-item-content">
                <h2 className="meetus__list-item-content-head">
                  Michał Czechowski
                </h2>
                <p className="meetus__list-item-content-text">
                  From an early age I am passionate about new technologies. I
                  have been learning programming since the period of primary
                  education. My specialty is PHP framework laravel and Symfony.
                </p>
                <a className="meetus__list-item-content-link">Read more</a>
              </div>
            </li>
          </ul>
          <div className="meetus__buttons">
            <button className="meetus__buttons-button">
              Meet Our Team
              <div className="meetus__buttons-button-block">
                <img
                  className="meetus__buttons-button-block-img"
                  src={arrowRightBlack}
                />
              </div>
            </button>
          </div>
        </ParallaxY>
      </Container>
    </section>
  )
}
export default MeetUs

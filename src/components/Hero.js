import React from "react"
import Container from "./utils/Container"
import logo from "../images/icon/logo.svg"
import prize1 from "../images/icon/prize-1.svg"
import prize2 from "../images/icon/prize-2.svg"
import prize3 from "../images/icon/prize-3.svg"
import prize4 from "../images/icon/prize-4.svg"
import arrowRight from "../images/icon/arrowRight.svg"
const Hero = () => {
  return (
    <>
      <section className="hero">
        <Container>
          <div className="hero__toomb">
            <div className="hero__block">
              <div className="hero__block-logo">
                <img className="hero__block-logo-img" src={logo} />
              </div>
              <div className="hero__block-title">
                <h1 className="hero__block-title-head">
                  Discover{" "}
                  <span className="hero__block-title-head-span">
                    The Soft Gorillas
                  </span>{" "}
                  Difference
                </h1>
                <p className="hero__block-title-description">
                  Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Id
                  itaque aspernatur qui velit quos rem dolor
                </p>
              </div>
              <div className="hero__block-prize">
                <ul className="hero__block-prize-list">
                  <li className="hero__block-prize-list-item">
                    <img
                      className="hero__block-prize-list-item-img"
                      src={prize1}
                    />
                  </li>
                  <li className="hero__block-prize-list-item">
                    <img
                      className="hero__block-prize-list-item-img"
                      src={prize2}
                    />
                  </li>
                  <li className="hero__block-prize-list-item">
                    <img
                      className="hero__block-prize-list-item-img"
                      src={prize3}
                    />
                  </li>
                  <li className="hero__block-prize-list-item">
                    <img
                      className="hero__block-prize-list-item-img"
                      src={prize4}
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className="hero__buttons">
              <button className="hero__buttons-talk">
                Let’s talk about your project
              </button>
              <button className="hero__buttons-about">
                About our company
                <img className="hero__buttons-about-icon" src={arrowRight} />
              </button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
export default Hero

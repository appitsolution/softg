import React from "react"
import Container from "./utils/Container"
import Title from "./utils/Title"
import strelYellow from "../images/icon/strelYellow.svg"
import strelLeft from "../images/icon/strelLeft.svg"
import strelRight from "../images/icon/strelRight.svg"
import ParallaxY from "./utils/ParallaxY"
const DevelopStages = () => {
  return (
    <section className="developstages">
      <Container>
        <p className="services-description">Development stages</p>
        <Title>Software Development Stages</Title>
        <ul className="developstages__list">
          <li className="developstages__list-item">
            <ParallaxY time="0.7" delay="0.1">
              <div className="developstages__list-item-toomb">1</div>
              <h2 className="developstages__list-item-text">
                Business concept analysis
              </h2>
              <img
                className="developstages__list-item-icon"
                src={strelYellow}
              />
            </ParallaxY>
          </li>
          <li className="developstages__list-item">
            <ParallaxY time="0.7" delay="0.5">
              <div className="developstages__list-item-toomb">2</div>
              <h2 className="developstages__list-item-text">
                Creating technical documentation of the project
              </h2>
              <img
                className="developstages__list-item-icon"
                src={strelYellow}
              />
            </ParallaxY>
          </li>
          <li className="developstages__list-item">
            <ParallaxY time="0.7" delay="1">
              <div className="developstages__list-item-toomb">3</div>
              <h2 className="developstages__list-item-text">
                Creating project mockups
              </h2>
              <img
                className="developstages__list-item-icon"
                src={strelYellow}
              />
            </ParallaxY>
          </li>
          <li className="developstages__list-item">
            <ParallaxY time="0.7" delay="1.5">
              <div className="developstages__list-item-toomb">4</div>
              <h2 className="developstages__list-item-text">
                Creating project interfaces
              </h2>
              <img className="developstages__list-item-icon" src={strelRight} />
            </ParallaxY>
          </li>
          <li className="developstages__list-item">
            <ParallaxY time="0.7" delay="2">
              <div className="developstages__list-item-toomb">5</div>
              <h2 className="developstages__list-item-text">
                Technology selection
              </h2>
              <img
                className="developstages__list-item-icon"
                src={strelYellow}
              />
              <img className="developstages__list-item-icon2" src={strelLeft} />
            </ParallaxY>
          </li>
          <li className="developstages__list-item">
            <ParallaxY time="0.7" delay="2.5">
              <div className="developstages__list-item-toomb">6</div>
              <h2 className="developstages__list-item-text">
                Applications programming
              </h2>
              <img
                className="developstages__list-item-icon"
                src={strelYellow}
              />
            </ParallaxY>
          </li>
          <li className="developstages__list-item">
            <ParallaxY time="0.7" delay="3">
              <div className="developstages__list-item-toomb">7</div>
              <h2 className="developstages__list-item-text">Unit tests</h2>
              <img
                className="developstages__list-item-icon"
                src={strelYellow}
              />
            </ParallaxY>
          </li>
          <li className="developstages__list-item">
            <ParallaxY time="0.7" delay="3.5">
              <div className="developstages__list-item-toomb">8</div>
              <h2 className="developstages__list-item-text">
                Server selection and implementation
              </h2>
              <img className="developstages__list-item-icon" />
            </ParallaxY>
          </li>
        </ul>
      </Container>
    </section>
  )
}
export default DevelopStages

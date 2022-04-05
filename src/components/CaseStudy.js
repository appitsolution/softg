import React from "react"
import Container from "./utils/Container"
import Title from "./utils/Title"
import Desktop from "../images/Desktop.jpg"
import Mobile1 from "../images/Mobile1.jpg"
import Mobile2 from "../images/Mobile2.jpg"
import Mobile3 from "../images/Mobile3.jpg"
import Desktop2 from "../images/Desktop2.jpg"
import Mobile4 from "../images/Mobile1-2.jpg"
import Mobile5 from "../images/Mobile2-2.jpg"
import Mobile6 from "../images/Mobile3-2.jpg"
import arrowRight from "../images/icon/arrowRight.svg"
import ParallaxY from "./utils/ParallaxY"

const CaseStudy = () => {
  return (
    <section className="casestudy">
      <Container>
        <ParallaxY position="right">
          <Title color="white">Case Study</Title>
          <ul className="casestudy__list">
            <li className="casestudy__list-item">
              <ul className="casestudy__list-item-images">
                <li className="casestudy__list-item-images-item">
                  <h2 className="casestudy__list-item-images-item-head">
                    Ecommerce
                  </h2>
                  <img
                    className="casestudy__list-item-images-item-img"
                    src={Desktop}
                  />
                  <button className="casestudy__list-item-images-item-button">
                    Ecommerce
                    <img
                      className="casestudy__list-item-images-item-button-icon"
                      src={arrowRight}
                    />
                  </button>
                </li>
                <li className="casestudy__list-item-images-item">
                  <div className="casestudy__list-item-images-item-toomb">
                    <img
                      className="casestudy__list-item-images-item-screen1"
                      src={Mobile1}
                    />
                    <img
                      className="casestudy__list-item-images-item-screen2"
                      src={Mobile2}
                    />
                    <img
                      className="casestudy__list-item-images-item-screen3"
                      src={Mobile3}
                    />
                  </div>
                </li>
              </ul>
            </li>
            <li className="casestudy__list-item">
              <ul className="casestudy__list-item-images2">
                <li className="casestudy__list-item-images2-item">
                  <h2 className="casestudy__list-item-images2-item-head">
                    Web applications
                  </h2>
                  <img
                    className="casestudy__list-item-images2-item-img"
                    src={Desktop2}
                  />
                  <button className="casestudy__list-item-images2-item-button">
                    Web applications
                    <img
                      className="casestudy__list-item-images2-item-button-icon"
                      src={arrowRight}
                    />
                  </button>
                </li>
                <li className="casestudy__list-item-images2-item">
                  <div className="casestudy__list-item-images2-item-toomb">
                    <img
                      className="casestudy__list-item-images2-item-screen1"
                      src={Mobile4}
                    />
                    <img
                      className="casestudy__list-item-images2-item-screen2"
                      src={Mobile5}
                    />
                    <img
                      className="casestudy__list-item-images2-item-screen3"
                      src={Mobile6}
                    />
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </ParallaxY>
      </Container>
    </section>
  )
}
export default CaseStudy

import React from "react"
import Container from "./utils/Container"
import Title from "./utils/Title"
import hire1 from "../images/hire-1.jpg"
import hire2 from "../images/hire-2.jpg"
import hire3 from "../images/hire-3.jpg"
import ParallaxY from "./utils/ParallaxY"
const HireUs = () => {
  return (
    <section className="hireus">
      <Container>
        <ParallaxY>
          <div className="hireus__block">
            <ul className="hireus__block-devops">
              <li className="hireus__block-devops-item">
                <img className="hireus__block-devops-item-img" src={hire1} />
                <div className="hireus__block-devops-item-toomb">
                  <h2 className="hireus__block-devops-item-head">
                    Michał Czechowski
                  </h2>
                  <p className="hireus__block-devops-item-text">CEO</p>
                  <a
                    href="mailto:michael@softgorillas.com"
                    className="hireus__block-devops-item-mail"
                  >
                    michael@softgorillas.com
                  </a>
                </div>
              </li>
              <li className="hireus__block-devops-item">
                <img className="hireus__block-devops-item-img" src={hire2} />
                <div className="hireus__block-devops-item-toomb">
                  <h2 className="hireus__block-devops-item-head">
                    Kamil Cyrana
                  </h2>
                  <p className="hireus__block-devops-item-text">
                    Bussines Partner
                  </p>
                  <a
                    href="mailto:kamil@softgorillas.com"
                    className="hireus__block-devops-item-mail"
                  >
                    kamil@softgorillas.com
                  </a>
                </div>
              </li>
              <li className="hireus__block-devops-item">
                <img className="hireus__block-devops-item-img" src={hire3} />
                <div className="hireus__block-devops-item-toomb">
                  <h2 className="hireus__block-devops-item-head">
                    Krzysztof Malik
                  </h2>
                  <p className="hireus__block-devops-item-text">
                    General Project Manager
                  </p>
                  <a
                    href="mailto:christopher@softgorillas.com"
                    className="hireus__block-devops-item-mail"
                  >
                    christopher@softgorillas.com
                  </a>
                </div>
              </li>
            </ul>
            <div className="hireus__block-form">
              <Title>Hire Us</Title>
              <form className="hireus__block-form-submit">
                <div className="hireus__block-form-submit-toomb">
                  <input
                    className="hireus__block-form-submit-name"
                    type="text"
                    placeholder="Name *"
                  />
                  <input
                    className="hireus__block-form-submit-phone"
                    type="text"
                    placeholder="Phone"
                  />
                </div>
                <input
                  className="hireus__block-form-submit-email"
                  type="email"
                  placeholder="Email *"
                />
                <textarea
                  className="hireus__block-form-submit-message"
                  placeholder="Message *"
                ></textarea>
                <div className="hireus__block-form-submit-privacy-toomb">
                  <label className="hireus__block-form-submit-privacy-label">
                    <input
                      className="hireus__block-form-submit-privacy"
                      type="checkbox"
                    />
                    <p className="hireus__block-form-submit-privacy-text">
                      I accept the Privacy Policy*
                    </p>
                  </label>
                  <button className="hireus__block-form-submit-button">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </ParallaxY>
      </Container>
    </section>
  )
}
export default HireUs

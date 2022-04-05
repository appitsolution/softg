import React from "react"
import Container from "./utils/Container"
import Title from "./utils/Title"
import arrowRightBlack from "../images/icon/arrowRightBlack.svg"
import ParallaxY from "./utils/ParallaxY"

const Questions = () => {
  const openEl = ({ currentTarget }) => {
    currentTarget.children[1].classList.toggle("active")
    currentTarget.parentElement.children[1].classList.toggle("active")
  }
  return (
    <section className="questions">
      <Container>
        <ParallaxY>
          <Title position={"left"}>Frequently Asked Questions</Title>
          <ul className="questions__list">
            <li className="questions__list-item">
              <button className="questions__list-item-button" onClick={openEl}>
                <p className="questions__list-item-button-text">
                  1. Do you consent to the conclusion of the NDA agreement?
                </p>
                <div className="questions__list-item-button-toomb">
                  <img
                    className="questions__list-item-button-toomb-icon"
                    src={arrowRightBlack}
                  />
                </div>
              </button>
              <p className="questions__list-item-text">
                Yes, we sign an NDA (Non-Disclosure Agreement) at the customer's
                request. We can do this at any stage of the process - it is
                entirely up to you.
              </p>
            </li>
            <li className="questions__list-item">
              <button className="questions__list-item-button" onClick={openEl}>
                <p className="questions__list-item-button-text">
                  2. Am I the owner of the ownership and the code of my project?
                </p>
                <div className="questions__list-item-button-toomb">
                  <img
                    className="questions__list-item-button-toomb-icon"
                    src={arrowRightBlack}
                  />
                </div>
              </button>
              <p className="questions__list-item-text">
                Yes, we sign an NDA (Non-Disclosure Agreement) at the customer's
                request. We can do this at any stage of the process - it is
                entirely up to you.
              </p>
            </li>
            <li className="questions__list-item">
              <button className="questions__list-item-button" onClick={openEl}>
                <p className="questions__list-item-button-text">
                  3. Where is your development team located?
                </p>
                <div className="questions__list-item-button-toomb">
                  <img
                    className="questions__list-item-button-toomb-icon"
                    src={arrowRightBlack}
                  />
                </div>
              </button>
              <p className="questions__list-item-text">
                Yes, we sign an NDA (Non-Disclosure Agreement) at the customer's
                request. We can do this at any stage of the process - it is
                entirely up to you.
              </p>
            </li>
            <li className="questions__list-item">
              <button className="questions__list-item-button" onClick={openEl}>
                <p className="questions__list-item-button-text">
                  4. How do you manage communication in different time zones?
                </p>
                <div className="questions__list-item-button-toomb">
                  <img
                    className="questions__list-item-button-toomb-icon"
                    src={arrowRightBlack}
                  />
                </div>
              </button>
              <p className="questions__list-item-text">
                Yes, we sign an NDA (Non-Disclosure Agreement) at the customer's
                request. We can do this at any stage of the process - it is
                entirely up to you.
              </p>
            </li>
            <li className="questions__list-item">
              <button className="questions__list-item-button" onClick={openEl}>
                <p className="questions__list-item-button-text">
                  5. How do you settle with your customers?
                </p>
                <div className="questions__list-item-button-toomb">
                  <img
                    className="questions__list-item-button-toomb-icon"
                    src={arrowRightBlack}
                  />
                </div>
              </button>
              <p className="questions__list-item-text">
                Yes, we sign an NDA (Non-Disclosure Agreement) at the customer's
                request. We can do this at any stage of the process - it is
                entirely up to you.
              </p>
            </li>
            <li className="questions__list-item">
              <button className="questions__list-item-button" onClick={openEl}>
                <p className="questions__list-item-button-text">
                  6. How big is your team?
                </p>
                <div className="questions__list-item-button-toomb">
                  <img
                    className="questions__list-item-button-toomb-icon"
                    src={arrowRightBlack}
                  />
                </div>
              </button>
              <p className="questions__list-item-text">
                Yes, we sign an NDA (Non-Disclosure Agreement) at the customer's
                request. We can do this at any stage of the process - it is
                entirely up to you.
              </p>
            </li>
            <li className="questions__list-item">
              <button className="questions__list-item-button" onClick={openEl}>
                <p className="questions__list-item-button-text">
                  7. Can the code be transferred to another team?
                </p>
                <div className="questions__list-item-button-toomb">
                  <img
                    className="questions__list-item-button-toomb-icon"
                    src={arrowRightBlack}
                  />
                </div>
              </button>
              <p className="questions__list-item-text">
                Yes, we sign an NDA (Non-Disclosure Agreement) at the customer's
                request. We can do this at any stage of the process - it is
                entirely up to you.
              </p>
            </li>
          </ul>
          <form className="questions__form">
            <input
              className="questions__form-message"
              placeholder="What is your question?"
            />
            <button className="questions__form-button">Send</button>
          </form>
        </ParallaxY>
      </Container>
    </section>
  )
}
export default Questions

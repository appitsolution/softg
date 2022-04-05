import React from "react"
import Container from "./utils/Container"
import gorillaWhite from "../images/icon/gorilla-white.svg"
import ParallaxY from "./utils/ParallaxY"
const Share = () => {
  return (
    <section className="share">
      <Container>
        <ParallaxY position="right">
          <div className="share__block">
            <h1 className="share__block-head">We Share Knowledge</h1>
            <p className="share__block-text">
              Subscribe to our{" "}
              <span className="share__block-text-span">newsletter</span> and
              meet the latest news
            </p>
            <form className="share__block-form">
              <div className="share__block-form-block">
                <input
                  className="share__block-form-email"
                  placeholder="Enter your email"
                />
                <button className="share__block-form-button">Subscribe</button>
              </div>
              <label className="share__block-form-policy-toomb">
                <input type="checkbox" className="share__block-form-policy" />
                <p className="share__block-form-policy-text">
                  I accept the Newsletter Terms*
                </p>
              </label>
            </form>
            <img className="share__block-icon" src={gorillaWhite} />
          </div>
        </ParallaxY>
      </Container>
    </section>
  )
}
export default Share

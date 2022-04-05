import React from "react"
import Container from "./utils/Container"
import Title from "./utils/Title"
import benefits1 from "../images/icon/benefits1.svg"
import benefits2 from "../images/icon/benefits2.svg"
import benefits3 from "../images/icon/benefits3.svg"
import benefits4 from "../images/icon/benefits4.svg"
import benefits5 from "../images/icon/benefits5.svg"
import ParallaxY from "./utils/ParallaxY"
const Benefits = () => {
  return (
    <section className="benefits">
      <Container>
        <ParallaxY position={"right"}>
          <p className="benefits-text">BENEFITS</p>
          <Title>Benefits for You</Title>
          <ul className="benefits__list">
            <li className="benefits__list-item">
              <img className="benefits__list-item-img" src={benefits1} />
              <h2 className="benefits__list-item-head">Remote work</h2>
              <p className="benefits__list-item-text">
                If you want - you can work remotely from home.
              </p>
            </li>
            <li className="benefits__list-item">
              <img className="benefits__list-item-img" src={benefits2} />
              <h2 className="benefits__list-item-head">
                Unlimited possibilities
              </h2>
              <p className="benefits__list-item-text">
                Work with different parts of the world.
              </p>
            </li>
            <li className="benefits__list-item">
              <img className="benefits__list-item-img" src={benefits3} />
              <h2 className="benefits__list-item-head">Flexible hours </h2>
              <p className="benefits__list-item-text">
                Adjust your daily schedule to your individual needs.
              </p>
            </li>
            <li className="benefits__list-item">
              <img className="benefits__list-item-img" src={benefits4} />
              <h2 className="benefits__list-item-head">Ambitious team</h2>
              <p className="benefits__list-item-text">
                Write, talk and share knowledge with our ambitious team.
              </p>
            </li>
            <li className="benefits__list-item">
              <img className="benefits__list-item-img" src={benefits5} />
              <h2 className="benefits__list-item-head">
                Developmental projects
              </h2>
              <p className="benefits__list-item-text">
                Work on interesting and developmental projects.
              </p>
            </li>
          </ul>
        </ParallaxY>
      </Container>
    </section>
  )
}
export default Benefits

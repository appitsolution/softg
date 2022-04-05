import React from "react"
import Container from "./utils/Container"
import services1 from "../images/icon/services-1.svg"
import services2 from "../images/icon/services-2.svg"
import services3 from "../images/icon/services-3.svg"
import Title from "./utils/Title"
import ParallaxY from "../components/utils/ParallaxY"
const Services = () => {
  return (
    <section className="services">
      <Container>
        <ParallaxY>
          <p className="services-description">OUR SERVICES</p>
          <Title>Software Development Services</Title>
          <ul className="services__list">
            <li className="services__list-item">
              <div className="services__list-item-toomb">
                <img className="sevices__list-item-toomb-img" src={services1} />
              </div>
              <h2 className="services__list-item-head">
                Implementation of open source ecommerce solutions
              </h2>
              <p className="services__list-item-text">B2B and B2C Ecommerce</p>
              <a className="services__list-item-link">Read more</a>
            </li>
            <li className="services__list-item">
              <div className="services__list-item-toomb">
                <img className="sevices__list-item-toomb-img" src={services2} />
              </div>
              <h2 className="services__list-item-head">
                We develop web applications
              </h2>
              <p className="services__list-item-text">
                Develop in framework Laravel, Symfony, Vue.js
              </p>
              <a className="services__list-item-link">Read more</a>
            </li>
            <li className="services__list-item">
              <div className="services__list-item-toomb">
                <img className="sevices__list-item-toomb-img" src={services3} />
              </div>
              <h2 className="services__list-item-head">
                We develop mobile applications in Flutter technology
              </h2>
              <p className="services__list-item-text">
                Flutter Application Deployment
              </p>
              <a className="services__list-item-link">Read more</a>
            </li>
          </ul>
        </ParallaxY>
      </Container>
    </section>
  )
}
export default Services

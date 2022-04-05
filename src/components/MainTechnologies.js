import React from "react"
import { Link } from "gatsby"
import Container from "./utils/Container"
import Title from "./utils/Title"
import Flutter from "../images/icon/Flutter.svg"
import Vue from "../images/icon/Vue.svg"
import Nuxt2 from "../images/icon/Nuxt2.svg"
import Laravel from "../images/icon/Laravel.svg"
import Digital from "../images/icon/Digital.svg"
import ImgSymfony from "../images/icon/ImgSymfony.svg"
import ParallaxY from "./utils/ParallaxY"
const MainTechnologies = () => {
  return (
    <section className="maintechnologies">
      <Container>
        <ParallaxY position="right">
          <Title>Main Technologies</Title>
          <ul className="maintechnologies__list">
            <li className="maintechnologies__list-item">
              <h2 className="maintechnologies__list-item-head">
                <img
                  className="maintechnologies__list-item-head-icon"
                  src={Flutter}
                />
                Flutter
              </h2>
              <p className="maintechnologies__list-item-text">
                Flutter is a mobile UI framework from Google, designed to create
                high-quality native iOS and Android interfaces in a relatively
                short time. Using Flutter, we write native applications on both
                platforms with the same base code (in Dart).
              </p>
              <Link
                to="/mainTechnologiesPage"
                className="maintechnologies__list-item-link"
              >
                Read more
              </Link>
            </li>
            <li className="maintechnologies__list-item">
              <h2 className="maintechnologies__list-item-head">
                <img
                  className="maintechnologies__list-item-head-icon"
                  src={Vue}
                />
                Vue.js
              </h2>
              <p className="maintechnologies__list-item-text">
                Vue.js is one of the most popular JavaScript frameworks for
                building user interfaces. The framework allows you to create
                both simple components, as well as advanced and scalable SPA
                (Single-Page Application) applications.
              </p>
              <Link
                to="/mainTechnologiesPage"
                className="maintechnologies__list-item-link"
              >
                Read more
              </Link>
            </li>
            <li className="maintechnologies__list-item">
              <h2 className="maintechnologies__list-item-head">
                <img
                  className="maintechnologies__list-item-head-icon"
                  src={Nuxt2}
                />
                Nuxt 2
              </h2>
              <p className="maintechnologies__list-item-text">
                This technology speeds up and facilitates development. It
                distinguishes itself by creating universal applications in which
                HTML is rendered both on the client and server side (NodeJS).
              </p>
              <Link
                to="/mainTechnologiesPage"
                className="maintechnologies__list-item-link"
              >
                Read more
              </Link>
            </li>
            <li className="maintechnologies__list-item">
              <h2 className="maintechnologies__list-item-head">
                <img
                  className="maintechnologies__list-item-head-icon"
                  src={Laravel}
                />
                Laravel
              </h2>
              <p className="maintechnologies__list-item-text">
                Laravel is a framework built on Symfony components. Laravel uses
                Symfony as its framework, but complements it with its logic for
                writing PHP software. The primary domain for Laravel is the
                intuitiveness and the pace of writing software.
              </p>
              <Link
                to="/mainTechnologiesPage"
                className="maintechnologies__list-item-link"
              >
                Read more
              </Link>
            </li>
            <li className="maintechnologies__list-item">
              <h2 className="maintechnologies__list-item-head">
                <img
                  className="maintechnologies__list-item-head-icon"
                  src={ImgSymfony}
                />
                Symfony
              </h2>
              <p className="maintechnologies__list-item-text">
                Symfony is a model technology in php, which is mainly focused on
                creating advanced web applications. When I think about this
                framework, what mainly comes to my mind is its flexibility,
                thanks to a tool called Event Dispatcher.
              </p>
              <Link
                to="/mainTechnologiesPage"
                className="maintechnologies__list-item-link"
              >
                Read more
              </Link>
            </li>
            <li className="maintechnologies__list-item">
              <h2 className="maintechnologies__list-item-head">
                <img
                  className="maintechnologies__list-item-head-icon"
                  src={Digital}
                />
                Digital Product Design
              </h2>
              <p className="maintechnologies__list-item-text">
                User Experience is designing user experiences, User experience
                is to evoke specific reactions...UI design, just like UX design
                is a multitasking approach to the interface problem.
              </p>
              <Link
                to="/mainTechnologiesPage"
                className="maintechnologies__list-item-link"
              >
                Read more
              </Link>
            </li>
          </ul>
        </ParallaxY>
      </Container>
    </section>
  )
}
export default MainTechnologies

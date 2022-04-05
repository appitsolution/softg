import React from "react"
import Title from "../components/utils/Title"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Container from "../components/utils/Container"
import Flutter from "../images/icon/Flutter.svg"
import Vue from "../images/icon/Vue.svg"
import Nuxt2 from "../images/icon/Nuxt2.svg"
import Laravel from "../images/icon/Laravel.svg"
import ImgSymfony from "../images/icon/ImgSymfony.svg"
import Digital from "../images/icon/Digital.svg"
import Path from "../components/utils/Path"
import "../sass/main.scss"
import ParallaxY from "../components/utils/ParallaxY"
const mainTechnologiesPage = () => {
  return (
    <>
      <Header background={"#0c1013"} />
      <section className="maintechnologies-hero">
        <Container>
          <div className="maintechnologies-hero-block">
            <Title color="white">Main Technologies</Title>
          </div>
          <Path
            path={[
              { label: "Home", path: "/" },
              { label: "Main Technologies", path: "/mainTechnologiesPage" },
            ]}
          />
        </Container>
      </section>
      <section className="maintechnologies-page">
        <Container>
          <ParallaxY>
            <ul className="maintechnologies-page__list">
              <li className="maintechnologies-page__list-item">
                <h2 className="maintechnologies-page__list-item-head">
                  <img
                    className="maintechnologies-page__list-item-head-icon"
                    src={Flutter}
                  />
                  Flutter
                </h2>

                <h3 className="maintechnologies-page__list-item-title">
                  Our experiences:
                </h3>
                <p className="maintechnologies-page__list-item-text">
                  We have built Android apps using Kotlin. Building native
                  applications has always been fascinating for us, including how
                  to build the user interface. How did we come across Flutter?
                </p>
                <h3 className="maintechnologies-page__list-item-title">
                  React Native?
                </h3>
                <p className="maintechnologies-page__list-item-text">
                  Our experience with RN is not that good, one feature we didn't
                  like was the heavy reliance on third party libraries. From
                  navigation between screens to using UI components – it
                  requires importing packages to the project.
                </p>
                <h3 className="maintechnologies-page__list-item-title">
                  Let's begin with what Flutter is?
                </h3>
                <p className="maintechnologies-page__list-item-text">
                  Flutter is a mobile UI framework from Google, designed to
                  create high-quality native iOS and Android interfaces in a
                  relatively short time. Using Flutter, we write native
                  applications on both platforms with the same base code (in
                  Dart). For us, Flutter is extremely intuitive and easy to
                  understand, especially the way to build the user interface.
                  All popular widgets standardized by Material Design or iOS
                  from Cupertino are available in Flutter. The documentation for
                  each Flutter widget and class is detailed and understandable
                  to most developers.
                </p>
              </li>

              <li className="maintechnologies-page__list-item">
                <h2 className="maintechnologies-page__list-item-head">
                  <img
                    className="maintechnologies-page__list-item-head-icon"
                    src={Vue}
                  />
                  Vue.js
                </h2>
                <h3 className="maintechnologies-page__list-item-title">
                  Let's begin with what Vue.js is?
                </h3>
                <p className="maintechnologies-page__list-item-text">
                  Vue.js is one of the most popular JavaScript frameworks for
                  building user interfaces. The framework allows you to create
                  both simple components, as well as advanced and scalable SPA
                  (Single-Page Application) applications. Vue.js JavaScript
                  library allows you to create simple web applications based on
                  the Model-View View Model (MVVM), consisting of components.
                  This library is distinguished by many intuitive add-ons and
                  functions that are a great support for software developers.
                  <br />
                  <br />
                  Vue.js is a great alternative to a much more complicated and
                  complex Angular or React. The person responsible for creating
                  Vue.js is Evan You. This is a person known in the world of
                  programmers, who has already worked for Google.
                </p>
                <h3 className="maintechnologies-page__list-item-title">
                  Adventages Vue.js
                </h3>
                <p className="maintechnologies-page__list-item-text">
                  - Open Source license - the framework has a large and
                  constantly growing community of Vue developers and a large
                  number of available libraries.
                  <br />- Efficiency - this framework is one of the most
                  efficient structures written in JavaScript.
                  <br />- Development - Vue.js means flexibility and dynamics
                  that allows the implementation of all kinds of configurators
                  and product catalogs.
                </p>
              </li>
              <li className="maintechnologies-page__list-item">
                <h2 className="maintechnologies-page__list-item-head">
                  <img
                    className="maintechnologies-page__list-item-head-icon"
                    src={Nuxt2}
                  />
                  Nuxt 2
                </h2>
                <p className="maintechnologies-page__list-item-text">
                  This technology speeds up and facilitates development. It
                  distinguishes itself by creating universal applications in
                  which HTML is rendered both on the client and server side
                  (NodeJS). Therefore, Nuxt.js allows you to create systems that
                  combine the advantages of classic websites and Single Page
                  Application (SPA).
                </p>
                <h3 className="maintechnologies-page__list-item-title">
                  Why do we use Nuxt.js
                </h3>
                <p className="maintechnologies-page__list-item-text">
                  - Nuxt gives SEO value with server-side rendering, faster
                  development with auto-generator router. <br />
                  -This JavaScript freamwork - including Vue, was created for
                  the purpose of building SPA (Single Page Applications). SPA,
                  which is only downloaded the first time the page is loaded,
                  which makes navigating between its subpages much faster than a
                  traditional website.
                </p>
              </li>
              <li className="maintechnologies-page__list-item">
                <h2 className="maintechnologies-page__list-item-head">
                  <img
                    className="maintechnologies-page__list-item-head-icon"
                    src={Laravel}
                  />
                  Laravel
                </h2>
                <p className="maintechnologies-page__list-item-text">
                  Laravel is a framework built on Symfony components. Laravel
                  uses Symfony as its framework, but complements it with its
                  logic for writing PHP software. The primary domain for Laravel
                  is the intuitiveness and the pace of writing software.
                  <br />
                  <br />
                  Laravel already provides us with some of the tools necessary
                  for the work. Eloquent ORM or Vue.js the service of which we
                  get out of the box can be examples here. The advantage of
                  Laravel is the pace of writing a code without the need to
                  create complex and extensive code lines.
                  <br />
                  <br />
                  Unlike Symfony, this framework supports system authorization,
                  and our configuration is limited to configuring the database
                  during migration only.
                  <br />
                  <br />
                  As the template engine, Laravel uses the Blade engine. For us,
                  this is a better solution than Twig. At the basic level, both
                  solutions are relatively similar to each other in terms of
                  their operation. The distinguishing feature of Blade is the
                  ability to place the code directly in the file with the
                  template.
                </p>
                <a className="maintechnologies-page__list-item-link">
                  Read more
                </a>
              </li>
              <li className="maintechnologies-page__list-item">
                <h2 className="maintechnologies-page__list-item-head">
                  <img
                    className="maintechnologies-page__list-item-head-icon"
                    src={ImgSymfony}
                  />
                  Symfony
                </h2>
                <p className="maintechnologies-page__list-item-text">
                  Symfony is a model technology in php, which is mainly focused
                  on creating advanced web applications. When I think about this
                  framework, what mainly comes to my mind is its flexibility,
                  thanks to a tool called Event Dispatcher, which enables to
                  extend the functions of an already written code easily. It is
                  worth emphasizing that Symfony has an open-source structure,
                  thanks to which it is perfect for business applications and
                  the applications created on it will be compatible with most
                  platforms and libraries.
                </p>
                <h3 className="maintechnologies-page__list-item-title">
                  Symfony allows you to create software in three ways:
                </h3>
                <p className="maintechnologies-page__list-item-text">
                  - Full Stack – development of the application with various
                  functionalities.
                  <br />- Brick by brick – according to the functionalities you
                  need.
                  <br />- Micro framework – creating specific functionalities in
                  selected projects.
                  <br /> Selection of specific bricks, the so-called components.
                </p>
              </li>
              <li className="maintechnologies-page__list-item">
                <h2 className="maintechnologies-page__list-item-head">
                  <img
                    className="maintechnologies-page__list-item-head-icon"
                    src={Digital}
                  />
                  Digital Product Design
                </h2>
                <p className="maintechnologies-page__list-item-text">
                  UI design, just like UX design is a multitasking approach to
                  the interface problem. UI designer is responsible for the
                  transfer; of the content (multimedia content and materials),
                  proposed layout resulting from the research conducted,
                  creating an attractive set of individual components and a
                  flexible user interface.
                  <br />
                  <br />
                  UX is designing user experiences, User experience is to evoke
                  specific reactions and feelings related to the use of the
                  product. UX is most often used in relation to digital products
                  such as websites, mobile or desktop applications. The correct
                  approach can be divided into appropriate stages including:
                  Analysis & Research of model solutions, User journey - we
                  create a list of user stories, Information architecture - we
                  collect all requirements and together define their priorities.
                  <br />
                  <br />
                  Wirefream – we create an interface at a low detail level,
                  Complete screens designed in Sketch, Figma and delivered to
                  you with documentation.
                </p>
              </li>
            </ul>
          </ParallaxY>
        </Container>
      </section>
      <Footer />
    </>
  )
}
export default mainTechnologiesPage

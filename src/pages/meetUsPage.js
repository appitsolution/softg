import React from "react"
import { Link } from "gatsby"
import Container from "../components/utils/Container"
import Header from "../components/Header"
import photoKamil from "../images/photo-Kamil.jpg"
import photoMichal from "../images/photo-Michal.jpg"
import email from "../images/icon/email.svg"
import linkedin from "../images/icon/linkedin.svg"
import phone from "../images/icon/phone.svg"
import Title from "../components/utils/Title"
import Krystofor from "../images/Krystofor.jpg"
import MainTechnologies from "./../components/MainTechnologies"
import Footer from "../components/Footer"
import HireUs from "../components/HireUs"
import "../sass/main.scss"
import ParallaxY from "../components/utils/ParallaxY"
const meetUsPage = () => {
  return (
    <>
      <section className="meetuspage__hero">
        <div className="meetuspage__hero-toomb">
          <Container>
            <Header />
            <h1 className="meetuspage__hero-toomb-head">
              Soft Gorillas is a{" "}
              <span className="meetuspage__hero-toomb-head-span">modern</span>{" "}
              Polish software house
            </h1>
            <p className="meetuspage__hero-toomb-text">
              „We are passionate about technology. We support our clients and
              educate at every stage of cooperation”
            </p>
          </Container>
        </div>
      </section>
      <section className="meetuspage">
        <Container>
          <Title>People are the key to success</Title>
          <ul className="meetuspage__list">
            <ParallaxY>
              <li className="meetuspage__list-item">
                <div className="meetuspage__list-item-pool">
                  <div className="meetuspage__list-item-toomb">
                    <img
                      className="meetuspage__list-item-toomb-img"
                      src={photoMichal}
                    />
                    <ul className="meetuspage__list-item-toomb-list">
                      <li className="meetuspage__list-item-toomb-list-item">
                        <img
                          className="meetuspage__list-item-toomb-list-item-icon"
                          src={email}
                        />
                      </li>
                      <li className="meetuspage__list-item-toomb-list-item">
                        <img
                          className="meetuspage__list-item-toomb-list-item-icon"
                          src={linkedin}
                        />
                      </li>
                      <li className="meetuspage__list-item-toomb-list-item">
                        <img
                          className="meetuspage__list-item-toomb-list-item-icon"
                          src={phone}
                        />
                      </li>
                    </ul>
                  </div>
                  <p className="meetuspage__list-text">CEO</p>
                </div>
                <div className="mettus__list-item-content">
                  <h2 className="meetuspage__list-item-content-head">
                    Michał Czechowski
                  </h2>
                  <p className="meetuspage__list-item-content-text">
                    From an early age I am passionate about new technologies. I
                    have been learning programming since the period of primary
                    education. My specialty is PHP framework laravel and
                    Symfony. The greatest satisfaction comes from solving
                    clients' business problems, which makes me also improve my
                    skills. During the consultation with the client, I notice
                    the issues and adjust appropriate solutions. I am passionate
                    about playing chess.
                  </p>
                  <Link
                    to="/readmore"
                    className="meetuspage__list-item-content-link"
                  >
                    Read more
                  </Link>
                </div>
              </li>
            </ParallaxY>
            <ParallaxY position="right">
              <li className="meetuspage__list-item">
                <div className="meetuspage__list-item-pool">
                  <div className="meetuspage__list-item-toomb">
                    <img
                      className="meetuspage__list-item-toomb-img"
                      src={photoKamil}
                    />
                    <ul className="meetuspage__list-item-toomb-list">
                      <li className="meetuspage__list-item-toomb-list-item">
                        <a className="meetuspage__list-item-toomb-list-item-link">
                          <img
                            className="meetuspage__list-item-toomb-list-item-icon"
                            src={email}
                          />
                        </a>
                      </li>
                      <li className="meetuspage__list-item-toomb-list-item">
                        <a className="meetuspage__list-item-toomb-list-item-link">
                          <img
                            className="meetuspage__list-item-toomb-list-item-icon"
                            src={linkedin}
                          />
                        </a>
                      </li>
                      <li className="meetuspage__list-item-toomb-list-item">
                        <a className="meetuspage__list-item-toomb-list-item-link">
                          <img
                            className="meetuspage__list-item-toomb-list-item-icon"
                            src={phone}
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <p className="meetuspage__list-text">Bussines Partner</p>
                </div>
                <div className="mettus__list-item-content">
                  <h2 className="meetuspage__list-item-content-head">
                    Kamil Cyrana
                  </h2>
                  <p className="meetuspage__list-item-content-text">
                    I have been passionate about competing since childhood. It
                    turned into practicing various kinds of sports. During
                    adolescence period, my interest was also focused on tracking
                    technology development. I was a great enthusiast of
                    transferring all ideasand inventions into the real use of
                    everyday functioning in the society. I am a graduate of BA
                    studies in the field of Internal Security at WSPIA Rzeszów
                    University and MA studies in HR management also at WSPIA
                    Rzeszów University. I have extensive experience in business
                    management in IT projects and creating project teams.
                    Creates solutions to complex business problems in IT. I
                    personally analyze IT projects and their assumptions in
                    terms of suitability for target customers, model business
                    processes and implement solutions on the market. I have user
                    experience and e-commerce audit skills in terms of verifying
                    the path of the shopping cart processes.I have an ISO / IEC
                    27001 and ISO 27001 certificate.
                  </p>
                  <Link
                    to="/readmore"
                    className="meetuspage__list-item-content-link"
                  >
                    Read more
                  </Link>
                </div>
              </li>
            </ParallaxY>
            <ParallaxY>
              <li className="meetuspage__list-item">
                <div className="meetuspage__list-item-pool">
                  <div className="meetuspage__list-item-toomb">
                    <img
                      className="meetuspage__list-item-toomb-img"
                      src={Krystofor}
                    />
                    <ul className="meetuspage__list-item-toomb-list">
                      <li className="meetuspage__list-item-toomb-list-item">
                        <img
                          className="meetuspage__list-item-toomb-list-item-icon"
                          src={email}
                        />
                      </li>
                      <li className="meetuspage__list-item-toomb-list-item">
                        <img
                          className="meetuspage__list-item-toomb-list-item-icon"
                          src={linkedin}
                        />
                      </li>
                      <li className="meetuspage__list-item-toomb-list-item">
                        <img
                          className="meetuspage__list-item-toomb-list-item-icon"
                          src={phone}
                        />
                      </li>
                    </ul>
                  </div>
                  <p className="meetuspage__list-text">
                    General Project Manager
                  </p>
                </div>
                <div className="mettus__list-item-content">
                  <h2 className="meetuspage__list-item-content-head">
                    Krzysztof Malik
                  </h2>
                  <p className="meetuspage__list-item-content-text">
                    I am a graduate of bachelor's studies in the field of
                    Computer Science and Econometrics at the Faculty of Applied
                    Computer Science at the University of Information Technology
                    and Management based in Rzeszów and MA studies in the field
                    of Computer Science at the Faculty of Applied Computer
                    Science at the University of Information Technology and
                    Management based in Rzeszów. I have experience in the
                    implementation of machine learning algorithms, which I
                    gained while writing my diploma thesis. The subject of my
                    master's thesis was to develop an artificial neural network
                    that allows the classification of a motorcyclist's riding
                    style on the basis of telemetry data provided by a gyroscope
                    and accelerometer, such as angular velocity and tilt angles
                    in the x, y, z axes.
                  </p>
                  <Link
                    to="/readmore"
                    className="meetuspage__list-item-content-link"
                  >
                    Read more
                  </Link>
                </div>
              </li>
            </ParallaxY>
          </ul>
          <MainTechnologies />
        </Container>
      </section>
      <HireUs />
      <Footer />
    </>
  )
}
export default meetUsPage

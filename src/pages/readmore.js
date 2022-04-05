import React from "react"
import Header from "../components/Header"
import Container from "../components/utils/Container"
import Title from "../components/utils/Title"
import Path from "../components/utils/Path"
import photoKamil from "../images/photo-Kamil.jpg"
import photoMichal from "../images/photo-Michal.jpg"
import email from "../images/icon/email.svg"
import linkedin from "../images/icon/linkedin.svg"
import phone from "../images/icon/phone.svg"
import Krystofor from "../images/Krystofor.jpg"
import Footer from "../components/Footer"
import ParallaxY from "../components/utils/ParallaxY"
const readmore = () => {
  return (
    <>
      <Header background={"#0c1013"} />
      <section className="maintechnologies-hero">
        <Container>
          <div className="maintechnologies-hero-block">
            <Title color="white">Read More</Title>
          </div>
          <Path
            path={[
              { label: "Home", path: "/" },
              { label: "Meet Us", path: "/meetUsPage" },
              {
                label: "Read More",
                path: "/readmore",
              },
            ]}
          />
        </Container>
      </section>
      <section className="meetuspage">
        <Container>
          <ParallaxY>
            <Title>People are the key to success</Title>
            <ul
              className="meetuspage__list"
              style={{ flexDirection: "column-reverse" }}
            >
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
                </div>
              </li>
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
                </div>
              </li>
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
                    in the x, y, z axes. I have professional experience as a
                    project manager gained during the implementation of the
                    project "Implementation of electronic medical
                    documentation", the total value of which is PLN
                    4,207,411.76. I implement Agile methodology for the
                    implementation of projects by creating project teams from
                    remote employees (dispersed teams) for individual products
                    resulting from the project, selecting and implementing tools
                    for project organization, such as the ERP system, GIT
                    version control system, text and voice communication tools.
                    I am responsible for monitoring work progress, budget, risk
                    management by keeping a risk register, contact with the
                    client, and solving problems and conflicts in the team.
                  </p>
                </div>
              </li>
            </ul>
          </ParallaxY>
        </Container>
      </section>
      <Footer />
    </>
  )
}
export default readmore

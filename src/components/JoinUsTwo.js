import React from "react"
import Container from "./utils/Container"
import Title from "./utils/Title"
import position1 from "../images/position1.jpg"
import position2 from "../images/position2.jpg"
import position3 from "../images/position3.jpg"
import position4 from "../images/position4.jpg"
import position5 from "../images/position5.jpg"
import position6 from "../images/position6.jpg"
import dealicon from "../images/icon/dealicon.svg"
import fileicon from "../images/icon/fileicon.svg"
import ParallaxY from "./utils/ParallaxY"
const JoinUsTwo = () => {
  const openDeal = () => {
    document.querySelector(".joinustwo__deal").classList.toggle("active")
    document.querySelector(".joinustwo__deal-button").classList.toggle("active")
  }
  return (
    <>
      <section className="joinustwo">
        <ParallaxY position="right">
          <Container>
            <Title>Join Us</Title>
            <form className="joinustwo__form">
              <label className="joinustwo__form-name">
                <input
                  className="joinustwo__form-name-first"
                  placeholder="First Name *"
                  type="text"
                />
                <input
                  className="joinustwo__form-name-last"
                  placeholder="Last Name *"
                  type="text"
                />
              </label>
              <label className="joinustwo__form-tel">
                <input
                  className="joinustwo__form-tel-phone"
                  placeholder="Phone *"
                  type="text"
                />
                <input
                  className="joinustwo__form-tel-address"
                  placeholder="Email address *"
                  type="tel"
                />
              </label>
              <textarea
                className="joinustwo__form-message"
                placeholder="Message "
              ></textarea>
              <label className="joinustwo__form-files">
                <input className="joinustwo__form-files-input" type="file" />
                <p className="joinustwo__form-files-text">
                  Choose a file
                  <img
                    className="joinustwo__form-files-text-icon"
                    src={fileicon}
                  />
                </p>
                <p className="joinustwo__form-files-second">File Upload *</p>
              </label>
              <div className="joinustwo__form-policy">
                <label className="joinustwo__form-policy-checkbox">
                  <input
                    className="joinustwo__form-policy-checkbox-input"
                    type="checkbox"
                  />

                  <p className="joinustwo__form-policy-checkbox-text">
                    I accept the Privacy Policy*
                  </p>
                </label>
                <button className="joinustwo__form-policy-button">Apply</button>
              </div>
            </form>
          </Container>
          <div className="joinustwo__deal">
            <button className="joinustwo__deal-button" onClick={openDeal}>
              <img className="joinustwo__deal-button-img" src={dealicon} />
            </button>
            <div className="joinustwo__deal-content">
              <button
                className="joinustwo__deal-content-button"
                onClick={openDeal}
              >
                <img
                  className="joinustwo__deal-content-button-img"
                  src={dealicon}
                />
                Ukryj
              </button>
              <h3 className="joinustwo__deal-content-head">
                Prosimy dołączyć do aplikacji klauzulę:
              </h3>
              <p className="joinustwo__deal-content-text">
                “Wyrażam zgodę na przetwarzanie moich danych osobowych dla
                potrzeb niezbędnych do realizacji procesu rekrutacji przez firmę
                Soft Gorillas Sp. z o.o. z siedzibą przy ul. Witosa 9B w
                Rzeszowie 35-115 (zgodnie z ustawą z dnia 10 maja 2018 roku o
                ochronie danych osobowych (Dz. Ustaw z 2018, poz. 1000) oraz
                zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE)
                2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób
                fizycznych w związku z przetwarzaniem danych osobowych i w
                sprawie swobodnego przepływu takich danych oraz uchylenia
                dyrektywy 95/46/WE (RODO)”. “Wyrażam zgodę na przetwarzanie
                moich danych osobowych w zakresie przyszłych procesów
                rekrutacyjnych”.
              </p>
            </div>
          </div>
        </ParallaxY>
      </section>
    </>
  )
}
export default JoinUsTwo

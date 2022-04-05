import React from "react"
import Header from "../components/Header"
import Container from "../components/utils/Container"
import Benefits from "../components/Benefits"
import Questions from "../components/Questions"
import JoinUsTwo from "../components/JoinUsTwo"
import prize1 from "../images/icon/prize-1.svg"
import prize2 from "../images/icon/prize-2.svg"
import prize3 from "../images/icon/prize-3.svg"
import prize4 from "../images/icon/prize-4.svg"
import position1 from "../images/position1.jpg"
import position2 from "../images/position2.jpg"
import position3 from "../images/position3.jpg"
import position4 from "../images/position4.jpg"
import position5 from "../images/position5.jpg"
import position6 from "../images/position6.jpg"
import Footer from "../components/Footer"
import ParallaxY from "../components/utils/ParallaxY"
const recruiter = () => {
  return (
    <>
      <section className="recruiter">
        <Header />
        <Container>
          <section className="recruiter__hero">
            <ul className="recruiter__hero__list">
              <li className="recruiter__hero__list-item">
                <div className="recruiter__hero__list-item-card">
                  <div className="joinuspage__position-list-item-toomb">
                    <img
                      className="joinuspage__position-list-item-toomb-img"
                      src={position2}
                    />
                  </div>
                  <div className="joinuspage__position-list-item-content">
                    <h3 className="joinuspage__position-list-item-content-head">
                      Specjalista ds. rekrutacji
                    </h3>
                    <p className="joinuspage__position-list-item-content-text">
                      Czytaj więcej
                    </p>
                  </div>
                </div>
              </li>
              <li className="recruiter__hero__list-item">
                <p className="recruiter__hero__list-item-text">
                  Dołączając do teamu{" "}
                  <span className="recruiter__hero__list-item-text-span">
                    Soft Gorillas
                  </span>{" "}
                  otwierasz przed sobą drzwi do świata rozwoju i
                  technologii.Poznawaj ten świat razem z nami!
                </p>
              </li>
              <li className="recruiter__hero__list-item">
                <ul className="hero__block-prize-list">
                  <li className="hero__block-prize-list-item">
                    <img
                      className="hero__block-prize-list-item-img"
                      src={prize1}
                    />
                  </li>
                  <li className="hero__block-prize-list-item">
                    <img
                      className="hero__block-prize-list-item-img"
                      src={prize2}
                    />
                  </li>
                  <li className="hero__block-prize-list-item">
                    <img
                      className="hero__block-prize-list-item-img"
                      src={prize3}
                    />
                  </li>
                  <li className="hero__block-prize-list-item">
                    <img
                      className="hero__block-prize-list-item-img"
                      src={prize4}
                    />
                  </li>
                </ul>
              </li>
            </ul>
          </section>
        </Container>
      </section>
      <section className="recruiter__doc">
        <Container>
          <ParallaxY>
            <ul className="recruiter__list">
              <li className="recruiter__list-item">
                <h2 className="recruiter__list-item-head">Obowiązki</h2>
                <ul className="recruiter__list-item-info">
                  <li className="recruiter__list-item-info-item">
                    aktywne pozyskiwanie kandydatów na stanowiska
                  </li>
                  <li className="recruiter__list-item-info-item">
                    developerów, stanowiska handlowe, project managerów,
                  </li>
                  <li className="recruiter__list-item-info-item">
                    utrzymywanie pozytywnego wizerunku firmy
                  </li>
                  <li className="recruiter__list-item-info-item">
                    prowadzeniem wstępnych rozmów telefonicznych z kandydatami
                  </li>
                  <li className="recruiter__list-item-info-item">
                    prowadzenie procesów rekrutacyjnych
                  </li>
                  <li className="recruiter__list-item-info-item">
                    budowanie i utrzymywanie długofalowych relacji z kandydatami
                  </li>
                  <li className="recruiter__list-item-info-item">
                    wprowadzenie nowych pracowników do zespołu.
                  </li>
                </ul>
              </li>
              <li className="recruiter__list-item">
                <h2 className="recruiter__list-item-head">Wymagania</h2>
                <ul className="recruiter__list-item-info">
                  <li className="recruiter__list-item-info-item">
                    umiejętność wyszukiwania talentów oraz utrzymania relacji,
                  </li>
                  <li className="recruiter__list-item-info-item">
                    umiejętność prowadzenia rekrutacji,
                  </li>
                  <li className="recruiter__list-item-info-item">
                    koncentrowanie się na rozwiązaniach
                  </li>
                  <li className="recruiter__list-item-info-item">
                    realizowanie postawionych celów
                  </li>
                  <li className="recruiter__list-item-info-item">
                    zorganizowanie własnej pracy i odpowiednie zarządzanie
                    czasem, znajomość branży IT
                  </li>
                  <li className="recruiter__list-item-info-item">
                    znajomość narzędzi do pozyskiwania kandydatów,
                  </li>
                  <li className="recruiter__list-item-info-item">
                    2-letnie doświadczenie na podobnym stanowisku
                  </li>
                  <li className="recruiter__list-item-info-item">
                    znajomość języka angielskiego na poziomie komunikatywnym
                  </li>
                </ul>
              </li>
              <li className="recruiter__list-item">
                <h2 className="recruiter__list-item-head">Oferujemy</h2>
                <ul className="recruiter__list-item-info">
                  <li className="recruiter__list-item-info-item">
                    Dowolna forma współpracy (preferowana B2B)
                  </li>
                  <li className="recruiter__list-item-info-item">
                    Możliwość pracy zdalnej, stacjonarnej, lub hybrydowej
                  </li>
                  <li className="recruiter__list-item-info-item">
                    Służbowy laptop lub komputer stacjonarny oraz stanowisko z
                    dwoma monitorami
                  </li>
                  <li className="recruiter__list-item-info-item">
                    Luxmed / ubezpieczenie NFZ
                  </li>
                  <li className="recruiter__list-item-info-item">
                    Program do którego można zgłaszać inicjatywy, które
                    chcielibyśmy wspomóc
                  </li>
                  <li className="recruiter__list-item-info-item">
                    Dostęp do materiałów edukacyjnych Udemy, Tuts+, Laracast
                  </li>
                  <li className="recruiter__list-item-info-item">
                    Świeża Kawa, Herbata,
                  </li>
                  <li className="recruiter__list-item-info-item">
                    Stawka godzinowa od 20 do 40 zł/h w zależności od twoich
                    umiejętności oraz zaangażowania + Success Fee ( w zależności
                    od skali trudności i czasu).
                  </li>
                </ul>
              </li>
              <li className="recruiter__list-item">
                <h2 className="recruiter__list-item-head">
                  Dodatkowe korzyści
                </h2>
                <ul className="recruiter__list-item-info">
                  <li className="recruiter__list-item-info-item">
                    Premia uznaniowa za dostarczenie projektu z wyprzedzeniem
                  </li>
                  <li className="recruiter__list-item-info-item">
                    Premia uznaniowa za polecenie otrzymane od klienta, dzięki
                    Tobie
                  </li>
                  <li className="recruiter__list-item-info-item">
                    Możliwość pracy w pełnym lub niepełnym wymiarze godzin
                  </li>
                  <li className="recruiter__list-item-info-item">
                    Pracujesz kiedy chcesz i ile chcesz. Najważniejsze jest
                    trzymanie się powierzonego harmonogramu prac.
                  </li>
                </ul>
              </li>
            </ul>
            <button className="recruiter__apply">Apply now!</button>
          </ParallaxY>
        </Container>
      </section>
      <Benefits />
      <JoinUsTwo />
      <Questions />
      <section className="joinuspage__position">
        <Container>
          <ParallaxY position="right">
            <h2 className="joinuspage__position-head">Our open positions</h2>
            <ul className="joinuspage__position-list">
              <li className="joinuspage__position-list-item">
                <div className="joinuspage__position-list-item-toomb">
                  <img
                    className="joinuspage__position-list-item-toomb-img"
                    src={position1}
                  />
                </div>
                <div className="joinuspage__position-list-item-content">
                  <h3 className="joinuspage__position-list-item-content-head">
                    WordPress Developer
                  </h3>
                  <a
                    src="/"
                    className="joinuspage__position-list-item-content-text"
                  >
                    Czytaj więcej
                  </a>
                </div>
              </li>
              <li className="joinuspage__position-list-item">
                <div className="joinuspage__position-list-item-toomb">
                  <img
                    className="joinuspage__position-list-item-toomb-img"
                    src={position2}
                  />
                </div>
                <div className="joinuspage__position-list-item-content">
                  <h3 className="joinuspage__position-list-item-content-head">
                    Specjalista ds. rekrutacji
                  </h3>
                  <p className="joinuspage__position-list-item-content-text">
                    Czytaj więcej
                  </p>
                </div>
              </li>
              <li className="joinuspage__position-list-item">
                <div className="joinuspage__position-list-item-toomb">
                  <img
                    className="joinuspage__position-list-item-toomb-img"
                    src={position3}
                  />
                </div>
                <div className="joinuspage__position-list-item-content">
                  <h3 className="joinuspage__position-list-item-content-head">
                    New Business Development Manager
                  </h3>
                  <p className="joinuspage__position-list-item-content-text">
                    Czytaj więcej
                  </p>
                </div>
              </li>
              <li className="joinuspage__position-list-item">
                <div className="joinuspage__position-list-item-toomb">
                  <img
                    className="joinuspage__position-list-item-toomb-img"
                    src={position4}
                  />
                </div>
                <div className="joinuspage__position-list-item-content">
                  <h3 className="joinuspage__position-list-item-content-head">
                    Full Stack Developer
                  </h3>
                  <p className="joinuspage__position-list-item-content-text">
                    Czytaj więcej
                  </p>
                </div>
              </li>
              <li className="joinuspage__position-list-item">
                <div className="joinuspage__position-list-item-toomb">
                  <img
                    className="joinuspage__position-list-item-toomb-img"
                    src={position5}
                  />
                </div>
                <div className="joinuspage__position-list-item-content">
                  <h3 className="joinuspage__position-list-item-content-head">
                    Project Manager
                  </h3>
                  <p className="joinuspage__position-list-item-content-text">
                    Czytaj więcej
                  </p>
                </div>
              </li>
              <li className="joinuspage__position-list-item">
                <div className="joinuspage__position-list-item-toomb">
                  <img
                    className="joinuspage__position-list-item-toomb-img"
                    src={position6}
                  />
                </div>
                <div className="joinuspage__position-list-item-content">
                  <h3 className="joinuspage__position-list-item-content-head">
                    Flutter developer
                  </h3>
                  <p className="joinuspage__position-list-item-content-text">
                    Czytaj więcej
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
export default recruiter

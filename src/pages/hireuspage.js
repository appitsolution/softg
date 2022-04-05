import React from "react"
import Header from "../components/Header"
import HireUs from "../components/HireUs"
import Footer from "../components/Footer"
import Container from "../components/utils/Container"
import locationoffice from "../images/icon/locationoffice.svg"
import calloffice from "../images/icon/calloffice.svg"
import emailoffice from "../images/icon/emailoffice.svg"
import clockoffice from "../images/icon/clockoffice.svg"
const hireuspage = () => {
  return (
    <>
      <section className="hireuspage__hero">
        <Header background={"#0C1013"} />
        <Container>
          <div className="hireuspage__hero-block">
            <div className="hireuspage__hero-office">
              <h2 className="hireuspage__hero-office-head">Office</h2>
              <ul className="hireuspage__hero-office-list">
                <li className="hireuspage__hero-office-list-item">
                  <img
                    className="hireuspage__hero-office-list-item-img"
                    src={locationoffice}
                  />
                  Aleja Wincentego Witosa 9B, Rzeszów, Polska
                </li>
                <li className="hireuspage__hero-office-list-item">
                  <img
                    className="hireuspage__hero-office-list-item-img"
                    src={calloffice}
                  />
                  WhatsApp +48 535010215
                </li>
                <li className="hireuspage__hero-office-list-item">
                  <img
                    className="hireuspage__hero-office-list-item-img"
                    src={emailoffice}
                  />
                  hello@softgorillas.com
                </li>
                <li className="hireuspage__hero-office-list-item">
                  <img
                    className="hireuspage__hero-office-list-item-img"
                    src={clockoffice}
                  />
                  Mon-Fri 07:00 - 17:00
                </li>
              </ul>
              <div className="hireuspage__hero-address">
                <ul className="hireuspage__hero-address-list">
                  <li className="hireuspage__hero-address-list-item">
                    NIP: 8133856997
                  </li>
                  <li className="hireuspage__hero-address-list-item">
                    REGON: 388472110
                  </li>
                  <li className="hireuspage__hero-address-list-item">
                    KRS: 0000890717
                  </li>
                </ul>
              </div>
            </div>
            <div className="hireuspage__hero-maps">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2562.839822059561!2d21.97344981571634!3d50.033097179420054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473cfba0e28a6453%3A0x46198f3cf7f7c96f!2zQWxlamEgV2luY2VudGVnbyBXaXRvc2EgOUIsIDM1LTExNSBSemVzesOzdywg0J_QvtC70YzRiNCw!5e0!3m2!1sru!2sua!4v1648370505283!5m2!1sru!2sua"
                width="100%"
                height="497"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </Container>
      </section>
      <HireUs />
      <Footer />
    </>
  )
}
export default hireuspage

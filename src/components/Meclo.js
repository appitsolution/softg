import React, { useEffect } from "react"
import Swiper, { Navigation, Autoplay } from "swiper"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import Container from "./utils/Container"
import ParallaxY from "./utils/ParallaxY"
const Meclo = ({
  head,
  naturals = [],
  services = [],
  about = [],
  meclolist = [],
}) => {
  useEffect(() => {
    new Swiper(".swiper", {
      modules: [Navigation, Autoplay],
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: true,
      speed: 500,
      slidesPerView: 1,
      spaceBetween: 32,
    })
  }, [])
  return (
    <>
      <div className="casestudypage__natural">
        <Container>
          <ParallaxY>
            <h2 className="casestudypage__natural-head">{head}</h2>
            <div className="casestudypage__natural-site">
              <div class="swiper">
                <div className="swiper-button-prev"></div>
                <div class="swiper-wrapper">
                  {naturals.map(num => (
                    <div class="swiper-slide">
                      <img
                        className="casestudypage__natural-site-img"
                        src={num}
                      />
                    </div>
                  ))}
                </div>
                <div className="swiper-button-next"></div>

                <div class="swiper-scrollbar"></div>
              </div>
            </div>
            <div className="casestudypage__natural-information">
              <ul className="casestudypage__natural-information-services">
                <li className="casestudypage__natural-information-services-item">
                  Services:
                </li>
                {services.map(num => (
                  <li className="casestudypage__natural-information-services-item">
                    {num}
                  </li>
                ))}
              </ul>
              <ul className="casestudypage__natural-information-about">
                <li className="casestudypage__natural-information-about-item">
                  About:
                </li>
                {about.map(num => (
                  <li className="casestudypage__natural-information-about-item">
                    {num}
                  </li>
                ))}
              </ul>
            </div>
          </ParallaxY>
        </Container>
      </div>
      {meclolist.length !== 0 ? (
        <section className="casestudypage__meclo">
          <Container>
            <ParallaxY position="right">
              <ul className="casestudypage__meclo-list">
                {meclolist.map(num => (
                  <li className="casestudypage__meclo-list-item">
                    <img
                      className="casestudypage__meclo-list-item-img"
                      src={num}
                    />
                  </li>
                ))}
              </ul>
            </ParallaxY>
          </Container>
        </section>
      ) : null}
    </>
  )
}
export default Meclo

import React, { useEffect } from "react"
import Swiper, { Pagination, Autoplay } from "swiper"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import build1 from "../images/build1.svg"
import build2 from "../images/build2.svg"
import build3 from "../images/build3.svg"
import build4 from "../images/build4.svg"
import build5 from "../images/build5.svg"

const Slider = () => {
  useEffect(() => {
    new Swiper(".swiper", {
      modules: [Pagination, Autoplay],
      slidesPerView: 4,
      spaceBetween: 32,
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        bulletElement: "button",
        bulletClass: "imgbuilding__bullets",
        bulletActiveClass: "imgbuilding__bullets--active",
        clickable: true,
        // dynamicBullets: true,
      },
      autoplay: {
        delay: 3000,
      },
      loop: true,
      speed: 1500,
    })
  }, [])
  return (
    <div className="aboutcompany__slider">
      <div class="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img className="imgbuilding__list-item-img" src={build1} />
          </div>
          <div class="swiper-slide">
            <img className="imgbuilding__list-item-img" src={build2} />
          </div>
          <div class="swiper-slide">
            <img className="imgbuilding__list-item-img" src={build3} />
          </div>
          <div class="swiper-slide">
            <img className="imgbuilding__list-item-img" src={build4} />
          </div>
          <div class="swiper-slide">
            <img className="imgbuilding__list-item-img" src={build5} />
          </div>
        </div>
        <div class="swiper-pagination"></div>

        <div class="swiper-scrollbar"></div>
      </div>
    </div>
  )
}
export default Slider

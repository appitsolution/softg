import React from "react"
import Slider from "./Slider"
import ParallaxY from "./utils/ParallaxY"
const ImgBuilding = () => {
  return (
    <section className="imgbuilding">
      <ParallaxY position="right">
        <h1 className="imgbuilding-head">Image Building</h1>
        <Slider />
      </ParallaxY>
    </section>
  )
}
export default ImgBuilding

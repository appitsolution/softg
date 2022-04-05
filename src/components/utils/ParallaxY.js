import React, { useState } from "react"
import { Parallax, ParallaxProvider } from "react-scroll-parallax"

const ParallaxY = ({
  position = "left",
  time = "1.5",
  delay = "0.1",
  children,
}) => {
  const [activeLeft, setActiveLeft] = useState(false)
  const [activeRight, setActiveRight] = useState(false)

  const setEntered = () => {
    if (position === "left") {
      if (activeLeft) {
        return
      } else {
        setActiveLeft(true)
      }
    } else if (position === "right") {
      if (activeRight) {
        return
      } else {
        setActiveRight(true)
      }
    } else {
      return
    }
  }
  const styleLeft = !activeLeft
    ? {
        opacity: 0,
        // transform: "translateX(-100%)",
        transition: `all ${time}s ease-in-out ${delay}s`,
      }
    : {
        opacity: 1,
        // transform: "translateX(0)",
        transition: `all ${time}s ease-in-out ${delay}s`,
      }
  const styleRight = !activeRight
    ? {
        opacity: 0,
        // transform: "translateX(100%)",
        transition: `all ${time}s ease-in-out ${delay}s`,
      }
    : {
        opacity: 1,
        // transform: "translateX(0)",
        transition: `all ${time}s ease-in-out ${delay}s`,
      }
  return (
    <>
      <ParallaxProvider>
        <Parallax onEnter={() => setEntered()} onExit={() => setEntered()}>
          {position === "left" ? <div style={styleLeft}>{children}</div> : null}
          {position === "right" ? (
            <div style={styleRight}>{children}</div>
          ) : null}
        </Parallax>
      </ParallaxProvider>
    </>
  )
}
export default ParallaxY

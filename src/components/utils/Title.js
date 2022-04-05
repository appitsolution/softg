import React from "react"
const Title = ({ position, color, children }) => {
  const array = children
    .split(" ")
    .filter((num, index) => index !== children.split(" ").length - 1 && num)
  return (
    <h1 className="services-head" style={{ textAlign: position, color: color }}>
      {array.join(" ")}{" "}
      <span className="services-head-span">
        {children.split(" ")[children.split(" ").length - 1]}
      </span>
    </h1>
  )
}
export default Title

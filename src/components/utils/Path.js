import React from "react"
import { Link } from "gatsby"
const Path = ({ path }) => {
  return (
    <ul className="path">
      {path.map((num, index) =>
        index === path.length - 1 ? (
          <li className="path-item">
            <Link to={num.path} className="path-item-span">
              {num.label}
            </Link>
          </li>
        ) : (
          <>
            <li className="path-item">
              <Link to={num.path} className="path-item-link">
                {num.label}
              </Link>
            </li>
            <li className="path-item">/</li>
          </>
        )
      )}
    </ul>
  )
}
export default Path
// {path.slice(0, path.length - 1).join("/")}/
//       <span className="path-span">{path[path.length - 1]}</span>

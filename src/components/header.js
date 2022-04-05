import React from "react"
import Container from "./utils/Container"
import { Link } from "gatsby"
import menu from "../images/icon/menu.svg"
import close from "../images/icon/close.svg"
import logotype from "../images/icon/logotyp.svg"
// import "../sass/main.scss"
const Header = ({ background }) => {
  const openMod = ({ currentTarget }) => {
    console.dir(currentTarget)
    document
      .querySelector(".header__navigation-mobile")
      .classList.toggle("active")
  }
  return (
    <>
      <section className="header" style={{ background: background }}>
        <Container>
          <nav className="header__navigation">
            <ul className="header__navigation-menu">
              <li className="header__navigation-menu-item">
                <Link
                  activeClassName="header__navigation-menu-item-link active"
                  to="/meetUsPage/"
                  className="header__navigation-menu-item-link"
                >
                  Meet Us
                </Link>
              </li>
              <li className="header__navigation-menu-item">
                <Link
                  activeClassName="header__navigation-menu-item-link active"
                  to="/casestudypage/"
                  className="header__navigation-menu-item-link"
                >
                  Case Study
                </Link>
              </li>
              <li className="header__navigation-menu-item">
                <Link
                  activeClassName="header__navigation-menu-item-link active"
                  to="/mainTechnologiesPage/"
                  className="header__navigation-menu-item-link"
                >
                  Main Technologies
                </Link>
              </li>
              <li className="header__navigation-menu-item">
                <Link
                  activeClassName="header__navigation-menu-item-link active"
                  to="/loveContent/"
                  className="header__navigation-menu-item-link"
                >
                  Love the Content
                </Link>
              </li>
              <li className="header__navigation-menu-item">
                <Link
                  activeClassName="header__navigation-menu-item-link active"
                  to="/joinuspage/"
                  className="header__navigation-menu-item-link"
                >
                  Join Us
                </Link>
              </li>
              <li className="header__navigation-menu-item">
                <Link
                  to="/hireuspage/"
                  activeClassName="header__navigation-menu-item-link active"
                  className="header__navigation-menu-item-link"
                >
                  Hire Us
                </Link>
              </li>
            </ul>
            <ul className="header__navigation-lang">
              <li className="header__navigation-lang-item">
                <button className="header__navigation-lang-item-link active">
                  EN
                </button>
              </li>
              <li className="header__navigation-lang-item">
                <button className="header__navigation-lang-item-link">
                  PL
                </button>
              </li>
              <li className="header__navigation-lang-item">
                <button className="header__navigation-lang-item-link">
                  DE
                </button>
              </li>
            </ul>
          </nav>
          <div className="header__navigation-mobile-floor">
            <Link to="/" className="header__navigation-mobile-floor-link">
              <img
                className="header__navigation-mobile-floor-logotype"
                src={logotype}
              />
            </Link>
            <button
              className="header__navigation-mobile-floor-button"
              onClick={openMod}
            >
              <img
                className="header__navigation-mobile-floor-open"
                src={menu}
              />
            </button>
          </div>
          <div className="header__navigation-mobile">
            <button
              className="header__navigation-mobile-close"
              onClick={openMod}
            >
              <img
                className="header__navigation-mobile-close-icon"
                src={close}
              />
            </button>
            <ul className="header__navigation-mobile-menu">
              <li className="header__navigation-mobile-menu-item">
                <Link
                  activeClassName="header__navigation-mobile-menu-item-link active"
                  to="/meetUsPage"
                  className="header__navigation-mobile-menu-item-link"
                >
                  Meet Us
                </Link>
              </li>
              <li className="header__navigation-mobile-menu-item">
                <Link
                  activeClassName="header__navigation-mobile-menu-item-link active"
                  to="/casestudypage"
                  className="header__navigation-mobile-menu-item-link"
                >
                  Case Study
                </Link>
              </li>
              <li className="header__navigation-mobile-menu-item">
                <Link
                  activeClassName="header__navigation-mobile-menu-item-link active"
                  to="/mainTechnologiesPage"
                  className="header__navigation-mobile-menu-item-link"
                >
                  Main Technologies
                </Link>
              </li>
              <li className="header__navigation-mobile-menu-item">
                <Link
                  activeClassName="header__navigation-mobile-menu-item-link active"
                  to="/loveContent"
                  className="header__navigation-mobile-menu-item-link"
                >
                  Love the Content
                </Link>
              </li>
              <li className="header__navigation-mobile-menu-item">
                <Link
                  activeClassName="header__navigation-mobile-menu-item-link active"
                  to="/joinuspage"
                  className="header__navigation-mobile-menu-item-link"
                >
                  Join Us
                </Link>
              </li>
              <li className="header__navigation-mobile-menu-item">
                <Link
                  to="/hireuspage"
                  activeClassName="header__navigation-mobile-menu-item-link active"
                  className="header__navigation-mobile-menu-item-link"
                >
                  Hire Us
                </Link>
              </li>
            </ul>
            <ul className="header__navigation-mobile-lang">
              <li className="header__navigation-mobile-lang-item">
                <button className="header__navigation-mobile-lang-item-link active">
                  EN
                </button>
              </li>
              <li className="header__navigation-mobile-lang-item">
                <button className="header__navigation-mobile-lang-item-link">
                  PL
                </button>
              </li>
              <li className="header__navigation-mobile-lang-item">
                <button className="header__navigation-mobile-lang-item-link">
                  DE
                </button>
              </li>
            </ul>
          </div>
        </Container>
      </section>
    </>
  )
}
export default Header

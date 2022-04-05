import React from "react"
import { Link } from "gatsby"
import Container from "./utils/Container"
import footerlogo from "../images/icon/footerlogo.svg"
import linkedinfooter from "../images/icon/linkedinfooter.svg"
import mediumfooter from "../images/icon/mediumfooter.svg"
import githubfooter from "../images/icon/githubfooter.svg"
import instagramfooter from "../images/icon/instagramfooter.svg"
import twiterfooter from "../images/icon/twiterfooter.svg"
import tumblrfooter from "../images/icon/tumblrfooter.svg"
import facebookfooter from "../images/icon/facebookfooter.svg"
const Footer = () => {
  return (
    <section className="footer">
      <Container>
        <ul className="footer__list">
          <li className="footer__list-item">
            <Link to="/">
              <img className="footer__list-item-logo" src={footerlogo} />
            </Link>
          </li>
          <li className="footer__list-item">
            <ul className="footer__list-item-office">
              <li className="footer__list-item-office-item">
                <a className="footer__list-item-office-item-link">Office</a>
              </li>
              <li className="footer__list-item-office-item">
                <p className="footer__list-item-office-item-address">
                  Aleja Wincentego Witosa 9B Rzeszów, Poland
                </p>
                <p className="footer__list-item-office-item-text">
                  NIP: 8133856997 REGON: 388472110 KRS: 0000890717
                </p>
              </li>
            </ul>
          </li>
          <li className="footer__list-item">
            <ul className="footer__list-item-meetus">
              <li className="footer__list-item-meetus-item">
                <a className="footer__list-item-meetus-item-link">Meet Us</a>
              </li>
              <li className="footer__list-item-meetus-item">
                <a className="footer__list-item-meetus-item-link">Our team</a>
              </li>
              <li className="footer__list-item-meetus-item">
                <a className="footer__list-item-meetus-item-link">Stages </a>
              </li>
              <li className="footer__list-item-meetus-item">
                <a className="footer__list-item-meetus-item-link">Services</a>
              </li>
              <li className="footer__list-item-meetus-item">
                <a className="footer__list-item-meetus-item-link">
                  Technologies
                </a>
              </li>
            </ul>
          </li>
          <li className="footer__list-item">
            <ul className="footer__list-item-meetus">
              <li className="footer__list-item-meetus-item">
                <a className="footer__list-item-meetus-item-link">
                  Our Content
                </a>
              </li>
              <li className="footer__list-item-meetus-item">
                <a className="footer__list-item-meetus-item-link">Blog</a>
              </li>
              <li className="footer__list-item-meetus-item">
                <a className="footer__list-item-meetus-item-link">Medium</a>
              </li>
              <li className="footer__list-item-meetus-item">
                <a className="footer__list-item-meetus-item-link">FAQ</a>
              </li>
            </ul>
          </li>
          <li className="footer__list-item">
            <ul className="footer__list-item-meetus">
              <li className="footer__list-item-meetus-item">
                <a className="footer__list-item-meetus-item-link">Case Study</a>
              </li>
              <li className="footer__list-item-meetus-item">
                <a className="footer__list-item-meetus-item-link">Ecommerce</a>
              </li>
              <li className="footer__list-item-meetus-item">
                <a className="footer__list-item-meetus-item-link">Mobile App</a>
              </li>
              <li className="footer__list-item-meetus-item">
                <a className="footer__list-item-meetus-item-link">Webpages</a>
              </li>
            </ul>
          </li>
          <li className="footer__list-item">
            <ul className="footer__list-item-meetus">
              <li className="footer__list-item-meetus-item">
                <a className="footer__list-item-meetus-item-link">Join Us</a>
              </li>
              <li className="footer__list-item-meetus-item">
                <a className="footer__list-item-meetus-item-link">Stanowisko</a>
              </li>
              <li className="footer__list-item-meetus-item">
                <a className="footer__list-item-meetus-item-link">Stanowisko</a>
              </li>
              <li className="footer__list-item-meetus-item">
                <a className="footer__list-item-meetus-item-link">Stanowisko</a>
              </li>
            </ul>
          </li>
          <li className="footer__list-item">
            <ul className="footer__list-item-social">
              <li className="footer__list-item-social-item">
                <a className="footer__list-item-social-item-link">
                  <img
                    className="footer__list-item-social-item-link-img"
                    src={linkedinfooter}
                  />
                </a>
              </li>
              <li className="footer__list-item-social-item">
                <a className="footer__list-item-social-item-link">
                  <img
                    className="footer__list-item-social-item-link-img"
                    src={mediumfooter}
                  />
                </a>
              </li>
              <li className="footer__list-item-social-item">
                <a className="footer__list-item-social-item-link">
                  <img
                    className="footer__list-item-social-item-link-img"
                    src={githubfooter}
                  />
                </a>
              </li>
              <li className="footer__list-item-social-item">
                <a className="footer__list-item-social-item-link">
                  <img
                    className="footer__list-item-social-item-link-img"
                    src={instagramfooter}
                  />
                </a>
              </li>
              <li className="footer__list-item-social-item">
                <a className="footer__list-item-social-item-link">
                  <img
                    className="footer__list-item-social-item-link-img"
                    src={twiterfooter}
                  />
                </a>
              </li>
              <li className="footer__list-item-social-item">
                <a className="footer__list-item-social-item-link">
                  <img
                    className="footer__list-item-social-item-link-img"
                    src={tumblrfooter}
                  />
                </a>
              </li>
              <li className="footer__list-item-social-item">
                <a className="footer__list-item-social-item-link">
                  <img
                    className="footer__list-item-social-item-link-img"
                    src={facebookfooter}
                  />
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </Container>
    </section>
  )
}
export default Footer

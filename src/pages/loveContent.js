import React from "react"
import Header from "../components/Header"
import Title from "../components/utils/Title"
import Container from "../components/utils/Container"
import Path from "../components/utils/Path"
import blogNav from "../images/icon/blog-nav.svg"
import blog1 from "../images/blog1.jpg"
import blog2 from "../images/blog2.jpg"
import blog3 from "../images/blog3.jpg"
import arrowRightBlack from "../images/icon/arrowRightBlack.svg"
import Share from "../components/Share"
import Questions from "../components/Questions"
import Footer from "../components/Footer"
import ParallaxY from "../components/utils/ParallaxY"
const loveContent = () => {
  return (
    <>
      <Header background={"#0c1013"} />
      <section className="maintechnologies-hero">
        <Container>
          <div
            className="maintechnologies-hero-block"
            style={{ flexDirection: "column", gap: "15px" }}
          >
            <Title color="white">Love the Content</Title>
            <p className="lovecontent-text">Follow Us on Medium</p>
            <img className="lovecontent-img" src={blogNav} />
          </div>
          <Path
            path={[
              { label: "Home", path: "/" },
              { label: "Love the Content", path: "/loveContent" },
            ]}
          />
        </Container>
      </section>
      <section className="lovecontent-content">
        <Container>
          <ParallaxY>
            <ul className="blog__list">
              <li className="blog__list-item">
                <div className="blog__list-item-info">
                  <ul className="blog__list-item-info-data">
                    <li className="blog__list-item-info-data-item">
                      Oct 11, 2021
                    </li>
                    <li className="blog__list-item-info-data-item">
                      4 min read
                    </li>
                  </ul>
                  <h2 className="blog__list-item-info-head">
                    Reasons to work with Project Manager
                  </h2>
                  <p className="blog__list-item-info-text">
                    Person who is responsible for planning, monitoring and
                    executing projects. Project manager is very useful
                    especially when a company is dealing with huge projects and
                    big team.
                  </p>
                  <ul className="blog__list-item-info-tags">
                    <li className="blog__list-item-info-tags-item">
                      #Project Manager
                    </li>
                    <li className="blog__list-item-info-tags-item">
                      #IT bussines
                    </li>
                  </ul>
                </div>
                <div className="blog__list-item-images">
                  <img className="blog__list-item-images-img" src={blog1} />
                </div>
              </li>
              <li className="blog__list-item">
                <div className="blog__list-item-info">
                  <ul className="blog__list-item-info-data">
                    <li className="blog__list-item-info-data-item">
                      Oct 11, 2021
                    </li>
                    <li className="blog__list-item-info-data-item">
                      4 min read
                    </li>
                  </ul>
                  <h2 className="blog__list-item-info-head">
                    What to consider while creating your website?
                  </h2>
                  <p className="blog__list-item-info-text">
                    Nowadays internet presence is a must-have for almost all
                    businesses, even if your product is very hard to showcase or
                    your industry is very specific.
                  </p>
                  <ul className="blog__list-item-info-tags">
                    <li className="blog__list-item-info-tags-item">
                      #Project Manager
                    </li>
                    <li className="blog__list-item-info-tags-item">
                      #IT bussines
                    </li>
                  </ul>
                </div>
                <div className="blog__list-item-images">
                  <img className="blog__list-item-images-img" src={blog2} />
                </div>
              </li>
              <li className="blog__list-item">
                <div className="blog__list-item-info">
                  <ul className="blog__list-item-info-data">
                    <li className="blog__list-item-info-data-item">
                      Oct 11, 2021
                    </li>
                    <li className="blog__list-item-info-data-item">
                      4 min read
                    </li>
                  </ul>
                  <h2 className="blog__list-item-info-head">
                    Fixed price vs Time and materials - which model to choode?
                  </h2>
                  <p className="blog__list-item-info-text">
                    When cooperating with a software house you need to know
                    which pricing model to choose so your project will be done
                    according to your goals.
                  </p>
                  <ul className="blog__list-item-info-tags">
                    <li className="blog__list-item-info-tags-item">
                      #Project Manager
                    </li>
                    <li className="blog__list-item-info-tags-item">
                      #IT bussines
                    </li>
                  </ul>
                </div>
                <div className="blog__list-item-images">
                  <img className="blog__list-item-images-img" src={blog3} />
                </div>
              </li>
              <li className="blog__list-item">
                <div className="blog__list-item-info">
                  <ul className="blog__list-item-info-data">
                    <li className="blog__list-item-info-data-item">
                      Oct 11, 2021
                    </li>
                    <li className="blog__list-item-info-data-item">
                      4 min read
                    </li>
                  </ul>
                  <h2 className="blog__list-item-info-head">
                    Reasons to work with Project Manager
                  </h2>
                  <p className="blog__list-item-info-text">
                    Person who is responsible for planning, monitoring and
                    executing projects. Project manager is very useful
                    especially when a company is dealing with huge projects and
                    big team.
                  </p>
                  <ul className="blog__list-item-info-tags">
                    <li className="blog__list-item-info-tags-item">
                      #Project Manager
                    </li>
                    <li className="blog__list-item-info-tags-item">
                      #IT bussines
                    </li>
                  </ul>
                </div>
                <div className="blog__list-item-images">
                  <img className="blog__list-item-images-img" src={blog1} />
                </div>
              </li>
              <li className="blog__list-item">
                <div className="blog__list-item-info">
                  <ul className="blog__list-item-info-data">
                    <li className="blog__list-item-info-data-item">
                      Oct 11, 2021
                    </li>
                    <li className="blog__list-item-info-data-item">
                      4 min read
                    </li>
                  </ul>
                  <h2 className="blog__list-item-info-head">
                    What to consider while creating your website?
                  </h2>
                  <p className="blog__list-item-info-text">
                    Nowadays internet presence is a must-have for almost all
                    businesses, even if your product is very hard to showcase or
                    your industry is very specific.
                  </p>
                  <ul className="blog__list-item-info-tags">
                    <li className="blog__list-item-info-tags-item">
                      #Project Manager
                    </li>
                    <li className="blog__list-item-info-tags-item">
                      #IT bussines
                    </li>
                  </ul>
                </div>
                <div className="blog__list-item-images">
                  <img className="blog__list-item-images-img" src={blog2} />
                </div>
              </li>
              <li className="blog__list-item">
                <div className="blog__list-item-info">
                  <ul className="blog__list-item-info-data">
                    <li className="blog__list-item-info-data-item">
                      Oct 11, 2021
                    </li>
                    <li className="blog__list-item-info-data-item">
                      4 min read
                    </li>
                  </ul>
                  <h2 className="blog__list-item-info-head">
                    Fixed price vs Time and materials - which model to choode?
                  </h2>
                  <p className="blog__list-item-info-text">
                    When cooperating with a software house you need to know
                    which pricing model to choose so your project will be done
                    according to your goals.
                  </p>
                  <ul className="blog__list-item-info-tags">
                    <li className="blog__list-item-info-tags-item">
                      #Project Manager
                    </li>
                    <li className="blog__list-item-info-tags-item">
                      #IT bussines
                    </li>
                  </ul>
                </div>
                <div className="blog__list-item-images">
                  <img className="blog__list-item-images-img" src={blog3} />
                </div>
              </li>
              <li className="blog__list-item">
                <div className="blog__list-item-info">
                  <ul className="blog__list-item-info-data">
                    <li className="blog__list-item-info-data-item">
                      Oct 11, 2021
                    </li>
                    <li className="blog__list-item-info-data-item">
                      4 min read
                    </li>
                  </ul>
                  <h2 className="blog__list-item-info-head">
                    Reasons to work with Project Manager
                  </h2>
                  <p className="blog__list-item-info-text">
                    Person who is responsible for planning, monitoring and
                    executing projects. Project manager is very useful
                    especially when a company is dealing with huge projects and
                    big team.
                  </p>
                  <ul className="blog__list-item-info-tags">
                    <li className="blog__list-item-info-tags-item">
                      #Project Manager
                    </li>
                    <li className="blog__list-item-info-tags-item">
                      #IT bussines
                    </li>
                  </ul>
                </div>
                <div className="blog__list-item-images">
                  <img className="blog__list-item-images-img" src={blog1} />
                </div>
              </li>
              <li className="blog__list-item">
                <div className="blog__list-item-info">
                  <ul className="blog__list-item-info-data">
                    <li className="blog__list-item-info-data-item">
                      Oct 11, 2021
                    </li>
                    <li className="blog__list-item-info-data-item">
                      4 min read
                    </li>
                  </ul>
                  <h2 className="blog__list-item-info-head">
                    What to consider while creating your website?
                  </h2>
                  <p className="blog__list-item-info-text">
                    Nowadays internet presence is a must-have for almost all
                    businesses, even if your product is very hard to showcase or
                    your industry is very specific.
                  </p>
                  <ul className="blog__list-item-info-tags">
                    <li className="blog__list-item-info-tags-item">
                      #Project Manager
                    </li>
                    <li className="blog__list-item-info-tags-item">
                      #IT bussines
                    </li>
                  </ul>
                </div>
                <div className="blog__list-item-images">
                  <img className="blog__list-item-images-img" src={blog2} />
                </div>
              </li>
              <li className="blog__list-item">
                <div className="blog__list-item-info">
                  <ul className="blog__list-item-info-data">
                    <li className="blog__list-item-info-data-item">
                      Oct 11, 2021
                    </li>
                    <li className="blog__list-item-info-data-item">
                      4 min read
                    </li>
                  </ul>
                  <h2 className="blog__list-item-info-head">
                    Fixed price vs Time and materials - which model to choode?
                  </h2>
                  <p className="blog__list-item-info-text">
                    When cooperating with a software house you need to know
                    which pricing model to choose so your project will be done
                    according to your goals.
                  </p>
                  <ul className="blog__list-item-info-tags">
                    <li className="blog__list-item-info-tags-item">
                      #Project Manager
                    </li>
                    <li className="blog__list-item-info-tags-item">
                      #IT bussines
                    </li>
                  </ul>
                </div>
                <div className="blog__list-item-images">
                  <img className="blog__list-item-images-img" src={blog3} />
                </div>
              </li>
            </ul>
            <button className="blog-button">
              See more
              <div className="blog-button-block">
                <img className="blog-button-block-img" src={arrowRightBlack} />
              </div>
            </button>
          </ParallaxY>
        </Container>
      </section>
      <Share />
      <Questions />
      <Footer />
    </>
  )
}
export default loveContent

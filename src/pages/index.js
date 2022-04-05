import * as React from "react"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Services from "../components/Services"
import MeetUs from "../components/MeetUs"
import DevelopStages from "../components/DevelopStages"
import MainTechnologies from "../components/MainTechnologies"
import HireUs from "../components/HireUs"
import WorkFor from "../components/WorkFor"
import Blog from "../components/Blog"
import Share from "../components/Share"
import Questions from "../components/Questions"
import ImgBuilding from "../components/ImgBuilding"
import Footer from "../components/Footer"
import CaseStudy from "../components/CaseStudy"
import "../sass/main.scss"

const IndexPage = () => (
  <>
    <Header background={"#0c1013"} />
    <Hero />
    <Services />
    <MeetUs />
    <CaseStudy />
    <DevelopStages />
    <MainTechnologies />
    <HireUs />
    <WorkFor />
    <Blog />
    <Share />
    <Questions />
    <ImgBuilding />
    <Footer />
  </>
)

export default IndexPage

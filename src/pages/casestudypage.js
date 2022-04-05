import React from "react"
import Container from "../components/utils/Container"
import Header from "../components/Header"
import Title from "../components/utils/Title"
import {
  site1,
  site2,
  site3,
  natural1,
  natural2,
  natural3,
  meclo1,
  meclo2,
  meclo3,
  meclo4,
  meclo5,
  photoMeclo1,
  photoMeclo2,
  photoMeclo3,
  photoMeclo4,
  photoMeclo5,
  photoMeclo6,
  photoMeclo7,
  photoMeclo8,
  photoMeclo9,
  photoMeclo10,
  photoMeclo11,
  screen1,
  screen2,
  screen3,
  screen4,
  screen5,
  photoMeble1,
  photoMeble2,
  photoMeble3,
  photoMeble4,
  meble1,
  meble2,
  meble3,
  meble4,
  meble5,
  photoGlobalo1,
  photoGlobalo2,
  photoGlobalo3,
  photoGlobalo4,
  photoGlobalo5,
  photoGlobalo6,
  photoGlobalo7,
  photoGlobalo8,
  photoGlobalo9,
  photoGlobalo10,
  globalo1,
  globalo2,
  globalo3,
  globalo4,
  globalo5,
  photoMedorto,
  photoNazwa,
} from "../components/exportImgCase"
import Meclo from "../components/Meclo"
import HireUs from "../components/HireUs"
import Footer from "../components/Footer"
import ParallaxY from "../components/utils/ParallaxY"
const casestudypage = () => {
  return (
    <>
      <Header background={"#0c1013"} />
      <section className="casestudypage__hero">
        <Title color={"white"}>Case Study</Title>
      </section>
      <section className="casestudypage">
        <Container>
          <ParallaxY>
            <ul className="casestudypage__site">
              <li className="casestudypage__site-item">
                <img className="casestudypage__site-item-img" src={site1} />
                <p className="casestudypage__site-item-text">Ecommerce </p>
              </li>
              <li className="casestudypage__site-item">
                <img className="casestudypage__site-item-img" src={site2} />
                <p className="casestudypage__site-item-text">
                  Web Applications
                </p>
              </li>
              <li className="casestudypage__site-item">
                <img className="casestudypage__site-item-img" src={site3} />
                <p className="casestudypage__site-item-text">
                  Mobile Applications
                </p>
              </li>
            </ul>
          </ParallaxY>
        </Container>
        <Meclo
          head="BIOANKO - natural medicine, dietetics"
          naturals={[natural1, natural2, natural3]}
          services={[
            "Consulting",
            "Product Design",
            "UX Design",
            "Frontend Development",
            "Backend Development",
          ]}
          about={[
            "Building a modern online shop with healthy food, supplements etc.",
            "An e-commerce platform with such a wide choice of the products requires designing simple and well-planned navigation. Online shop of this type targets customers with various purchasing customs and interests, that is why it should be integrated with multiple payment systems and business tools.",

            "We developed the online store on the SAAS Shoper environment. Our experts took care of graphic template rebranding and implementing. The best of our web designers and programmers worked on BioAnko e-commerce platform styling and HTML and CSS improvements. We integrated business tools, set up all payment, auction features and social media accounts for the client. In this online shop we implemented:  PayPal, Przelewy24, Allegro, Amazon, New Template, Blog configuration  Chat Messanger,  PWA, SEO, Inpost courier,  Delivery platform,  integration with a warehouse - XML file.",
          ]}
          meclolist={[meclo1, meclo2, meclo3, meclo4, meclo5]}
        />
        <Meclo
          head="Meclo"
          naturals={[
            photoMeclo1,
            photoMeclo2,
            photoMeclo3,
            photoMeclo4,
            photoMeclo5,
            photoMeclo6,
            photoMeclo7,
            photoMeclo8,
            photoMeclo9,
            photoMeclo10,
            photoMeclo11,
          ]}
          services={[
            "Consulting",
            "Product Design",
            "UX Design",
            "Frontend Development",
            "Backend Development",
          ]}
          about={[
            "Lorem ipsum dolor sit amet. Aut amet porro sed esse eveniet qui tenetur impedit et quae repudiandae. Id dignissimos libero id fugit expedita aut quae deserunt ut impedit necessitatibus in esse odio non consequuntur ipsum. Qui quaerat magnam ut amet totam ut voluptate consequuntur.",
            "Id dicta culpa est laborum impedit a consequatur quia. Ea deleniti molestiae et repudiandae voluptatem et minus necessitatibus cum dolorum pariatur qui obcaecati quaerat et consequatur itaque eum laboriosam soluta. Aut pariatur eligendi et voluptatem doloribus qui voluptates maiores id quia dolor sed dolor fugiat.",
            "Lorem ipsum dolor sit amet. Aut amet porro sed esse eveniet qui tenetur impedit et quae repudiandae. Id dignissimos libero id fugit expedita aut quae deserunt ut impedit necessitatibus in esse odio non consequuntur ipsum.",
          ]}
          meclolist={[screen1, screen2, screen3, screen4, screen5]}
        />
        <Meclo
          head="Meble-Bogart.pl  -  furniture industry"
          naturals={[photoMeble1, photoMeble2, photoMeble3, photoMeble4]}
          services={[
            "Consulting",
            "Frontend Development",
            "Backend Development",
          ]}
          about={[
            "The system was created in 2011. Online shop has been written in old version of PHP (PHP 5.4). Code required modernization and optimization.",
            "We constantly develop and repair the system for Bogart. Ecommerce is based on the deprecated version of Php 5.4. During the ongoing work, we upgrade the system versions, try to distinguish new functionalities and rewrite them in the appropriate frames.When creating online shop versions for new markets, we follow a minimalistic approach. We develop in Sylius environment and add crucial functionalities that ensure the best user experience without complicating the purchasing process.We maintain and update Bogart e-commerce system to keep it fully functional and up to date.",
          ]}
          meclolist={[meble1, meble2, meble3, meble4, meble5]}
        />
        <Meclo
          head="GLOBALO"
          naturals={[
            photoGlobalo1,
            photoGlobalo2,
            photoGlobalo3,
            photoGlobalo4,
            photoGlobalo5,
            photoGlobalo6,
            photoGlobalo7,
            photoGlobalo8,
            photoGlobalo9,
            photoGlobalo10,
          ]}
          services={[
            "Consulting",
            "Frontend Development",
            "Backend Development",
          ]}
          about={[
            "Lorem ipsum dolor sit amet. Aut amet porro sed esse eveniet qui tenetur impedit et quae repudiandae. Id dignissimos libero id fugit expedita aut quae deserunt ut impedit necessitatibus in esse odio non consequuntur ipsum. Qui quaerat magnam ut amet totam ut voluptate consequuntur.",
            "Id dicta culpa est laborum impedit a consequatur quia. Ea deleniti molestiae et repudiandae voluptatem et minus necessitatibus cum dolorum pariatur qui obcaecati quaerat et consequatur itaque eum laboriosam soluta. Aut pariatur eligendi et voluptatem doloribus qui voluptates maiores id quia dolor sed dolor fugiat.",
          ]}
          meclolist={[globalo1, globalo2, globalo3, globalo4, globalo5]}
        />
        <Meclo
          head="Medorto  - orthopedic industry"
          naturals={[photoMedorto]}
          services={[
            "Consulting",
            "Product Design",
            "UX Design",
            "Frontend Development",
            "Backend Development",
          ]}
          about={[
            "The main goal of the project was to develop a user-friendly e-commerce platform with medical products for seniors and disabled.",
            "Creating graphical design that would be found pleasing by customers was a high priority during the development process. All in this project was about their comfort. Apart from receiving their goods straight to their homes or offices, clients can also pick up orders in certain points.",
            "We chose to develop this e-commerce platform on the Sylius engine, so it would be easy to develop additional, custom applications, which could be integrated with this online shop. We also used the Elastic Search engine in the system. Check what the Sylius panel looks like: Sylius Panel We have created additional native functionalities: - NFZ reimbursement codes - Alternate Delivery Addresses",
          ]}
        />
        <Meclo
          head="Nazwa sklepu  -  jewelry industry"
          naturals={[photoNazwa]}
          services={[
            "Consulting",
            "Frontend Development",
            "Backend Development",
          ]}
          about={[
            "Before cooperating with Soft Gorillas, our customer was provided with the first version of his e-commerce website for selling jewellery by a non-competent contractor. The platform was inefficient and required significant modification. We took over the project.",
            "We applied store optimization, improved functionalities, and moved the e-commerce platform to a new server. The biggest challenge was to adapt the inflexible template purchased by the client to his additional expectations.The project was written on the Prestashop engine. There are certain important features that all e-commerce websites should have. We integrated payment method (Przelewy24) and newsletter with the website.",
          ]}
        />
      </section>
      <HireUs />
      <Footer />
    </>
  )
}
export default casestudypage

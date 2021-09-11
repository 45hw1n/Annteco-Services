import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Hero from "./components/hero"
import "../styles/styles.scss"
import Navigation from "./components/navbar"
import "./../../node_modules/bootstrap"
import About from "./components/about-us"
import Client from "./components/clients"
import Block from "./components/block"
import ReactHtmlParser from 'react-html-parser';
import Cards from "./components/cards"
import Testimonial from "./components/testimonial"
import Footer from "./components/footer"

const IndexPage = () => {

  return (
    <>
      <StaticQuery
        query={graphql`
        {
          Anneteco {
            homes {
              logo {
                url
              }
              isHeroVisible
              heroHeading
              heroDescription
              heroSubHeading
              heroImage {
                url(transformation: {document: {output: {format: webp}}})
              }
              heroBackgroundColor
              isAboutUsVisible
              aboutUsHeading
              aboutUsText
              aboutUsSubHeading
              aboutUsImage {
                url(transformation: {document: {output: {format: webp}}})
              }
              aboutUsBackgroundColor
              isClientVisible
              clientHeading
              clientBackgroundColor
              clientImages {
                url(transformation: {document: {output: {format: webp}}})
              }
              isServicesVisible
              servicesBackgroundColor
              serviceHeading
              serviceText {
                html
              }
              serviceIcons {
                url(transformation: {document: {output: {format: webp}}})
              }
              serviceDescription {
                html
              }
              isTestimonialVisible
              testimonialHeading
              testimonialBackgroundColor
              testimonials {
                html
              }
              testimonialImages {
                url
              }
              isFooterVisible
              footerHeading
              footerText {
                html
              }
              footerImage {
                url
              }
              address{
                html
              }
              phoneNo
            }
            seos {
              title
              description
              keywords
              image {
                url
              }
            }
          }
        }
      `}
        render={data => (
          <>
            {data.Anneteco.homes.map(home => {
              return (
                <>
                  <Navigation logo={home.logo.url} />
                  {
                    home.isHeroVisible === "Yes" ?
                      <Hero
                        backgroundColor={home.heroBackgroundColor}
                        heading={home.heroHeading}
                        subHeading={home.heroSubHeading}
                        heroImg={home.heroImage[0].url} /> : null
                  }

                  {
                    home.isAboutUsVisible === "Yes" ?
                      <About
                        id="about"
                        backgroundColor={home.aboutUsBackgroundColor}
                        heading={home.aboutUsHeading}
                        aboutImg={home.aboutUsImage.url}
                        subHeading={home.aboutUsSubHeading}
                        text={home.aboutUsText} /> : null
                  }

                  {
                    home.isClientVisible === "Yes" ?
                      <Client
                        id="client"
                        backgroundColor={home.clientBackgroundColor}
                        heading={home.clientHeading}
                        images={home.clientImages} /> : null
                  }

                  {
                    home.isServicesVisible === "Yes" ?
                      <div id="services">
                        <Block
                          backgroundColor={home.servicesBackgroundColor}
                          heading={home.serviceHeading}
                          text={ReactHtmlParser(home.serviceText.html)}
                        >

                          <Cards img={home.serviceIcons}
                            text={home.serviceDescription}
                          />
                        </Block>
                      </div>

                      : null
                  }
                  {
                    home.isFooterVisible === "Yes" ?
                    <div id="contact">
                      <Footer heading={home.footerHeading}
                        
                        img={home.footerImage.url}
                        address={ReactHtmlParser(home.address.html)}
                        phno={home.phoneNo} />
                    </div>
                      
                      : null
                  }
                </>
              )
            })}
          </>
        )}
      />
    </>
  )
}

export default IndexPage

import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import ReactHtmlParser from 'react-html-parser';
import Hero from './components/hero'
import Navigation from './components/navbar'
import Footer from './components/footer';
import Block from './components/block'
import Cards from './components/cards'
import Seo from './components/seo';

const Service = () => {
    return (
        <>
            <StaticQuery
                query={graphql`
      {
        Anneteco {
          services {
            heroHeading
            heroSubheading
            heroBackgroundColor
            heroImage {
              url
            }
            heroBackgroundImage {
              url
            }
            title
            content {
              html
            }
            serviceBackgroundColor
            serviceDescription {
              html
            }
            serviceIcons {
              url
            }
            serviceLink
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
      }
    `}
                render={data => (
                    <>
                        {data.Anneteco.services.map(service => {
                            return (
                                <div className="services" id="services" >
                                    <Seo title={data.Anneteco.seos[0].title}
                                        favicon={data.Anneteco.seos[0].image.url}
                                        image={data.Anneteco.seos[0].image.url}
                                        description={data.Anneteco.seos[0].description}
                                        keywords={data.Anneteco.seos[0].keywords.map((el, idx) => {
                                            return (
                                                el
                                            )
                                        }
                                        )} />
                                    
                                    <Navigation logo="https://media.graphcms.com/output=format:png/WTnR1Ds7RX2FHLJJDALd?_ga=2.48276773.260733682.1631455073-1944968030.1619514357" />
                                    
                                    <Hero backgroundColor={service.heroBackgroundColor}
                                        backgroundImage={service.heroBackgroundImage}
                                        heading={service.heroHeading}
                                        subHeading={service.heroSubheading}
                                        heroImg={service.heroImage.url} />

                                    <Block
                                        backgroundColor={service.serviceBackgroundColor}
                                        heading={service.title}
                                        text={ReactHtmlParser(service.content.html)}
                                    >

                                        <Cards img={service.serviceIcons}
                                            text={service.serviceDescription}
                                        />
                                    </Block>

                                    <Footer />
                                </div>
                            )
                        })}
                    </>
                )}
            />
        </>
    )
}

export default Service

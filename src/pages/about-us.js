import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import ReactHtmlParser from 'react-html-parser';
import Hero from './components/hero'
import Navigation from './components/navbar'
import BlockLeft from './components/block-left'
import Footer from './components/footer';
import Seo from './components/seo';

const About = () => {
    return (
        <>
            <StaticQuery
                query={graphql`
                {
                    Anneteco {
                    aboutUses {
                        heroHeading
                        heroSubheading
                        heroBackgroundColor
                        heroImage{
                            url(transformation: {document: {output: {format: webp}}})
                        }
                        heroBackgroundImage {
                            url
                        }
                        title
                        content {
                        html
                        }
                        aboutBackgroundColor
                        image{
                            url
                        }
                        seos{
                            title
                            description
                            keywords
                            image{
                              url
                            }
                          }
                    }
                    }
                }
                `}
                render={data => (
                    <>
                        {data.Anneteco.aboutUses.map(about => {
                            return (
                                <div className="abt" id="about" >
                                    {/* <Seo title={data.Anneteco.seos.title}
                                        favicon={data.Anneteco.seos[0].image.url}
                                        image={data.Anneteco.seos[0].image.url}
                                        description={data.Anneteco.seos[0].description}
                                        keywords={data.Anneteco.seos[0].keywords.map((el, idx) => {
                                            return (
                                                el
                                            )
                                        }
                                        )} /> */}
                                    <Navigation logo="https://media.graphcms.com/output=format:png/WTnR1Ds7RX2FHLJJDALd?_ga=2.48276773.260733682.1631455073-1944968030.1619514357" />
                                    <Hero backgroundColor={about.heroBackgroundColor}
                                        backgroundImage={about.heroBackgroundImage}
                                        heading={about.heroHeading}
                                        subHeading={about.heroSubHeading}
                                        heroImg={about.heroImage.url} />

                                    <BlockLeft
                                        backgroundColor={about.aboutBackgroundColor}
                                        heading={about.title}
                                        text={ReactHtmlParser(about.content.html)}
                                        image={about.image.url} />

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

export default About

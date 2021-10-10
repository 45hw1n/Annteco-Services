import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import ReactHtmlParser from 'react-html-parser';
import Hero from './components/hero';
import Navigation from './components/navbar';
import BlockLeft from './components/block-left';
import Block from './components/block';
import Footer from './components/footer';
import Seo from './components/seo';
import 'bootstrap/dist/css/bootstrap.min.css';
import Social from './components/social';
import { Container, Row, Col } from 'react-bootstrap';
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
                heroImage {
                  url(
                    transformation: { document: { output: { format: webp } } }
                  )
                }
                heroBackgroundImage {
                  url
                }
                title
                content {
                  html
                }
                aboutBackgroundColor
                image {
                  url
                }
                seo {
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
        render={(data) => (
          <>
            {data.Anneteco.aboutUses.map((about) => {
              return (
                <div className='abt' id='about'>
                  <Seo
                    title={about.seo.title}
                    image={about.seo.image.url}
                    description={about.seo.description}
                    keywords={about.seo.keywords.map((el, idx) => {
                      return el;
                    })}
                  />
                  <Navigation />
                  <Social />
                  <Hero
                    backgroundColor={about.heroBackgroundColor}
                    backgroundImage={about.heroBackgroundImage}
                    heading={about.heroHeading}
                    subHeading={about.heroSubHeading}
                    heroImg={about.heroImage.url}
                  />

                  <BlockLeft
                    backgroundColor={about.aboutBackgroundColor}
                    heading={about.title}
                    text={ReactHtmlParser(about.content.html)}
                    image={about.image.url}
                  />
                  <Container>
                    <div className='mv'>
                      <Row>
                        <Col className='mb-3'>
                          <h2 className='mb-2'>MISSION</h2>
                          <p className='p20'>
                            Delivering innovative and reliable solutions to help
                            the client provide efficient services in a cost
                            effective manner with utmost quality and unwavering
                            ethics.{' '}
                          </p>
                        </Col>
                      </Row>

                      <Row>
                        <Col className='mb-3'>
                          <h2 className='mb-2'>VISION</h2>
                          <p className='p20'>
                            To become a prime performer in the global
                            marketplace by offering advanced strategy driven
                            technology and business capabilities.{' '}
                          </p>
                        </Col>
                      </Row>
                    </div>
                  </Container>

                  <Footer />
                </div>
              );
            })}
          </>
        )}
      />
    </>
  );
};

export default About;

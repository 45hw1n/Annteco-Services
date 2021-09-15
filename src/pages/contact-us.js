import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import ReactHtmlParser from 'react-html-parser';
import Hero from './components/hero'
import Navigation from './components/navbar'
import { Container } from 'react-bootstrap';
import ContactForm from './components/form'
import Seo from './components/seo';

const About = () => {
  return (
    <>
      <StaticQuery
        query={graphql`
      {
        Anneteco {
          contactUses {
            heroBackgroundImage {
              url
            }
            heroBackgroundColor
            heroHeading
            heroSubheading
            heroImage {
              url
            }
            title
            content {
              html
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
        render={data => (
          <>
            {data.Anneteco.contactUses.map(contact => {
              return (                
                <div className="cnt" id="contact" >
                  <Seo title={data.Anneteco.seo[0].title}
                    favicon={data.Anneteco.seo.image[0].url}
                    image={data.Anneteco.seo.image[0].url}
                    description={data.Anneteco.seo[0].description}
                    keywords={data.Anneteco.seo[0].keywords.map((el, idx) => {
                      return (
                        el
                      )
                    }
                    )} />
                  <Navigation logo="https://media.graphcms.com/output=format:png/WTnR1Ds7RX2FHLJJDALd?_ga=2.48276773.260733682.1631455073-1944968030.1619514357" />
                  <Hero backgroundColor={contact.heroBackgroundColor}
                    backgroundImage={contact.heroBackgroundImage}
                    heading={contact.heroHeading}
                    subHeading={contact.heroSubHeading}
                    heroImg={contact.heroImage.url} />

                  <div className="block-left"
                    style={{ background: contact.backgroundColor }}
                  >
                    <Container>
                      <h1 className="text-center m-5">{contact.title} </h1>
                      <div className="row wrapper">
                        <div className="left col-lg-6 col-sm-12 p20 p-4">
                          {ReactHtmlParser(contact.content.html)}
                        </div>
                        <div className="right col-lg-6 col-sm-12 p-4">
                          <ContactForm />
                        </div>
                      </div>
                    </Container>
                  </div>
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

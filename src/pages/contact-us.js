import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import ReactHtmlParser from 'react-html-parser';
import Hero from './components/hero';
import Navigation from './components/navbar';
import { Container } from 'react-bootstrap';
import ContactForm from './components/form';
import Seo from './components/seo';
import 'bootstrap/dist/css/bootstrap.min.css';
import Social from './components/social';

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
        render={(data) => (
          <>
            {data.Anneteco.contactUses.map((contact) => {
              return (
                <div className='cnt' id='contact'>
                  <Seo
                    title={contact.seo.title}
                    image={contact.seo.image.url}
                    description={contact.seo.description}
                    keywords={contact.seo.keywords.map((el, idx) => {
                      return el;
                    })}
                  />
                  <Navigation />
                  <Social />

                  <Hero
                    backgroundColor={contact.heroBackgroundColor}
                    backgroundImage={contact.heroBackgroundImage}
                    heading={contact.heroHeading}
                    subHeading={contact.heroSubHeading}
                    heroImg={contact.heroImage.url}
                  />

                  <div
                    className='block-left'
                    style={{ background: contact.backgroundColor }}
                  >
                    <Container>
                      <h1 className='text-center m-5'>{contact.title} </h1>
                      <div className='row wrapper'>
                        <div className='left col-lg-6 col-sm-12 p20 p-4'>
                          {ReactHtmlParser(contact.content.html)}
                        </div>
                        <div className='right col-lg-6 col-sm-12 p-4'>
                          <ContactForm />
                        </div>
                      </div>
                    </Container>
                  </div>
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

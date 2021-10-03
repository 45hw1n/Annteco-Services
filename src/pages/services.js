import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import ReactHtmlParser from 'react-html-parser';
import Hero from './components/hero';
import Navigation from './components/navbar';
import Footer from './components/footer';
import Block from './components/block';
import Cards from './components/cards';
import Seo from './components/seo';
import 'bootstrap/dist/css/bootstrap.min.css';
import Social from './components/social';

const Service = () => {
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
              }
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
            {data.Anneteco.services.map((service) => {
              return (
                <div className='services' id='services'>
                  <Seo
                    title={service.seo.title}
                    image={service.seo.image.url}
                    description={service.seo.description}
                    keywords={service.seo.keywords.map((el, idx) => {
                      return el;
                    })}
                  />

                  <Navigation />
                  <Social />
                  <Hero
                    backgroundColor={service.heroBackgroundColor}
                    backgroundImage={service.heroBackgroundImage}
                    heading={service.heroHeading}
                    subHeading={service.heroSubheading}
                    heroImg={service.heroImage.url}
                  />

                  <Block
                    backgroundColor={service.serviceBackgroundColor}
                    heading={service.title}
                    text={ReactHtmlParser(service.content.html)}
                  >
                    {/* <div className="d-flex align-items-center">
                      <img
                        src="https://media.graphcms.com/VCL68jGNTXOaXVGObCg2"
                        style={{
                          width: '100%',
                          objectFit: 'contain',
                          maxWidth: '800px',
                          margin: '0 auto',
                          padding: '20px',
                        }}
                        alt='img'
                      />
                    </div> */}
                    <Cards
                      img={service.serviceIcons}
                      text={service.serviceDescription}
                    />
                  </Block>
                  

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

export default Service;

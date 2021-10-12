import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Hero from './components/hero';
import '../styles/styles.scss';
import Navigation from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer';
import Seo from './components/seo';
import Social from './components/social';

const IndexPage = () => {
  return (
    <>
      <StaticQuery
        query={graphql`
          {
            Anneteco {
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
        render={(data) => (
          <>
            <>
              <Seo
                title={data.Anneteco.seos[0].title}
                image={data.Anneteco.seos[0].image.url}
                description={data.Anneteco.seos[0].description}
                keywords={data.Anneteco.seos[0].keywords.map((el, idx) => {
                  return el;
                })}
              />
              <Navigation />
              <Social />

              <Hero
                className='landing'        
              />

              {/* <Footer /> */}
            </>
            
          </>
        )}
      />
    </>
  );
};

export default IndexPage;

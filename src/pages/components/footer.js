import React from 'react';
import Block from './block';
import ContactForm from './form';
import { StaticQuery, graphql } from 'gatsby';
import ReactHtmlParser from 'react-html-parser';

const Footer = () => {
  return (
    <>
      <StaticQuery
        query={graphql`
          {
            Anneteco {
              footers {
                footerBackgroundColor
                companyName
                footerHea
                companyLogo {
                  url(
                    transformation: { document: { output: { format: webp } } }
                  )
                }
                content {
                  html
                }
              }
            }
          }
        `}
        render={(data) => (
          <>
            {data.Anneteco.footers.map((footer) => {
              return (
                <footer className='footer'>
                  <Block
                    backgroundColor={footer.footerBackgroundColor}
                    heading={footer.footerHea}
                  >
                    <div className='row wrapper'>
                      <div className='col-lg-6 col-sm left'>
                        <div className='d-flex align-items-center mt-5'>
                          <img
                            className='ftr-logo mr-3'
                            src={footer.companyLogo.url}
                            alt='logo'
                          />
                          {/* <h2 className="ftr-cmpny">{footer.companyName}</h2> */}
                        </div>
                        <ContactForm />
                      </div>
                      <div className='col-lg-6 col-sm right p18'>
                        {ReactHtmlParser(footer.content.html)}
                      </div>
                    </div>
                  </Block>
                </footer>
              );
            })}
          </>
        )}
      />
    </>
  );
};
export default Footer;

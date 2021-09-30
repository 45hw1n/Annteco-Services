import React from 'react';
import {Container} from 'react-bootstrap';
import WA from "./../../images/WA.png"
import PHN from "../../images/PHN.png"
import MA from "../../images/MA.png"

const Social = () => {
  return (
    <>
      <div className='social'>
        <Container className="scl">
          <div className="wa">
            <a href="www.whatsapp.com">
              <img className='scl-img'src={WA} alt="whatsapp"/>
            </a>
          </div>
          <div className="phn">
            <a  href="tel: 99999 99999">
              <img className='scl-img'src={PHN} alt="phone"/>
              <p className="p16">+91 99999 99999</p>
            </a>
          </div>

          <div className="mail">
            <a  href="mailto:anneteco.cms@gmail.com">
              <img className='scl-img'src={MA} alt="whatsapp"/>
              <p className="p16">anneteco.cms@gmail.com</p>
            </a>
          </div>
          
        </Container>
      </div>
    </>
  );
};

export default Social;

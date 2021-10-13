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
            <a href="https://wa.me/971508164508">
              <img className='scl-img'src={WA} alt="whatsapp"/>
            </a>
          </div>
          <div className="phn">
            <a  href="tel: +971502293295<">
              <img className='scl-img'src={PHN} alt="phone"/>
              <p className="p16">+971 502293295</p>
            </a>
          </div>

          <div className="mail">
            <a  href="mailto: info@annteco.com">
              <img className='scl-img'src={MA} alt="whatsapp"/>
              <p className="p16"> info@annteco.com</p>
            </a>
          </div>
          
        </Container>
      </div>
    </>
  );
};

export default Social;

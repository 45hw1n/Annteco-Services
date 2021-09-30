import React from 'react'
import { Container } from 'react-bootstrap';

const Hero = (props) => {
    return (
        <>
            <div className={`hero ${props.className}`}
                style={{ backgroundImage: `url(${props.heroImg})` }}
            >
                {/* <Container>
                    <div className="row wrapper">
                        <div className="col-lg-6 col-sm-12 hero-text">
                            <h1 className="mb-5">{props.heading}</h1>
                            <p className="p24 mb-5">{props.subHeading}</p>
                        </div>
                        <div className="col-lg-6 col-sm-12 hero-img"> */}
                            {/* <img src={props.heroImg} alt="img" /> */}
                        {/* </div>
                    </div>
                </Container> */}
            </div>
        </>

    )
}

export default Hero
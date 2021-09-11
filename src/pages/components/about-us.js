import React from 'react'
import { Container } from 'react-bootstrap';

const About = (props) => {
    return (
        <>
            <div className={`about ${props.className}`}
                style={{ background: props.backgroundColor }}
            >
                <Container>
                    <h2 className="mx-auto text-center">{props.heading}</h2>
                    <div className="row wrapper">
                        <div className="col-lg-6 col-sm about-img">
                            <img src={props.aboutImg} alt="img" />
                        </div>
                        <div className="col-lg-6 col-sm about-text">
                            <h4 className="mb-4">{props.subHeading}</h4>
                            <p className="p16">{props.text}</p>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}


export default About
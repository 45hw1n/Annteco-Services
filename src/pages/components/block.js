import React from 'react'
import { Container } from 'react-bootstrap';

const Block = (props) => {
    return (
        <>
            <div className={`block ${props.className}`}
                style={{ background: props.backgroundColor }}
            >
                <Container>
                    <div className="row wrapper">
                        <div className="col-12"> 
                            <h2 className="text-center mb-3">{props.heading}</h2>
                            <p className="p18">{props.text}</p>
                            <div className="child"> 
                                {props.children}
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Block
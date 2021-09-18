import React from 'react'
import { Container } from 'react-bootstrap';

const Client = (props) => {
    return (
        <>
            <div className={`client ${props.className}`}
                style={{ background: props.backgroundColor }}
            >
                <Container>
                    <h2 className="mx-auto text-center">{props.heading}</h2>
                    <div className="row no-gutters wrapper">
                        {props?.images && props.images.map(
                            (el, idx) => {
                                return (
                                    <div className="col-lg-3 col-6 client-img" key={idx}>
                                        <img src={el.url} alt="img" />
                                    </div>
                                )
                            }
                        )}
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Client
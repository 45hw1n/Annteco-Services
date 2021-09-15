import React from 'react'
import { Container } from 'react-bootstrap';

const BlockLeft = (props) => {
    return (
        <>
            <div className={`block-left ${props.className}`}
                style={{ background: props.backgroundColor }}
            >
                <Container>
                    <h1 className="text-center m-5">{props.heading} </h1>
                    <div className="row wrapper">
                        <div className="left col-lg-6 col-sm-12 p20 p-4">
                            {props.text}
                        </div>
                        <div className="right col-lg-6 col-sm-12 p-4">
                            <img src={props.image} alt="Img" />
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default BlockLeft
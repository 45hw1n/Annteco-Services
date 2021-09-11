import React from "react";
import Block from "./block"
import ContactForm from "./form"
// import { Img } from "./../../images/Image"
const Footer = (props) => {
    return (
        <footer className="footer">
            <Block
                backgroundColor={props.backgroundColor}
                heading={props.heading}>
                <div className="row wrapper">
                    <div className="col-lg-6 col-sm left">
                        <ContactForm />
                    </div>

                    <div className="col-lg-6 col-sm right">
                        <img className="ftr-img" src ={props.img} alt="Img"/>
                        <div className="ftr-address">
                            {props.address}
                            <p>{props.phno}</p>
                        </div>
                    </div>

                </div>

            </Block>
        </footer>
    )
}

export default Footer
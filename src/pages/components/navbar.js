import React from 'react';
import { Navbar, Container, Nav } from "react-bootstrap"
import { Link } from 'react-scroll'

const Navigation = (props) => {
    return (
        <>
            {/* <div className="navigation"> */} 
            <Navbar className="navigation" sticky="top" bg="custom" expand="lg">
                <Container className="h-100">
                    <Navbar.Brand href="/">
                        <img className="logo" src={props.logo} alt="logo" /> Annteco Services</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                        <div className="nav-link">
                                <a href="/">Home</a>
                            </div>
                            <div className="nav-link">
                                <a href="/about-us">About Us</a>
                            </div>
                            {/* <div className="nav-link">
                                <Link activeClass="active" to="client" spy={true} smooth={true} offset={-50} duration={400}>
                                    Clients
                                </Link>
                            </div> */}
                            <div className="nav-link">
                                <a href="/services">Services</a>
                            </div>
                            <div className="nav-link">
                                <a href="/contact-us">Contact Us</a>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* </div> */}

        </>
    )

}
export default Navigation;
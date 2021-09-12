import React from 'react';
import { Navbar, Container, Nav } from "react-bootstrap"
import { Link } from 'react-scroll'

const Navigation = (props) => {
    return (
        <>
            {/* <div className="navigation"> */}
            <Navbar className="navigation" sticky="top" bg="custom" expand="lg">
                <Container className="h-100">
                    <Navbar.Brand>
                        <img className="logo"src={props.logo} alt="logo" /> Annteco Services</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link>
                                <Link activeClass="active" to="about" spy={true} smooth={true} offset={-50} duration={400}>
                                    About Us
                                </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link activeClass="active" to="client" spy={true} smooth={true} offset={-50} duration={400}>
                                    Clients
                                </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link activeClass="active" to="services" spy={true} smooth={true} offset={0} duration={400}>
                                    Services
                                </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link activeClass="active" to="contact" spy={true} smooth={true} offset={0} duration={400}>
                                    Contact Us
                                </Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* </div> */}

        </>
    )

}
export default Navigation;
import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap'

function Menu(){
    return (
            <Navbar bg="dark" expand="lg" className="mb-4">
                <Container>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-1 nav-item">
                            <LinkContainer to="/">
                                <Nav.Link>Головна</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/news">
                                <Nav.Link>Новини</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/gallery">
                                <Nav.Link>Галерея картинок</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/contacts">
                                <Nav.Link>Контакти</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/about">
                                <Nav.Link>Про сайт</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    )
}
export default Menu;
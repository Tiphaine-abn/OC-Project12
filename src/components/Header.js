import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style/Header.scss';

function Header() {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand as={Link} to="/">Tiphaine Aubin</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav>
                        <Nav.Link as={Link} to="/"></Nav.Link>
                        <Nav.Link as={Link} to="/about">À propos</Nav.Link>
                        <Nav.Link as={Link} to="/about">Parcours</Nav.Link>
                        <Nav.Link as={Link} to="/about">Compétences</Nav.Link>
                        <Nav.Link as={Link} to="/portfolio">Portfolio</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default Header;

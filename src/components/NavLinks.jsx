import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Liens de la barre de navigation
const NavLinks = ({ closeMenu }) => (
    <Nav>
        <Nav.Link as={Link} to="/#hero" onClick={closeMenu} className="nav-link" aria-label="Aller à la page d'Accueil">
            Accueil
        </Nav.Link>
        <Nav.Link as={Link} to="/#about" onClick={closeMenu} className="nav-link" aria-label="Aller à la section À propos">
            À propos
        </Nav.Link>
        <Nav.Link as={Link} to="/#career" onClick={closeMenu} className="nav-link" aria-label="Aller à la section Parcours">
            Parcours
        </Nav.Link>
        <Nav.Link as={Link} to="/#skills" onClick={closeMenu} className="nav-link" aria-label="Aller à la section Compétences">
            Compétences
        </Nav.Link>
        <Nav.Link as={Link} to="/portfolio" onClick={closeMenu} className="portfolio-link" aria-label="Aller à la page Portfolio">
            Portfolio
        </Nav.Link>
        <Nav.Link as={Link} to="/contact" onClick={closeMenu} className="contact-link" aria-label="Aller à la page Contact">
            Contact
        </Nav.Link>
    </Nav>
);

export default NavLinks;

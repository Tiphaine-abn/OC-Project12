import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style/Header.scss';
import logo from '../assets/images/logo.png';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    console.log(menuOpen)

    // Fonction pour basculer l'état du menu
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Fonction pour fermer le menu
    const closeMenu = () => {
        setMenuOpen(false);
    };
    console.log(menuOpen)

    return (
        <Navbar expand="lg" className="navbar-custom">
            <Navbar.Brand as={Link} to="/">
                <img src={logo} alt="Tiphaine Aubin Logo" className="logo" />
            </Navbar.Brand>

            {/* Bouton pour ouvrir/fermer le menu burger */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleMenu} />

            {/* Navbar.Collapse gère l'affichage du menu en fonction de menuOpen */}
            <Navbar.Collapse id="basic-navbar-nav">

                <Nav>
                    {/* Liens pour naviguer vers les sections de la page d'accueil */}
                    <Nav.Link as={Link} to="/#about" onClick={closeMenu} className="nav-link">
                        À propos
                    </Nav.Link>
                    <Nav.Link as={Link} to="/#career" onClick={closeMenu} className="nav-link">
                        Parcours
                    </Nav.Link>
                    <Nav.Link as={Link} to="/#skills" onClick={closeMenu} className="nav-link">
                        Compétences
                    </Nav.Link>

                    {/* Liens vers les pages Portfolio et Contact */}
                    <Nav.Link as={Link} to="/portfolio" onClick={closeMenu} className="portfolio-link">
                        Portfolio
                    </Nav.Link>
                    <Nav.Link as={Link} to="/contact" onClick={closeMenu} className="contact-link">
                        Contact
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;

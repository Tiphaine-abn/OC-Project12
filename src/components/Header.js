import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style/Header.scss';
import logo from '../assets/images/logo.png';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Fonction pour surveiller le défilement
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <Navbar expand="lg" className={`navbar-custom ${scrolled ? 'scrolled' : ''}`}>
            <Navbar.Brand as={Link} to="/" onClick={closeMenu}>
                <img src={logo} alt="Tiphaine Aubin Logo" className="logo" />
            </Navbar.Brand>

            {/* Bouton pour ouvrir/fermer le menu burger */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleMenu} aria-expanded={menuOpen} />

            {/* Navbar.Collapse gère l'affichage du menu en fonction de menuOpen */}
            <Navbar.Collapse id="basic-navbar-nav" in={menuOpen}>

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

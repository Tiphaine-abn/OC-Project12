import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom'; // Import de useLocation
import './style/Header.scss';
import logo from '../assets/images/logo.png';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0); // Défilement vertical si cette valeur est supérieure à 0
        };

        // Gère le clic sur le logo
        const handleLogoClick = (event) => {
            if (location.pathname === '/') {
                event.preventDefault();
                const heroSection = document.getElementById('hero');
                if (heroSection) {
                    const navbarHeight = document.querySelector('.navbar-custom').offsetHeight;
                    window.scrollTo({
                        top: heroSection.offsetTop - navbarHeight,
                        behavior: 'smooth',
                    });
                }
                setMenuOpen(false); // Ferme le menu burger
            }
        };

        window.addEventListener('scroll', handleScroll); // Ajoute un événement de défilement
        const logoElement = document.querySelector('.navbar-custom .logo');
        if (logoElement) {
            logoElement.addEventListener('click', handleLogoClick); // Ajoute un événement de clic sur le logo
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (logoElement) {
                logoElement.removeEventListener('click', handleLogoClick); // Nettoie l'écouteur
            }
        };
    }, [location.pathname]); // Dépendance sur le chemin de l'URL

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    return (
        <Navbar expand="lg" className={`navbar-custom ${scrolled ? 'scrolled' : ''}`} aria-label="Navigation principale">
            <Navbar.Brand as={Link} to="/" aria-label="Retour à l'accueil">
                <img src={logo} alt="Tiphaine Aubin Logo" className="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleMenu} aria-expanded={menuOpen} aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"} />

            <Navbar.Collapse id="basic-navbar-nav" in={menuOpen}>
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
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;

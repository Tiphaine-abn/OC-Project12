import React, { useEffect } from 'react';
import { Navbar } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import Logo from './Logo';
import MenuToggle from './MenuToggle';
import NavLinks from './NavLinks';
import useHeaderLogic from './HeaderLogic';
import './style/Header.scss';

function Header() {
    const location = useLocation();
    const { menuOpen, scrolled, toggleMenu, closeMenu } = useHeaderLogic(location);

    useEffect(() => {
        // Gestion du clic sur le logo
        const handleLogoClick = (event) => {
            if (location.pathname === '/') {
                event.preventDefault();
                const heroSection = document.getElementById('hero');
                if (heroSection) {
                    const navbarHeight = document.querySelector('.navbar-custom').offsetHeight;
                    // Fait défiler la page jusqu'à la section 'hero' en tenant compte de la hauteur de la navbar
                    window.scrollTo({
                        top: heroSection.offsetTop - navbarHeight,
                        behavior: 'smooth',
                    });
                }
                closeMenu(); // Ferme le menu burger
            }
        };

        // Ajoute un événement de clic sur le logo
        const logoElement = document.querySelector('.navbar-custom .logo');
        if (logoElement) {
            logoElement.addEventListener('click', handleLogoClick);
        }

        return () => {
            if (logoElement) {
                logoElement.removeEventListener('click', handleLogoClick); // Nettoie l'écouteur
            }
        };
    }, [location.pathname, closeMenu]);

    return (
        <Navbar expand="lg" className={`navbar-custom ${scrolled ? 'scrolled' : ''}`} aria-label="Navigation principale">
            {/* Afficher le logo */}
            <Logo />

            {/* Afficher le menu burger */}
            <MenuToggle toggleMenu={toggleMenu} menuOpen={menuOpen} />

            <Navbar.Collapse id="basic-navbar-nav" in={menuOpen}>
                {/* Afficher les liens de navigation */}
                <NavLinks closeMenu={closeMenu} />
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;

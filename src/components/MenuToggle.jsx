import React from 'react';
import { Navbar } from 'react-bootstrap';

// Ouverture et fermeture du menu burger
const MenuToggle = ({ toggleMenu, menuOpen }) => (
    <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        onClick={toggleMenu}
        aria-expanded={menuOpen}
        aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
    />
);

export default MenuToggle;

import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import logo from '../assets/images/logo.webp';

// Logo cliquable
const Logo = () => (
    <Navbar.Brand as={Link} to="/" aria-label="Retour à l'accueil">
        <img src={logo} alt="Tiphaine Aubin Logo" className="logo" />
    </Navbar.Brand>
);

export default Logo;

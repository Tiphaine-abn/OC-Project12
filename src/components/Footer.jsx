import React from 'react';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { FaLinkedin, FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import './style/Footer.scss';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section" role="region" aria-labelledby="contact-heading">
                    <h3 id="contact-heading">Contact</h3>
                    <ul>
                        <li>
                            <MdEmail />
                            <a href="mailto:tiphaine.aubin28@hotmail.fr" aria-label="Envoyer un e-mail">tiphaine.aubin28@hotmail.fr</a>
                        </li>
                        <li>
                            <MdPhone />
                            <span aria-label="Numéro de téléphone">+33 6 63 98 41 04</span>
                        </li>
                        <li>
                            <MdLocationOn />
                            <span aria-label="Localisation">29200 - Brest</span>
                        </li>
                    </ul>
                    <div className="contact-button">
                        <a href="/contact" className="btn-contact" aria-label="Accéder à la page de contact">Me contacter</a>
                    </div>
                </div>
                <div className="footer-section" role="region" aria-labelledby="follow-heading">
                    <h3 id="follow-heading">Me suivre</h3>
                    <div className="social-icons" aria-label="Mes réseaux sociaux">
                        <a href="https://www.linkedin.com/in/tiphaine-aubin-80a291100/" target="_blank" rel="noopener noreferrer" aria-label="Profil LinkedIn" title="Linkedin">
                            <FaLinkedin />
                        </a>
                        <a href="https://www.facebook.com/tiphaine.aubin" target="_blank" rel="noopener noreferrer" aria-label="Profil Facebook" title="Facebook">
                            <FaFacebook />
                        </a>
                        <a href="https://www.instagram.com/tiphaine_abn/" target="_blank" rel="noopener noreferrer" aria-label="Profil Instagram" title="Instagram">
                            <FaInstagram />
                        </a>
                        <a href="https://x.com/Tiphaine_abn" target="_blank" rel="noopener noreferrer" aria-label="Profil X (Twitter)" title="X">
                            <FaXTwitter />
                        </a>
                        <a href="https://github.com/Tiphaine-abn?tab=repositories" target="_blank" rel="noopener noreferrer" title="GitHub">
                            <FaGithub />
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>Copyright © 2024 - Tiphaine Aubin</p>
            </div>
        </footer>
    );
}

export default Footer;

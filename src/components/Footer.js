import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faFacebook, faInstagram, faXTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import './style/Footer.scss';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h2>Contact</h2>
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <a href="mailto:tiphaine.aubin28@hotmail.fr">tiphaine.aubin28@hotmail.fr</a>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faPhone} />
                            06.63.98.41.04
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                            29200 - Brest
                        </li>
                    </ul>
                    <div className="contact-button">
                        <a href="/contact" className="btn-contact">Me contacter</a>
                    </div>
                </div>
                <div className="footer-section">
                    <h2>Me suivre</h2>
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/tiphaine-aubin-80a291100/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href="https://www.facebook.com/tiphaine.aubin" target="_blank" rel="noopener noreferrer" title="Facebook">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="https://www.instagram.com/tiphaine_abn/" target="_blank" rel="noopener noreferrer" title="Instagram">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="https://x.com/Tiphaine_abn" target="_blank" rel="noopener noreferrer" title="X">
                            <FontAwesomeIcon icon={faXTwitter} />
                        </a>
                        <a href="https://github.com/Tiphaine-abn?tab=repositories" target="_blank" rel="noopener noreferrer" title="Twitter">
                            <FontAwesomeIcon icon={faGithub} />
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

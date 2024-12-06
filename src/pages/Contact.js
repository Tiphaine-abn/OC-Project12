import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import './style/Contact.scss';

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div className="contact-container">
                <div className="contact-info">
                    <h3>Mes coordonnées</h3>
                    <div className="contact-item">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <p>tiphaine.aubin28@hotmail.fr</p>
                    </div>
                    <div className="contact-item">
                        <FontAwesomeIcon icon={faPhone} />
                        <p>+33 6 63 98 41 04</p>
                    </div>
                    <div className="contact-item">
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                        <p>Paris, France</p>
                    </div>
                </div>
                <form className="contact-form">
                    <h2>Contact</h2>
                    <div className="form-group">
                        <label htmlFor="fullName">Nom et Prénom *</label>
                        <input type="text" id="fullName" name="fullName" placeholder="Votre nom et prénom" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email *</label>
                        <input type="email" id="email" name="email" placeholder="Votre email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="subject">Objet *</label>
                        <input type="text" id="subject" name="subject" placeholder="Objet de votre message" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message *</label>
                        <textarea id="message" name="message" rows="5" placeholder="Votre message" required></textarea>
                    </div>
                    <button type="submit" className="contact-button">Envoyer</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;

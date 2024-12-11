import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import ContactForm from '../components/ContactForm';
import './style/Contact.scss';

const Contact = () => {
    // Fonction appelée lors de l'envoi du formulaire
    const handleFormSubmit = ({ fullName, email, subject, message }) => {
        const mailtoLink = `mailto:tiphaine.aubin28@hotmail.fr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
            `Nom: ${fullName}\nEmail: ${email}\n\nMessage:\n${message}`
        )}`;

        // Ouvre le client de messagerie avec les informations du formulaire
        window.location.href = mailtoLink;
    };

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

                <ContactForm onSubmit={handleFormSubmit} />
            </div>
        </section>
    );
};

export default Contact;

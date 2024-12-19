import React, { useEffect } from 'react';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
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

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'instant',
        });
    }, []);

    return (
        <section className="contact" id="contact" aria-labelledby="contact-title">
            <div className="contact-container">
                <div className="contact-info">
                    <h2 id="contact-title">
                        Mes coordonnées
                    </h2>
                    <div className="contact-item">
                        <MdEmail aria-hidden="true" />
                        <p
                            aria-label="Adresse email : tiphaine.aubin28@hotmail.fr">
                            tiphaine.aubin28@hotmail.fr
                        </p>
                    </div>
                    <div className="contact-item">
                        <MdPhone aria-hidden="true" />
                        <p
                            aria-label="Numéro de téléphone : +33 6 63 98 41 04">
                            +33 6 63 98 41 04
                        </p>
                    </div>
                    <div className="contact-item">
                        <MdLocationOn aria-hidden="true" />
                        <p
                            aria-label="Localisation : 29200 - Brest">
                            29200 - Brest
                        </p>
                    </div>
                </div>
                <ContactForm onSubmit={handleFormSubmit} />
            </div>
        </section>
    );
};

export default Contact;

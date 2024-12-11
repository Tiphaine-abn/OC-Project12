import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style/ContactForm.scss';

const ContactForm = ({ onSubmit }) => {
    // State pour les champs du formulaire
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    // Fonction pour gérer l'envoi du formulaire avec mailto
    const handleSubmit = (e) => {
        e.preventDefault();

        // Appeler la fonction `onSubmit` passée en prop pour envoyer les données
        onSubmit({ fullName, email, subject, message });

        // Réinitialiser le formulaire après soumission
        setFullName('');
        setEmail('');
        setSubject('');
        setMessage('');
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Contact</h2>
            <div className="form-group">
                <label htmlFor="fullName">Nom et Prénom *</label>
                <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Votre nom et prénom"
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Votre email"
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="subject">Objet *</label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Objet de votre message"
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows="5"
                    placeholder="Votre message"
                    required
                ></textarea>
            </div>
            <button type="submit" className="contact-button">Envoyer</button>
        </form>
    );
};

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;

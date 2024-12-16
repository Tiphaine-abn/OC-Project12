import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style/ContactForm.scss';

const ContactForm = ({ onSubmit }) => {
    // State pour les champs du formulaire
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    // Fonction pour gérer l'envoi du formulaire avec mailto
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!fullName || !email || !subject || !message) {
            setError('Veuillez remplir tous les champs obligatoires.');
            return;
        }
        setError('');

        // Appeler la fonction `onSubmit` passée en prop pour envoyer les données
        onSubmit({ fullName, email, subject, message });

        // Réinitialiser le formulaire après soumission
        setFullName('');
        setEmail('');
        setSubject('');
        setMessage('');
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit} aria-labelledby="contact-form-title">
            <h1 id="contact-form-title">Contact</h1>
            {error && (
                <div className="form-error" role="alert" aria-live="assertive">
                    {error}
                </div>
            )}
            <div className="form-group">
                <label htmlFor="fullName">Nom et Prénom <span aria-hidden="true">*</span></label>
                <input
                    type="text" id="fullName" name="fullName" value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Votre nom et prénom" required aria-required="true" />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email <span aria-hidden="true">*</span></label>
                <input
                    type="email" id="email" name="email" value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Votre email" required aria-required="true" />
            </div>
            <div className="form-group">
                <label htmlFor="subject">Objet <span aria-hidden="true">*</span></label>
                <input
                    type="text" id="subject" name="subject" value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Objet de votre message" required aria-required="true" />
            </div>
            <div className="form-group">
                <label htmlFor="message">Message <span aria-hidden="true">*</span></label>
                <textarea
                    id="message" name="message" value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows="5"
                    placeholder="Votre message" required aria-required="true">
                </textarea>
            </div>
            <button type="submit" className="contact-button" aria-label="Envoyer le formulaire">Envoyer</button>
        </form>
    );
};

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;

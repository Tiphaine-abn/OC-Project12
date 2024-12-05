import React from 'react';
import './style/Contact.scss';

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <form className="contact-form">
                <h2>Contact</h2>
                <div className="form-group">
                    <label htmlFor="name">Nom</label>
                    <input type="text" id="name" name="name" placeholder="Votre nom" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Votre email" />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows="5" placeholder="Votre message"></textarea>
                </div>
                <button type="submit" className="contact-button">Envoyer</button>
            </form>
        </section>
    );
};

export default Contact;

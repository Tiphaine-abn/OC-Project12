import React, { useState, useEffect } from 'react';
import Modal from '../components/Modal';
import ohmyfoodImg from '../assets/images/ohmyfood.webp';
import kasaImg from '../assets/images/kasa.webp';
import argentbankImg from '../assets/images/argentbank.webp';
import sophiebluelImg from '../assets/images/sophiebluel.webp';
import projects from '../data/projects.json';
import './style/Portfolio.scss';

function Portfolio() {
    const images = {
        ohmyfoodImg,
        kasaImg,
        argentbankImg,
        sophiebluelImg,
    };

    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    const openModal = (project) => {
        setModalContent(project);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setModalContent(null);
    };

    const closeModalOutside = (e) => {
        if (e.target.classList.contains('portfolio-modal')) {
            closeModal();
        }
    };

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'instant',
        });
    }, []);

    // Gérer l'état du défilement
    useEffect(() => {
        if (modalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [modalOpen]);

    return (
        <section className="portfolio section-background" id="portfolio" aria-labelledby="portfolio-title">
            <h1 id="portfolio-title">Portfolio</h1>
            <div className="portfolio-grid">
                {projects.map((project) => (
                    <article
                        key={project.id}
                        className="portfolio-item"
                        onClick={() => openModal(project)}
                        role="button"
                        aria-label={`Voir les détails du projet ${project.title}`}
                    >
                        <img src={images[project.image]} alt={`Aperçu du projet ${project.title}`} />
                        <div className="portfolio-overlay">
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                            <div className="portfolio-links">
                                <a
                                    href={project.siteLink}
                                    className="portfolio-button"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Voir le site du projet ${project.title}`}
                                >
                                    Site
                                </a>
                                <a
                                    href={project.codeLink}
                                    className="portfolio-button github"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Voir le code source du projet ${project.title}`}
                                >
                                    Code
                                </a>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            {/* Utilisation du composant Modal */}
            {modalOpen && (
                <Modal
                    modalContent={modalContent}
                    closeModal={closeModal}
                    closeModalOutside={closeModalOutside}
                />
            )}
        </section>
    );
}

export default Portfolio;

import React, { useState, useEffect } from 'react';
import Modal from '../components/Modal';
import projects from '../data/projects.json';
import PortfolioGrid from '../components/PortfolioGrid';
import './style/Portfolio.scss';

function Portfolio() {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    // Ouvrir la modale avec le projet sélectionné
    const openModal = (project) => {
        setModalContent(project);
        setModalOpen(true);
    };

    // Fermer la modale
    const closeModal = () => {
        setModalOpen(false);
        setModalContent(null);
    };
    // Fermer la modale si l'utilisateur clique en dehors
    const closeModalOutside = (e) => {
        if (e.target.classList.contains('portfolio-modal')) {
            closeModal();
        }
    };

    // Faire défiler la page vers le haut
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'instant',
        });
    }, []);

    // Empêcher le défilement derrière la modale
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

            {/* Afficher les éléments du portfolio */}
            <PortfolioGrid
                projects={projects}
                openModal={openModal}
            />

            {/* Afficher la modale */}
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

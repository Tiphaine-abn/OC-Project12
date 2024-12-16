import React, { useState, useEffect } from 'react';
import ohmyfoodImg from '../assets/images/ohmyfood.webp';
import kasaImg from '../assets/images/kasa.webp';
import argentbankImg from '../assets/images/argentbank.webp';
import sophiebluelImg from '../assets/images/sophiebluel.webp';
import { FaSass, FaHtml5, FaCss3Alt, FaReact, FaJsSquare } from 'react-icons/fa';
import { SiRedux, SiSwagger, SiMongodb } from "react-icons/si";
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

    const getTechnologyIcon = (IconComponent) => {
        switch (IconComponent) {
            case 'FaSass':
                return <FaSass aria-label="Sass" />;
            case 'FaHtml5':
                return <FaHtml5 aria-label="HTML5" />;
            case 'FaCss3Alt':
                return <FaCss3Alt aria-label="CSS3" />;
            case 'FaReact':
                return <FaReact aria-label="React" />;
            case 'FaJsSquare':
                return <FaJsSquare aria-label="JavaScript" />;
            case 'SiRedux':
                return <SiRedux aria-label="Redux" />;
            case 'SiSwagger':
                return <SiSwagger aria-label="Swagger" />;
            case 'SiMongodb':
                return <SiMongodb aria-label="MongoDB" />;
            default:
                return null;
        }
    };

    return (
        <section className="portfolio section-background" id="portfolio" aria-labelledby="portfolio-title">
            <h1 id="portfolio-title">Portfolio</h1>
            <div className="portfolio-grid">
                {projects.map((project) => (
                    <article key={project.id} className="portfolio-item" onClick={() => openModal(project)} role="button" aria-label={`Voir les détails du projet ${project.title}`}>
                        <img src={images[project.image]} alt={`Aperçu du projet`} />
                        <div className="portfolio-overlay">
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                            <div className="portfolio-links">
                                <a href={project.siteLink} className="portfolio-button" target="_blank" rel="noopener noreferrer" aria-label={`Voir le site du projet ${project.title}`}>
                                    Site
                                </a>
                                <a href={project.codeLink} className="portfolio-button github" target="_blank" rel="noopener noreferrer" aria-label={`Voir le code source du projet ${project.title}`}>
                                    Code
                                </a>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            {/* Affichage de la modale avec la classe 'open' si modalOpen est true */}
            {modalOpen && (
                <div className={`portfolio-modal ${modalOpen ? 'open' : ''}`} onClick={closeModalOutside} aria-labelledby="modal-title" aria-describedby="modal-description">
                    <div className="modal-content">
                        <button className="close-modal" onClick={closeModal} aria-label="Fermer la modale">
                            <i className="fa-solid fa-chevron-down" aria-hidden="true"></i>
                        </button>
                        <h2 id="modal-title">{modalContent.title}</h2>
                        <p id="modal-description">{modalContent.modalDescription}</p>
                        <div className="technologies">
                            <h3>Technologies utilisées :</h3>
                            <ul>
                                {modalContent.technologies && modalContent.technologies.map((tech, index) => (
                                    <li key={index}>
                                        {getTechnologyIcon(tech.icon)}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Portfolio;

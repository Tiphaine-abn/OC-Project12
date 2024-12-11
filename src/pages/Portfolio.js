import React, { useState } from 'react';
import './style/Portfolio.scss';
import ohmyfoodImg from '../assets/images/ohmyfood.webp';
import kasaImg from '../assets/images/kasa.webp';
import argentbankImg from '../assets/images/argentbank.webp';
import sophiebluelImg from '../assets/images/sophiebluel.webp';
import { FaSass, FaHtml5, FaCss3Alt, FaReact, FaJsSquare } from 'react-icons/fa';
import { SiRedux, SiSwagger, SiMongodb } from "react-icons/si";

import projects from '../data/projects.json';

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
                return <FaSass />;
            case 'FaHtml5':
                return <FaHtml5 />;
            case 'FaCss3Alt':
                return <FaCss3Alt />;
            case 'FaReact':
                return <FaReact />;
            case 'FaJsSquare':
                return <FaJsSquare />;
            case 'SiRedux':
                return <SiRedux />;
            case 'SiSwagger':
                return <SiSwagger />;
            case 'SiMongodb':
                return <SiMongodb />;
            default:
                return null;
        }
    };

    return (
        <section className="portfolio section-background" id="portfolio">
            <h2>Portfolio</h2>
            <div className="portfolio-grid">
                {projects.map((project) => (
                    <div key={project.id} className="portfolio-item" onClick={() => openModal(project)}>
                        <img src={images[project.image]} alt={project.title} />
                        <div className="portfolio-overlay">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="portfolio-links">
                                <a href={project.siteLink} className="portfolio-button" target="_blank" rel="noopener noreferrer">
                                    Site
                                </a>
                                <a href={project.codeLink} className="portfolio-button github" target="_blank" rel="noopener noreferrer">
                                    Code
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Affichage de la modale avec la classe 'open' si modalOpen est true */}
            {modalOpen && (
                <div className={`portfolio-modal ${modalOpen ? 'open' : ''}`} onClick={closeModalOutside}>
                    <div className="modal-content">
                        <button className="close-modal" onClick={closeModal}>
                            <i className="fa-solid fa-chevron-down"></i>
                        </button>
                        <h3>{modalContent.title}</h3>
                        <p>{modalContent.modalDescription}</p>
                        <div className="technologies">
                            <h4>Technologies utilisées :</h4>
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

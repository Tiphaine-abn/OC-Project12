import React from 'react';

// Elements du portfolio (un projet individuel)
const PortfolioItem = ({ project, image, openModal }) => (
    <article
        className="portfolio-item"
        onClick={() => openModal(project)}
        role="button"
        aria-label={`Voir les détails du projet ${project.title}`}
    >
        {/* Affichage de l'image du projet */}
        <img src={image} alt={`Aperçu du projet ${project.title}`} />
        <div className="portfolio-overlay">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="portfolio-links">
                {/* Lien vers le site du projet */}
                <a
                    href={project.siteLink}
                    className="portfolio-button"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Voir le site du projet ${project.title}`}
                >
                    Site
                </a>
                {/* Lien vers le code source du projet */}
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
);

export default PortfolioItem;

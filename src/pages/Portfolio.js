import React from 'react';
import './style/Portfolio.scss';
import ohmyfoodImg from '../assets/images/ohmyfood.webp';
import kasaImg from '../assets/images/kasa.webp';
import argentbankImg from '../assets/images/argentbank.webp';
import sophiebluelImg from '../assets/images/sophiebluel.webp';
import projects from '../data/projects.json';

function Portfolio() {
    const images = {
        ohmyfoodImg,
        kasaImg,
        argentbankImg,
        sophiebluelImg,
    };

    return (
        <section className="portfolio section-background" id="portfolio">
            <h2>Portfolio</h2>
            <div className="portfolio-grid">
                {projects.map((project) => (
                    <div key={project.id} className="portfolio-item">
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
        </section>
    );
}

export default Portfolio;

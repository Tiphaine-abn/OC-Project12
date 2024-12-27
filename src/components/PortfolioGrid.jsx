import React from 'react';
import PortfolioItem from './PortfolioItem';
import { images } from '../utils/images';

// Grille de portfolio
const PortfolioGrid = ({ projects, openModal }) => (
    <div className="portfolio-grid">
        {/* Itérer sur tous les projets et rendre un PortfolioItem pour chaque projet */}
        {projects.map((project) => (
            <PortfolioItem
                key={project.id}
                project={project}
                image={images[project.image]}
                openModal={openModal}
            />
        ))}
    </div>
);

export default PortfolioGrid;

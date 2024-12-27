import React from 'react';
import { SiHtml5, SiCss3, SiSass, SiJavascript, SiReact, SiGithub, SiRedux, SiSwagger, SiMongodb, SiNotion, SiTrello } from "react-icons/si";
import { BiLogoNodejs, BiLogoVisualStudio } from "react-icons/bi";

const SkillsSection = () => (
    <section id="skills" className="sections" aria-labelledby="skills-title">
        <h1 id="skills-title">Compétences</h1>
        <div className="technologies">
            <h2>Technologies</h2>
            <div className="skills-grid">
                <div className="skill frontend">
                    <h3 id="frontend-title">Frontend</h3>
                    <ul className="icons">
                        <li><SiHtml5 aria-label="HTML5" title="HTML5" /></li>
                        <li><SiCss3 aria-label="CSS3" title="CSS3" /></li>
                        <li><SiSass aria-label="Sass" title="Sass" /></li>
                        <li><SiJavascript aria-label="JavaScript" title="JavaScript" /></li>
                        <li><SiReact aria-label="React" title="React" /></li>
                        <li><SiRedux aria-label="Redux" title="Redux" /></li>
                    </ul>
                </div>
                <div className="skill backend">
                    <h3 id="backend-title">Backend</h3>
                    <ul className="icons">
                        <li><BiLogoNodejs aria-label="Node.js" title="Node.js" /></li>
                        <li><SiMongodb aria-label="MongoDB" title="MongoDB" /></li>
                        <li><SiSwagger aria-label="Swagger" title="Swagger" /></li>
                    </ul>
                </div>
                <div className="skill tools">
                    <h3 id="tools-title">Outils</h3>
                    <ul className="icons">
                        <li><BiLogoVisualStudio aria-label="Visual Studio Code" title="Visual Studio Code" /></li>
                        <li><SiGithub aria-label="GitHub" title="GitHub" /></li>
                        <li><SiNotion aria-label="Notion" title="Notion" /></li>
                        <li><SiTrello aria-label="Trello" title="Trello" /></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="services">
            <h2>Domaines d'intervention</h2>
            <div className="services-table">
                {[
                    ["Création de sites Web responsives", "Conception de sites web adaptatifs, respectant les maquettes et optimisés pour tous les appareils"],
                    ["Développement d'applications Web avec React", "Applications web interactives avec React et gestion de l'état via Redux"],
                    ["Optimisation et débogage de sites Web", "Optimisation de la performance et débogage des sites web pour une meilleure expérience utilisateur"],
                    ["Gestion de versions et collaboration", "Gestion du versioning de projets avec Git et GitHub pour faciliter la collaboration"],
                    ["Intégration de données via API et formulaires", "Intégration des données API et récupération des informations utilisateur via des formulaires"],
                    ["Déploiement et mise en ligne de sites", "Déploiement de sites web statiques sur des plateformes comme GitHub Pages"],
                    ["Gestion de projet et spécifications techniques", "Rédaction de spécifications techniques et gestion de l'avancement des projets avec des outils de gestion"],
                    ["Veille technologique", "Suivi des dernières technologies pour offrir des solutions modernes"],
                ].map(([title, description], index) => (
                    <div key={index} className="service-item">
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default SkillsSection;

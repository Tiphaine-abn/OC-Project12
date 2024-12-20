import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Pour détecter les changements d'URL
import Timeline from "../components/Timeline";
import { SiHtml5, SiCss3, SiSass, SiJavascript, SiReact, SiGithub, SiRedux, SiSwagger, SiMongodb, SiNotion, SiTrello } from "react-icons/si";
import { BiLogoNodejs, BiLogoVisualStudio } from "react-icons/bi";
import avatar from '../assets/images/Avatar.webp';
import './style/Home.scss';

function Home() {
    const location = useLocation(); // Pour écouter les changements d'URL

    useEffect(() => {
        const hash = window.location.hash; // Récupère le hash dans l'URL
        const navbarHeight = document.querySelector('.navbar-custom').offsetHeight; // Hauteur de la barre de navigation
        if (hash) {
            const element = document.querySelector(hash); // Sélectionne l'élément correspondant
            if (element) {
                window.scrollTo({
                    top: element.offsetTop - navbarHeight, // Ajuste la position de défilement en tenant compte de la hauteur de la navbar
                    behavior: 'smooth',
                });
            }
        }
    }, [location]);

    return (
        <main>
            <section id="hero" className="hero">
                <div className="hero-content">
                    <h1 className="hero-title">Tiphaine Aubin</h1>
                    <h2 className="hero-subtitle">Développeuse - Intégratrice Web Junior</h2>
                    <a href="/portfolio" className="hero-button" aria-label="Voir mes projets">Découvrir mes projets</a>
                </div>
            </section>

            <section id="about" className="sections" aria-labelledby="about-title">
                <h2 id="about-title">À propos</h2>
                <div className="about-header">
                    <h3>Développeuse Web Junior : Passionnée et créative !</h3>
                </div>
                <div className="about-content">
                    <img src={avatar} alt="Avatar de Tiphaine Aubin" className="profile-photo" />
                    <div className="about-text">
                        <p>
                            Après plusieurs années dans le secteur de la culture et du patrimoine, j’ai choisi de réorienter ma carrière
                            vers le développement web pour donner vie à des projets innovants. Attirée par le potentiel du web à transformer
                            notre quotidien, je me suis spécialisée dans la création de sites intuitifs, fonctionnels et esthétiques.
                        </p>
                        <p>
                            Au fil de ma formation et de mes projets, j’ai acquis une solide maîtrise des technologies Front-End comme
                            <strong> HTML5, CSS3, JavaScript</strong> et <strong>React</strong>, ainsi que des outils collaboratifs tels que
                            <strong> Git, Trello</strong> et <strong>Notion</strong>.
                        </p>
                        <p>J’apprécie particulièrement le processus de transformer
                            une idée ou une maquette en une interface utilisateur fonctionnelle et engageante.
                        </p>
                    </div>
                </div>
            </section>

            <section id="career" className="sections" aria-labelledby="career-title">
                <h2 id="career-title">Parcours</h2>
                <Timeline />
            </section>

            <section id="skills" className="sections" aria-labelledby="skills-title">
                <h2 id="skills-title">Compétences</h2>
                <div className="technologies">
                    <h3>Technologies</h3>
                    <div className="skills-grid">
                        <div className="skill frontend">
                            <h4 id="frontend-title">Frontend</h4>
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
                            <h4 id="backend-title">Backend</h4>
                            <ul className="icons">
                                <li><BiLogoNodejs aria-label="Node.js" title="Node.js" /></li>
                                <li><SiMongodb aria-label="MongoDB" title="MongoDB" /></li>
                                <li><SiSwagger aria-label="Swagger" title="Swagger" /></li>
                            </ul>
                        </div>
                        <div className="skill tools">
                            <h4 id="tools-title">Outils</h4>
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
                    <h3>Domaines d'intervention</h3>
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
                                <h4>{title}</h4>
                                <p>{description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main >
    );
}

export default Home;

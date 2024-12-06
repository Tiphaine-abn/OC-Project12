import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Pour détecter les changements d'URL
import Timeline from "../components/Timeline";
import './style/Home.scss';

function Home() {
    const location = useLocation(); // Pour écouter les changements d'URL

    useEffect(() => {
        // Vérifie si un hash est présent dans l'URL
        const hash = window.location.hash;  // Récupère la partie hash de l'URL

        if (hash) {
            const element = document.querySelector(hash); // Cherche l'élément correspondant
            if (element) {
                // Faire défiler la page vers l'élément correspondant
                window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
            }
        }
    }, [location]); // Re-exécute lorsque l'URL change

    return (
        <main>
            <section id="hero" className="hero">
                <div className="hero-content">
                    <h1 className="hero-title">Tiphaine Aubin</h1>
                    <p className="hero-subtitle">Développeuse - Intégratrice Web Junior</p>
                    <a href="/portfolio" className="hero-button">Découvrir mes projets</a>
                </div>
            </section>

            <section id="about" className="sections">
                <h2>À propos</h2>
                <p>Lorem ipsum dolor sit amet...</p>
            </section>

            <section id="career" className="sections">
                <h2>Parcours</h2>
                <Timeline />
            </section>
            <section id="skills" className="sections">
                <h2>Compétences</h2>
                <h3>Technologies</h3>
                <div className="skills-grid">
                    <div className="skill frontend">
                        <h3>Frontend</h3>
                        <p>HTML3, CSS3, Sass, JavaScript, React, Redux</p>
                    </div>
                    <div className="skill backend">
                        <h3>Backend</h3>
                        <p>Node.js, MongoDB, API Swagger</p>
                    </div>
                    <div className="skill tools">
                        <h3>Outils</h3>
                        <p>GitHub, VSCode</p>
                    </div>
                </div>

                <h3>Domaines d'intervention</h3>
                <div className="services-table">
                    <div className="service-item">
                        <h4>Création de sites Web responsives</h4>
                        <p>Conception de sites web adaptatifs, respectant les maquettes et optimisés pour tous les appareils</p>
                    </div>
                    <div className="service-item">
                        <h4>Développement d'applications Web avec React</h4>
                        <p>Applications web interactives avec React et gestion de l'état via Redux</p>
                    </div>
                    <div className="service-item">
                        <h4>Optimisation et débogage de sites Web</h4>
                        <p>Optimisation de la performance et débogage des sites web pour une meilleure expérience utilisateur</p>
                    </div>
                    <div className="service-item">
                        <h4>Gestion de versions et collaboration</h4>
                        <p>Gestion du versioning de projets avec Git et GitHub pour faciliter la collaboration</p>
                    </div>
                    <div className="service-item">
                        <h4>Intégration de données via API et formulaires</h4>
                        <p>Intégration des données API et récupération des informations utilisateur via des formulaires</p>
                    </div>
                    <div className="service-item">
                        <h4>Déploiement et mise en ligne de sites</h4>
                        <p>Déploiement de sites web statiques sur des plateformes comme GitHub Pages</p>
                    </div>
                    <div className="service-item">
                        <h4>Gestion de projet et spécifications techniques</h4>
                        <p>Rédaction de spécifications techniques et gestion de l'avancement des projets avec des outils de gestion</p>
                    </div>
                    <div className="service-item">
                        <h4>Veille technologique</h4>
                        <p>Suivi des dernières technologies pour offrir des solutions modernes</p>
                    </div>
                </div>

            </section>
        </main>
    );
}

export default Home;

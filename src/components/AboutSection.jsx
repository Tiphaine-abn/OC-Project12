import React from 'react';
import avatar from '../assets/images/Avatar.webp';

const AboutSection = () => (
    <section id="about" className="sections" aria-labelledby="about-title">
        <h1 id="about-title">À propos</h1>
        <div className="about-header">
            <h2>Développeuse Web Junior : Passionnée et créative !</h2>
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
                    HTML5, CSS3, <strong> JavaScript</strong> et <strong>React</strong>, ainsi que des outils collaboratifs tels que
                    <strong> Git, Trello</strong> et <strong>Notion</strong>.
                </p>
                <p>J’apprécie particulièrement le processus de transformer
                    une idée ou une maquette en une interface utilisateur fonctionnelle et engageante.
                </p>
            </div>
        </div>
    </section>
);

export default AboutSection;

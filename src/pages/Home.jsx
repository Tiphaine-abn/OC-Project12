import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import CareerSection from '../components/CareerSection';
import './style/Home.scss';
import '../components/style/Hero.scss';
import '../components/style/About.scss';
import '../components/style/Career.scss';
import '../components/style/Skills.scss';

function Home() {
    const location = useLocation();

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
            <HeroSection />
            <AboutSection />
            <CareerSection />
            <SkillsSection />
        </main>
    );
}

export default Home;

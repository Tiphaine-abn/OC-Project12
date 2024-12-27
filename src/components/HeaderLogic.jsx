import { useState, useEffect } from 'react';

// Gère la logique de l'état du menu et du défilement de la page pour l'en-tête
const useHeaderLogic = (location) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Mise à jour de l'état `scrolled` en fonction du défilement vertical de la page
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };
        // Détecter le défilement de la fenêtre
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    return {
        menuOpen,
        scrolled,
        toggleMenu,
        closeMenu,
    };
};

export default useHeaderLogic;

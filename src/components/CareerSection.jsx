import React from 'react';
import Timeline from '../components/Timeline';
import './style/Career.scss';

const CareerSection = () => {
    return (
        <section id="career" className="sections" aria-labelledby="career-title">
            <h1 id="career-title">Parcours</h1>
            <h2>Mes expériences et formations</h2>
            <Timeline />
        </section>
    );
};

export default CareerSection;

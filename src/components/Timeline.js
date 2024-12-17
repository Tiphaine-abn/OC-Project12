import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGraduationCap, FaLaptopCode } from "react-icons/fa";
import { MdOutlineContactPage, MdOutlineFileDownload } from "react-icons/md";
import CV from '../assets/CV_TIPHAINE_AUBIN_2024.pdf';
import "./style/Timeline.scss";

const Timeline = () => {
    return (
        <section className="timeline-section">
            <VerticalTimeline>
                <VerticalTimelineElement
                    date=""
                    icon={<MdOutlineContactPage aria-hidden="true" />}
                    iconClassName="timeline-icon timeline-icon--cv"
                    aria-label="Télécharger mon CV"
                >
                    <a href={CV} className="cv-download-button" target="_blank" rel="noopener noreferrer" aria-label="Télécharger le CV PDF de Tiphaine Aubin" download>
                        Mon CV <MdOutlineFileDownload aria-hidden="true" />
                    </a>
                    <p>Consultez mon parcours en détail en téléchargeant mon CV complet en PDF.</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    date="2025"
                    icon={<FaLaptopCode aria-hidden="true" />}
                    iconClassName="timeline-icon timeline-icon--developer"
                    aria-label="2025 : Développeuse Web"
                >
                    <h3>Développeuse Web</h3>
                    <p>Création de sites modernes et responsives.</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    date="2024"
                    icon={<FaGraduationCap aria-hidden="true" />}
                    iconClassName="timeline-icon timeline-icon--graduation"
                    aria-label="2024 : Formation Développeuse Web"
                >
                    <h3>Formation Développeuse Web</h3>
                    <p>Certification Développeuse - Intégratrice Web chez OpenClassrooms.</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    date="2020"
                    icon={<FaGraduationCap aria-hidden="true" />}
                    iconClassName="timeline-icon timeline-icon--graduation"
                    aria-label="2020 : Master 2 Pro en Patrimoine culturel et technique"
                >
                    <h3>Master 2 Pro | Patrimoine culturel et technique</h3>
                    <p>Formation en gestion et valorisation du patrimoine culturel, avec une spécialisation en outils numériques de création et de design appliqués à la culture (Adobe XD, Photoshop, InDesign).</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    date="2012-2018"
                    icon={<FaGraduationCap aria-hidden="true" />}
                    iconClassName="timeline-icon timeline-icon--graduation"
                    aria-label="2012-2018 : Licence et Master 2 en Histoire de l'art"
                >
                    <h3>Licence & Master 2 | Histoire de l'art</h3>
                    <p>Formation en histoire de l'art, avec une spécialisation en muséologie et gestion du patrimoine.</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </section >
    );
};

export default Timeline;

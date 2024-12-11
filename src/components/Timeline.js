import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGraduationCap, FaLaptopCode } from "react-icons/fa";
import "./style/Timeline.scss";

const Timeline = () => {
    return (
        <section className="timeline-section">
            <VerticalTimeline>
                <VerticalTimelineElement
                    date="2025"
                    icon={<FaLaptopCode />}
                    iconClassName="timeline-icon-developer"
                >
                    <h3>Développeuse Web</h3>
                    <p>Création de sites modernes et responsives.</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    date="2024"
                    icon={<FaGraduationCap />}
                    iconClassName="timeline-icon-graduation"
                >
                    <h3>Formation Développeuse Web</h3>
                    <p>Certification Développeuse - Intégratrice Web chez OpenClassrooms.</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    date="2020"
                    icon={<FaGraduationCap />}
                    iconClassName="timeline-icon-graduation"
                >
                    <h3>Master 2 Pro | Patrimoine culturel et technique</h3>
                    <p>Formation en gestion et valorisation du patrimoine culturel, avec une spécialisation en outils numériques de création et de design appliqués à la culture (Adobe XD, Photoshop, InDesign).</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    date="2012-2018"
                    icon={<FaGraduationCap />}
                    iconClassName="timeline-icon-graduation"
                >
                    <h3>Licence & Master 2 | Histoire de l'art</h3>
                    <p>Formation en histoire de l'art, avec une spécialisation en muséologie et gestion du patrimoine.</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </section>
    );
};

export default Timeline;

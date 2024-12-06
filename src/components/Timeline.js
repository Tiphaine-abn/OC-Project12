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
                    date="2024"
                    icon={<FaGraduationCap />}
                    iconClassName="timeline-icon-graduation"
                >
                    <h3>Formation Développeuse Web</h3>
                    <p>Certification Développeuse - Intégratrice Web chez OpenClassrooms.</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    date="2024"
                    icon={<FaLaptopCode />}
                    iconClassName="timeline-icon-developer"
                >
                    <h3>Développeuse Web</h3>
                    <p>Création de sites modernes et responsives.</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </section>
    );
};

export default Timeline;

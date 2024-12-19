import React from 'react';
import { FaSass, FaHtml5, FaCss3Alt, FaReact, FaJsSquare } from 'react-icons/fa';
import { SiRedux, SiSwagger, SiMongodb } from "react-icons/si";
import './style/Modal.scss';

const Modal = ({ modalContent, closeModal, closeModalOutside }) => {
    const getTechnologyIcon = (tech) => {
        const techMap = {
            FaSass: <FaSass aria-label="Sass" />,
            FaHtml5: <FaHtml5 aria-label="HTML5" />,
            FaCss3Alt: <FaCss3Alt aria-label="CSS3" />,
            FaReact: <FaReact aria-label="React" />,
            FaJsSquare: <FaJsSquare aria-label="JavaScript" />,
            SiRedux: <SiRedux aria-label="Redux" />,
            SiSwagger: <SiSwagger aria-label="Swagger" />,
            SiMongodb: <SiMongodb aria-label="MongoDB" />,
        };
        return techMap[tech] || null;
    };

    if (!modalContent) return null;

    return (
        <div
            className="portfolio-modal open"
            onClick={closeModalOutside}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
        >
            <div className="modal-content">
                <button
                    className="close-modal"
                    onClick={closeModal}
                    aria-label="Fermer la modale"
                >
                    <i className="fa-solid fa-chevron-down" aria-hidden="true"></i>
                </button>
                <h2 id="modal-title">{modalContent.title}</h2>
                <p id="modal-description">{modalContent.modalDescription}</p>
                <div className="technologies">
                    <h3>Technologies utilisées :</h3>
                    <ul>
                        {modalContent.technologies &&
                            modalContent.technologies.map((tech, index) => (
                                <li key={index}>
                                    {getTechnologyIcon(tech.icon)}
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Modal;

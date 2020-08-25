import renderSkill from "./renderSkill";
import React from "react";

import '../style/ProjectCard.css'
/* Renders a formatted project card using information given. */
export default function renderProject(skills, image, title, description, link, styles) {
    return (
        <div
            className="work"
            style={styles}
        >
            {/* <img className="work-image" src={image} alt={title} /> */}


            <p className="work-header " style={{fontSize: '2em'}}>
                {title}
            </p>

            {renderSkill(skills, title)}

            <p className="summary" style={{fontSize: '20px'}}>
                {description}
            </p>
            <div className="work-more">
                <a className="work-more-text text-white" href={link} rel="noopener noreferrer" target="_blank"> View More </a>
            </div>
        </div>
    );
}
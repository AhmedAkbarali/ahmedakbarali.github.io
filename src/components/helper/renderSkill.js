import React from "react";
import arraySkills from '../resources/arraySkill';


/* Renders icons corresponding to the skills given */
export default function renderSkills(skills) {
    const listItems = (skills).map((skill) =>
        <div data-skill={arraySkills.find( ({ name }) => name === skill ).name}>
            <div className="skills-image">
                <img
                    className="skill-thumb"
                    src={arraySkills.find( ({ name }) => name === skill ).obj}
                    alt={arraySkills.find( ({ name }) => name === skill ).name}
                />

                <div className="skill-name" ></div>
            </div>
        </div>
    );

    return(
        <div className="skills-container">
            {listItems}
        </div>
    );
}
import React, { Component } from 'react';

import './style/App.css';
import './style/Skills.scss';

import renderSkill from "./helper/renderSkill";

class Skills extends Component {
    render() {
        return (
            <div className="skill-wrapper App skill-font">
                <p className="align-self-center section-heading">
                    Skills
                </p>

                <p style={{marginTop: '50px'}}>
                    What interests me most right now:
                </p>
                <div className="skill-section">
                    {renderSkill(['react', 'javascript', 'html5', 'css', 'mongodb', 'nodejs'])}
                </div>
                <p style={{marginTop: '50px'}}>
                    Skills I have experience with:
                </p>

                <div className="skill-section" >
                    {renderSkill(['java', 'android', 'photoshop', 'illustrator'])}
                </div>
            </div>
        );
    }
}


export default Skills;
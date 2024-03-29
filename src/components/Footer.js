import React from 'react';

import Contact from './Contact';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer-container">
                <div className="about">
                    <p className="section-heading" style={{marginTop: '0', paddingTop: '2em'}}>
                        About
                    </p>
                    <p>
                        My name is Ahmed Akbarali. I have a B.Sc Computer Science from York University,
                        Lassonde School of Engineering.  <br/>
                        My focus is on Web Applications and websites, using React and NodeJS.
                    </p>
                </div>
                <Contact />
            </div>
        );
    }
}

export default Footer;
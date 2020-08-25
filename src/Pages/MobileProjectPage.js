import React from 'react';
import NavigationBar from "../components/NavigationBar";

import Footer from "../components/Footer";
import renderProject from "../components/helper/renderProject";

import '../components/style/App.css'
import {Helmet} from "react-helmet/es/Helmet";

class MobileProjectPage extends React.Component {
    render() {
        return (
            <div className="global " style={{minHeight: '100vh'}}>
                <Helmet>
                    <title>Mobile Development</title>
                    <meta name="keywords"
                          content="Developer,Web Developer, Frontend developer, Frontend Engineer, Backend Developer
                                        Mobile Developer,HTML,CSS,JavaScript, React, ReactJS, NodeJS"
                    />
                    <meta
                        name="description"
                        content="Mobile Development Projects from Ahmed's portfolio site."
                    />
                </Helmet>
                <NavigationBar />
                <p className="align-self-center section-heading">
                    Mobile Development Projects
                </p>

                {renderProject(
                    ['java', 'android'],
                    '',
                    'Swipe-To-Delete',
                    'A game designed for a User Study in order to quantify the value of\n' +
                    'swiping to delete objects like emails in mobile applications.',
                    'https://github.com/AhmedAkbarali/Swipe-To-Delete',
                    {background: `linear-gradient(135deg, #087e8b 0%, rgb(67, 187, 245) 100%)`}

                )}

                {renderProject(
                    ['java', 'android'],
                    '',
                    'Tiltball',
                    'Game for Mobile UI Course. Keep ball within the lines using tilt\n' +
                    ' controls while completing laps around the donut or square.',
                    'https://github.com/AhmedAkbarali/Tiltball',
                    {background: `linear-gradient(135deg, #087e8b 0%, rgb(67, 187, 245) 100%)`}

                )}
                <Footer/>
            </div>
        );
    }
}

export default MobileProjectPage;
import React from 'react';
import NavigationBar from "../components/NavigationBar";

import '../components/style/Footer.css'

import {Nav, Navbar} from "react-bootstrap";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";
import email from "../images/email.png";
import {Helmet} from "react-helmet/es/Helmet";

class ContactMe extends React.Component {
    render() {
        return (
            <div className="global align-items-center justify-content-center " style={{minHeight: '100vh', textAlign: 'center'}}>
                <Helmet>
                    <title>Contact Me</title>
                    <meta name="keywords"
                          content="Developer,Web Developer, Frontend developer, Frontend Engineer, Backend Developer
                                        Mobile Developer,HTML,CSS,JavaScript, React, ReactJS, NodeJS"
                    />
                    <meta
                        name="description"
                        content="Ahmed's contact information"
                    />
                </Helmet>
                <NavigationBar />
                <p className="section-heading" style={{marginTop: '0', paddingTop: '2em'}}>
                    Contact
                </p>
                <p>
                    If you would like to contact me feel free to do so using one of the links below.
                </p>
                <Navbar style={{fontSize: '32px', paddingBottom: '0', justifyContent: 'center'}}>
                    <Nav.Item>
                        <Nav.Link href="https://www.linkedin.com/in/ahmed-akbarali-4799b570/" target="_blank">
                            <img
                                className="header-image"
                                src={linkedin}
                                alt="linkedin"
                                style={{ filter: 'invert(1)'}}
                            />
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="https://www.github.com/AhmedAkbarali" target="_blank">
                            <img
                                className="header-image"
                                src={github}
                                alt="github"
                                style={{filter: 'invert(1)'}}
                            />
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="mailto:ahmed.amin.akbarali@gmail.com" target="_blank">
                            <img
                                className="header-image"
                                src={email}
                                alt="email"
                                style={{filter: 'invert(1)'}}
                            />
                        </Nav.Link>
                    </Nav.Item>
                </Navbar>
            </div>
        );
    }
}

export default ContactMe;
import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";
import email from "../images/email.png";

import './style/App.css'

class LinkNavBar extends React.Component {
    render() {
        return (
            <Navbar bsPrefix="navi-container">
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
        );
    }
}

export default LinkNavBar;
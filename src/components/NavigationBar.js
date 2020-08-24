import React, { Component } from 'react';
import { Nav, Navbar, Modal } from 'react-bootstrap';
import { Link } from "react-router-dom";

import menu from '../images/menu.png';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';
import email from '../images/email.png';

import './style/NavigationBar.css';

class NavigationBar extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
          modalState: false
        };
    }

    handleClick() {
        this.setState({ modalState: !this.state.modalState})
    }

    render() {
        return (
            <>
                <Modal  className="my-modal" show={this.state.modalState} onHide={this.handleClick} centered>
                    <Modal.Body className="my-modal-body">
                        <Link to={process.env.PUBLIC_URL + "/"} className="modal-links" onClick={this.handleClick}>Home</Link>
                        <Link to={process.env.PUBLIC_URL + "/webdev"} className="modal-links " onClick={this.handleClick}>Web Development</Link>
                        <Link to={process.env.PUBLIC_URL + "/mobdev"} className="modal-links " onClick={this.handleClick}>Mobile Development</Link>
                        <Link to={process.env.PUBLIC_URL + "/skills"} className="modal-links " onClick={this.handleClick}>Skills</Link>
                        <Link to={process.env.PUBLIC_URL + "/contact" }className="modal-links " onClick={this.handleClick}>Contact Me</Link>
                    </Modal.Body>
                </Modal>
                {/* Navigation bar at top of screen */}
                <Navbar className="header-navbar p-1 justify-content-between fixed-top">
                    <Nav.Item>
                        <Nav.Link href="#" onClick={this.handleClick}>
                            <img className="header-image" src={menu} alt="menu"/>
                        </Nav.Link>
                    </Nav.Item>

                    <Navbar>
                        <Nav.Item>
                            <Nav.Link href="https://www.linkedin.com/in/ahmed-akbarali-4799b570/" rel="noreferrer" target="_blank">
                                <img className="header-image" src={linkedin} alt="linkedin"/>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="https://www.github.com/AhmedAkbarali" rel="noreferrer" target="_blank">
                                <img className="header-image" src={github} alt="github"/>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="mailto:ahmed.amin.akbarali@gmail.com" target="_blank">
                                <img className="header-image" src={email} alt="email"/>
                            </Nav.Link>
                        </Nav.Item>
                    </Navbar>
                </Navbar>
            </>


        );
    }
}

export default NavigationBar;
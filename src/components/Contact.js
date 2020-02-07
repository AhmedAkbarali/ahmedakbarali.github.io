import React from 'react';

import LinkNavBar from "./LinkNavBar";

import './style/App.css'

class Contact extends React.Component {
    render() {
        return (
            <div className="">
                <p className="section-heading" style={{marginTop: '0', paddingTop: '2em'}}>
                    Contact
                </p>
                <p>
                    If you would like to contact me feel free to do so using one of the links below.
                </p>
                <LinkNavBar />
            </div>
        );
    }
}

export default Contact;
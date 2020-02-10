import React, { Component } from 'react';

import NavigationBar from '../components/NavigationBar';
import PathBar from "../components/PathBar";
import DLButton from "../components/DLButton";
import Skills from '../components/Skills';
import Footer from '../components/Footer';

import renderProject from "../components/helper/renderProject";

import bg from '../images/bg.jpg'
//import blog from '../images/coffee.jpg'

import '../components/style/App.css';
import '../components/style/IntroductionAnimation.scss';
import '../components/style/Skills.scss'

class Home extends Component {
    render() {
        return (
            <div className="global">
                <div className="App home"
                     style={{
                         backgroundImage: `url(${bg})`,
                         backgroundSize: '100%',
                         border: ' 2px solid black'
                     }}
                >
                    <NavigationBar />
                    <div className="intro">
                        <div className="intro-container">
                                Hello, my name is Ahmed.
                                {this.renderIntroduction()}
                        </div>
                    </div>
                    <DLButton />
                    <PathBar />
                </div>

                <p className="align-self-center section-heading">
                    Past Projects
                </p>

                {renderProject(
                ['react', 'javascript', 'html5', 'css'],
                '',
                'Survey',
                'Send Survey to a list of emails Their response is recorded on a server. \n' +
                'Payment API: Stripe, Server: MongoDB',
                'https://github.com/AhmedAkbarali/Survey',
                {background: `linear-gradient(145deg, #037971 0%, #03b5aa 100%)`}
                )}

                {renderProject(
                    ['react', 'javascript', 'html5', 'css'],
                    '',
                    'Streamy',
                    'A functioning streaming website similar to twitch.tv compatible \n' +
                    'with popular broadcasting software (OBS, Streamlabs etc.)',
                    'https://github.com/AhmedAkbarali/Streaming-website',
                    {background: `linear-gradient(135deg, rgb(53, 16, 78) 0%, rgb(43, 50, 178) 100%)`}
                )}

                {renderProject(
                    ['java', 'android'],
                    '',
                    'Swipe To Delete',
                    'A game designed for a User Study in order to quantify the value of\n' +
                    'swiping to delete objects like emails in mobile applications.',
                    'https://github.com/AhmedAkbarali/Swipe-To-Delete',
                    {background: `linear-gradient(135deg, #087e8b 0%, rgb(67, 187, 245) 100%)`}

                )}

                {renderProject(
                    ['react', 'javascript', 'html5', 'css'],
                    '',
                    'Blog',
                    'Blog website populated with dummy data using jsonPlaceholder.\n' +
                    'An educational project to learn how to use Redux. (Specifically Actions, Reducers and Store.)',
                    'https://github.com/AhmedAkbarali/blogs',
                    {background: `linear-gradient(135deg, #ba5c12 0%, rgb(139,69,19) 100% )`}
                )}

                <Skills />
                <Footer/>
            </div>
        );
    }

    /* Introductory heading with animated css (text change) */
    renderIntroduction() {
        return (
            <div className="animation-wrapper">
                <p className="content">
                    I'm a
                </p>
                <div className="container">
                    <div className="word w1">Web Developer</div>
                    <div className="word w2">Coffee Lover</div>
                    <div className="word w3">Reader</div>
                    <div className="word w4">B.Sc Comp. Sci.</div>
                    <div className="word w5">Traveller</div>
                </div>
            </div>
        );
    }
}

export default Home;
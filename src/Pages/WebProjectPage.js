import React from 'react';
import NavigationBar from "../components/NavigationBar";

import Footer from "../components/Footer";
import renderProject from "../components/helper/renderProject";

import '../components/style/App.css'
import {Helmet} from "react-helmet/es/Helmet";

class WebProjectPage extends React.Component {
    render() {
        return (
            <div className="global " style={{minHeight: '100vh'}}>
                <Helmet>
                    <title>Web Development</title>
                    <meta name="keywords"
                          content="Developer,Web Developer, Frontend developer, Frontend Engineer, Backend Developer
                                            Mobile Developer,HTML,CSS,JavaScript, React, ReactJS, NodeJS"
                    />
                    <meta
                        name="description"
                        content="Web Development Projects from Ahmed's portfolio site."
                    />
               </Helmet>
                <NavigationBar />
                <p className="align-self-center section-heading">
                    Web Development Projects
                </p>

                {renderProject(
                    ['react', 'javascript', 'html5', 'css'],
                    'streamy',
                    'Streamy',
                    'A functioning streaming website similar to twitch.tv compatible \n' +
                    'with popular broadcasting software (OBS, Streamlabs etc.)',
                    'https://github.com/AhmedAkbarali/Streaming-website',
                    {background: `linear-gradient(135deg, rgb(53, 16, 78) 0%, rgb(43, 50, 178) 100%)`}
                )}

                {renderProject(
                    ['react', 'javascript', 'html5', 'css'],
                    '',
                    'Survey',
                    'Send Survey to a list of emails Their response is recorded on a server. \n' +
                    'Payment API: Stripe, Server: MongoDB',
                    'https://github.com/AhmedAkbarali/Survey',
                    {background: `linear-gradient(145deg, #400406 0%, #3b0406 100%)`}
                )}

                {renderProject(
                    ['react', 'javascript', 'html5', 'css'],
                    'blog',
                    'Blog',
                    'Blog website populated with dummy data using jsonPlaceholder.\n' +
                    'An educational project to learn how to use Redux. (Specifically Actions, Reducers and Store.)',
                    'https://github.com/AhmedAkbarali/blogs',
                    {background: `linear-gradient(135deg, #ba5c12 0%, rgb(139,69,19) 100% )`}
                )}
                <Footer/>
            </div>
        );
    }
}

export default WebProjectPage;
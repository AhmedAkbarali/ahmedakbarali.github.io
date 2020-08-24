import React, { Component } from 'react';

import Home from '../Pages/Home';
import SkillPage from '../Pages/SkillPage';
import ContactMe from '../Pages/ContactMe';
import WebProjectPage from "../Pages/WebProjectPage";
import MobileProjectPage from "../Pages/MobileProjectPage";

import './style/App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Helmet} from "react-helmet/es/Helmet";



class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Helmet>
                        <title>Ahmed Akbarali</title>
                        <meta name="keywords"
                              content="Developer,Web Developer, Frontend developer, Frontend Engineer, Backend Developer
                                        Mobile Developer,HTML,CSS,JavaScript, React, ReactJS, NodeJS"
                        />
                        <meta
                            name="description"
                            content="Home page of Ahmed's portfolio site."
                        />
                    </Helmet>
                    <Home />
                </Route>
                <Route path="/webdev" exact>
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
                    <WebProjectPage />
                </Route>
                <Route path="/mobdev" exact>
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
                    <MobileProjectPage />
                </Route>
                <Route path="/skills" exact>
                    <Helmet>
                        <title>Skills</title>
                        <meta name="keywords"
                              content="Developer,Web Developer, Frontend developer, Frontend Engineer, Backend Developer
                                        Mobile Developer,HTML,CSS,JavaScript, React, ReactJS, NodeJS"
                        />
                        <meta
                            name="description"
                            content="Technology, Languages that I'm familiar with"
                        />
                    </Helmet>
                    <SkillPage />
                </Route>
                <Route path="/contact" exact>
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
                    <ContactMe />
                </Route>
            </Switch>
        </BrowserRouter>
    );
  }
}

export default App;

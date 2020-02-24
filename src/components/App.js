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
                        <title>Home</title>
                    </Helmet>
                    <Home />
                </Route>
                <Route path="/webdev" exact>
                    <Helmet>
                        <title>Web Development</title>
                    </Helmet>
                    <WebProjectPage />
                </Route>
                <Route path="/mobdev" exact>
                    <Helmet>
                        <title>Mobile Development</title>
                    </Helmet>
                    <MobileProjectPage />
                </Route>
                <Route path="/skills" exact>
                    <Helmet>
                        <title>Skills</title>
                    </Helmet>
                    <SkillPage />
                </Route>
                <Route path="/contact" exact>
                    <Helmet>
                        <title>Contact Me</title>
                    </Helmet>
                    <ContactMe />
                </Route>
            </Switch>
        </BrowserRouter>
    );
  }
}

export default App;

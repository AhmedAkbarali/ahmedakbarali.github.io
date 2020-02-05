import React, { Component } from 'react';

import Home from '../Pages/Home';
import SkillPage from '../Pages/SkillPage';
import ContactMe from '../Pages/ContactMe';
import WebProjectPage from "../Pages/WebProjectPage";

import './style/App.css';
import { HashRouter, Switch, Route } from "react-router-dom";
import MobileProjectPage from "../Pages/MobileProjectPage";



class App extends Component {
  render() {
    return (
        <HashRouter basename='/'>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/webdev" exact>
                    <WebProjectPage />
                </Route>
                <Route path="/mobdev" exact>
                    <MobileProjectPage />
                </Route>
                <Route path="/skills" exact>
                    <SkillPage />
                </Route>
                <Route path="/contact" exact>
                    <ContactMe />
                </Route>
            </Switch>
        </HashRouter>
    );
  }
}

export default App;

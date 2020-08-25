import React, { Component } from 'react';

import Home from '../Pages/Home';
import SkillPage from '../Pages/SkillPage';
import ContactMe from '../Pages/ContactMe';
import WebProjectPage from "../Pages/WebProjectPage";
import MobileProjectPage from "../Pages/MobileProjectPage";

import './style/App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
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
        </BrowserRouter>
    );
  }
}

export default App;

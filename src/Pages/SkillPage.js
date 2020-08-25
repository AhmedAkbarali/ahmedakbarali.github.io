import React from 'react';
import Skills from "../components/Skills";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";

import '../components/style/App.css';
import '../components/style/SkillPage.scss';
import { Table } from 'react-bootstrap';
import {Helmet} from "react-helmet/es/Helmet";

class SkillPage extends React.Component {
    render() {
        return (
          <div className="global" style={{minHeight: '100vh', position: 'relative'}}>
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
              <NavigationBar/>
              <Skills/>
              <div className="skill-table align-self-center">
                  <Table style={{color: '#666'}}  borderless >
                      <tbody>
                        <tr>
                            <td className="skill-title">Languages:</td>
                            <td className="skill-content">
                                C, SQL, Java,
                                Javascript, Eiffel, Assembly, Verilog, HTML5, CSS3, SCSS
                            </td>
                        </tr>
                        <tr>
                            <td className="skill-title">Development Tools:</td>
                            <td className="skill-content">
                                Git, Eclipse, WebStorm, Atom
                            </td>
                        </tr>
                        <tr>
                            <td className="skill-title">Frameworks:</td>
                            <td className="skill-content">
                                ReactJS, MongoDB, ES6, NodeJS/ExpressJS
                            </td>
                        </tr>
                        <tr>
                            <td className="skill-title">Design:</td>
                            <td className="skill-content">
                                Adobe Photoshop, Adobe Illustrator
                            </td>
                        </tr>
                        <tr>
                            <td className="skill-title">Operating Systems:</td>
                            <td className="skill-content">
                                Linux, Windows (Desktop and Mobile), Android, iOS
                            </td>
                        </tr>
                        <tr>
                            <td className="skill-title">Basic Softwares:</td>
                            <td className="skill-content">
                                Microsoft Word, Microsoft Excel
                            </td>
                        </tr>
                      </tbody>
                  </Table>
              </ div>
              <div className="skill-footer">
                  <Footer/>
              </div>
          </div>
        );
    }
}

export default SkillPage;
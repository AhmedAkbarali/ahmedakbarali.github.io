import React, {Component} from 'react';
import './style/PathBar.css';

class PathBar extends Component {
    renderAnchors(subheading, heading, path){
        return (
            <a href={'/'+ path} className="bottom-anchors">
                <div>
                    <p className="bottom-anchor-subheading">{subheading}</p>
                    <p className="bottom-anchor-heading">{heading}</p>
                </div>
            </a>
        );
    }

    render() {
        return (
            <div className="bottom">
                {this.renderAnchors('Web', 'DEVELOPMENT', 'webdev')}
                {this.renderAnchors('Other', 'SKILLS', 'skills')}
                {this.renderAnchors('Mobile', 'DEVELOPMENT', 'mobdev')}
            </div>
        );
    }
}

export default PathBar;
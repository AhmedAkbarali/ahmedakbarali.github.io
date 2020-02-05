import React, {Component} from 'react';

import './style/DLButton.css';

class DLButton extends Component {
    render() {
        return (
                <button
                    onClick={() => window.open("https://drive.google.com/file/d/1zFVGfN1zJycx5weLHXw2ePyFZkoPHRY7FltmhrGtKIw/view?usp=sharing", "_blank")}
                    className="App-resume-button"
                >
                    <div style={{letterSpacing: '3px'}}>
                        DOWNLOAD RESUME
                    </div>
                </button>
        );
    }
}

export default DLButton;
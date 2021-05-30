import React, {Component} from 'react';

import './style/DLButton.css';

class DLButton extends Component {
    render() {
        return (
                <button
                    onClick={() => window.open("https://www.dropbox.com/s/e7mbfdt1u3e439e/Ahmed%20Akabrali_resume_web.pdf?dl=1", "_blank")}
                    className="App-resume-button"
                >
                    <div>
                        DOWNLOAD RESUME
                    </div>
                </button>
        );

    }
}

export default DLButton;
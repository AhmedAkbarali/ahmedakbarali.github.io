import React, {Component} from 'react';

import './style/DLButton.css';

class DLButton extends Component {
    render() {
        return (
                <button
                    onClick={() => window.open("https://www.dropbox.com/s/q6krwp8y7zyj6ey/Ahmed%20Akbarali_resume.docx?dl=1", "_blank")}
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
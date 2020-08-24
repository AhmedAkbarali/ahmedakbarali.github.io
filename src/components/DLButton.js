import React, {Component} from 'react';

import './style/DLButton.css';

class DLButton extends Component {
    render() {
        return (
                <button

                    onClick={() => window.open("https://www.dropbox.com/s/0gfdv3gia0eiuib/Ahmed%20Akbarali_resume.pdf?dl=1", "_blank")}
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
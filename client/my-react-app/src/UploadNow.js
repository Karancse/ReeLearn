import React from 'react';
import './uploadNowStyle.css';
import Webcam from "react-webcam";

class CameraView extends React.Component {

    constructor (props) {
        super(props);
        this.state = {

        }
    }

    render() {

        const videoConstraints = {
            facingMode: { exact: "environment" }
        };

        return (
            <div className="cameraView">
                <Webcam videoConstraints={videoConstraints} />
            </div>
        )
    }

}

class CameraOptions extends React.Component {

    constructor(props) {
        super(props);
        this.state ={

        }
    }

    render() {
        return (
            <div className="cameraOptions">

            </div>
        )
    }

}

class UploadNow extends React.Component {

    constructor (props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="UploadNow">
                <CameraView></CameraView>
                <CameraOptions></CameraOptions>
            </div>
        )
    }

}

export default UploadNow;
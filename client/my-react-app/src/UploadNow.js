import React from 'react';
import './uploadNowStyle.css';
import Webcam from "react-webcam";
import { render } from 'react-dom'
import VideoRecorder from 'react-video-recorder'

const videoConstraints = {
    facingMode: "user"
};

class StartRecording extends React.Component {

    constructor (props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="buttonClass">
                <div className="imageContainerPosition">
                    <div className="imageContainer">

                    </div>
                </div>
                <div className="startRecording">
                    <li>Start</li>
                    <li>Recording</li>
                </div>
            </div>
        )
    }

}

class StopRecording extends React.Component {

    constructor (props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="buttonClass">
                <div className="imageContainerPosition">
                    <div className="imageContainer">

                    </div>
                </div>
                <div className="stopRecording">
                    <li>Stop</li>
                    <li>Recording</li>
                </div>
            </div>
        )
    }

}

class TakeScreenshot extends React.Component {

    render() {
        return (
            <div className="buttonClass" onClick = { () => this.props.onCLick() }>
                <div className="imageContainerPosition">
                    <div className="imageContainer">

                    </div>
                </div>
                <div className="takeScreenshot">
                    <li>Take</li>
                    <li>Screenshot</li>
                </div>
            </div>
        )
    }

}

class Upload extends React.Component {

    constructor (props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="buttonClass">
                <div className="imageContainerPosition">
                    <div className="imageContainer">

                    </div>
                </div>
                <div className="upload">
                    <li>Upload</li>
                </div>
            </div>
        )
    }

}

const WebcamCapture = () => {
    const webcamRef = React.useRef(null);

    const capture = React.useCallback(
      () => {
        const imageSrc = webcamRef.current.getScreenshot();
        this.props.addScreenshot(imageSrc);
      },
      [webcamRef]
    );
  
    return (
      <div className = "webcamCapture">
        <div className = "webcam">
            <Webcam
                audio={false}
                height={ 180 }
                width={ 320 }
                screenshotFormat="image/jpeg"
                videoConstraints={videoConstraints}
            />
        </div>
        <div className = "videoOptionsPosition">
            <div className = "videoOptions">
                <TakeScreenshot onClick={() => capture()}></TakeScreenshot>
                <Upload></Upload>
            </div>
        </div>

      </div>
    );
};

class CameraView extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
        }
    }

    render() {

        const videoConstraints = {
            facingMode: "user"
        };

        return (
            <div className="cameraViewSpace">
                <div className="cameraView">
                    <div className="videoPosition">
                        <VideoRecorder
                            onRecordingComplete={videoBlob => {
      // Do something with the video...
                            console.log('videoBlob', videoBlob)
                            }}
                        />      
                    </div>
                </div>
            </div>
        )
    }

}

class Screenshots extends React.Component {

    render() {
        return (    
            <div className = "screenshots">
                {
                    this.props.screenshots.map((image) => (
                        <img src = {image}></img>
                    ))
                }
            </div>
        )
    }

}

class UploadNow extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            screenshots: []
        }
    }

    addScreenshot(image){
        var screenshots = this.state.screenshots
        screenshots.push(image)
        this.setState({
            screenshots: screenshots
        })
    }

    render() {
        
        const videoConstraints = {
            width: 320,
            height: 180,
            facingMode: "user"
        };

        return (

            <div className="uploadNow">
                <div class = "leftPanel">
                    <div className="leftPanelMargin">
                        <WebcamCapture
                            audio={false}
                            height={ 180 }
                            width={ 320 }
                            videoConstraints={videoConstraints} 
                            addScreenshot = {image => this.props.addScreenshot(image) }
                        />
                    </div>
                    <Screenshots screenshots = { this.state.screenshots }></Screenshots>
                </div>
                    <CameraView>
                    </CameraView>
                
            </div>
        )
    }

}

export default UploadNow;

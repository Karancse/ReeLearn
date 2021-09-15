import React from 'react';
import './additionalSettingsStyle.css';
import S3 from "react-aws-s3";
//var ReactS3Uploader = require('react-s3-uploader');

import ReactS3Uploader from 'react-s3-uploader';
import {reactLocalStorage} from 'reactjs-localstorage';

class UploadWithProgress extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            video: this.props.video
            moderatorUsername: '',
            quiz: '',
            colloborators: [''],
            progressBarLength: 0,
            progressStatus: ''      
        }
    }

    UploadVideo(){
        this.setState({
            progressStatus: 'Uploading'
        const config = {
            bucketName: "reelearnimages",
            region: "Key",
            accessKeyId: 'Key',
            secretAccessKey: "Key",
            /*
            onUploadProgress: function (progress) {
                console.log(33)
                console.log('Progress =',progress)
                var progressPercentage = Math.round(progress.loaded / progress.total * 100)
                this.setState({
                    progressBarLength : progressPercentage
                })
                if(progressPercentage == 100){
                    this.setState({
                        progressStatus: 'Uploaded Successfully'
                    })
                }
            }
            */
        }
                      
        const ReactS3Client = new S3(config);
    
        ReactS3Client.uploadFile(this.state.video , this.props.videoUploadName )
    /*        .onUploadProgress('httpUploadProgess',function(progress) {
              var progressPercentage = Math.round(progress.loaded / progress.total * 100)
              this.setState({
                  progressBarLength : progressPercentage
              })
              if(progressPercentage == 100){
                  this.setState({
                      progressStatus: 'Uploaded Successfully'
                  })
              }
            })
    */      
            .then(data => {
                console.log(data)
                if (data.status === 204) {
                console.log("success")
                } else {
                    console.log("fail")
                }
            })
    }

    render(){

            //
        
            return (
                <div className="page">
                <div className = "additionalSettings">
                    <div className="appointModerators">
                        <div className="titleSpace">
                            <h2>Appoint Moderator</h2>
                            <checkbox></checkbox>
                        </div>
                        <div className="enterUsernameSpace">
                            <input type="text" placeholder = "Enter Username" ></input>
                        </div>
                    </div>
                    <div className="createQuiz">
                        <div className="titleSpace">
                            <h2>Create Quiz</h2>
                            <checkbox></checkbox>
                        </div>
                        <div className="uploadDownload">
                            <div className="uploadFromDevice">

                            </div>
                            <div className="downloadSpace">
                                <p>Upload in Moodle Quiz format or use the below template</p>
                                <div className="downloadTemplateSpace">
                                <div className="downloadTemplate">Download Template</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="inviteColloborators">
                        <div className="titleSpace">
                            <h2>Invite Colloborators</h2>
                            <checkbox></checkbox>
                        </div>
                        <div className="enterUsernameSpace">
                            {   
                                this.state.colloborators.map((username) =>{
                                    <input type="text" placeholder="Enter Username" value={ username }></input>
                            }) }
                        </div>
                        <div class Name="addMoreSpace">
                            <div className="addMore">+ Add More</div>
                        </div>
                    </div>
                    <div className = "message">
                        <p>We will notify once your video samples are approved</p>
                    </div>
                    <div className="uploadProgress">
                        <h4>Upload Progress</h4>
                        {this.state.status}
                        <div className="progressBarSpace">
                            <div className="progressBar" style={{ width: this.state.progressBarLength + '%' }}></div>
                        </div>
                    </div>
                    <button type="button"onClick={ () => this.UploadVideo() }>Upload</button>
                </div>
                </div>
            )
        }
    
}

export default UploadWithProgress;

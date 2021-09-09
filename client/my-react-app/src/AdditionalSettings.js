import React from 'react';
import './additionalSettingsStyle.css';
import S3 from "react-aws-s3";
import {reactLocalStorage} from 'reactjs-localstorage';

class AdditionalSettings extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            moderatorUsername: '',
            quiz: '',
            colloborators: [''],
            progressBarLength: 40,
            progressStatus: 'Uploading'      
        }
        this.UploadVideo()
    }

    UploadVideo(){
        const config = {
            bucketName: "reelearnimages",
            region: "ap-south-1",
            accessKeyId: "AKIAVUI26QSLW4PA3PT6",
            secretAccessKey: "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",
            onProgress: console.log(1)
          }
          
          const ReactS3Client = new S3(config);
          ReactS3Client.uploadFile(this.props.video , reactLocalStorage.get('email')+'Video'+this.props.count)
        /*    .on('httpUploadProgess',function(progress) {
              var progressPercentage = Math.round(progress.loaded / progress.total * 100)
              this.setState({
                  progressBarLength : progressPercentage
              })
              if(progressPercentage == 100){
                  this.setState({
                      progressStatus: 'Uploaded Video...Uploading Thumbnail...'
                  })
              }
            })
        */    .then(data => {
                console.log(data)
                if (data.status === 204) {
                console.log("success")
                } else {
                    console.log("fail")
                }
            })
        
        this.setState({
            progressBarLength : 0
        })

        ReactS3Client.uploadFile(this.props.thumbnail , reactLocalStorage.get('email')+'Thumbnail'+this.props.count)
    /*        .on('httpUploadProgess',function(progress) {
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
    */        .then(data => {
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
                </div>
                </div>
            )
        }
    
}

export default AdditionalSettings;



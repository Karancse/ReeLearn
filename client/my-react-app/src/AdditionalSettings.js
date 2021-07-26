import React from 'react';
import './additionalSettingsStyle.css';

class AdditionalSettings extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            moderatorUsername: '',
            quiz: '',
            colloborators: [''],
            progressBarLength: 40         
        }
    }

    render(){
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








import React , { useState } from 'react';
import './postDetailsStyle.css';
import Select from 'react-select';

function CommunityGuidelines (props) {
    return (
        <div className="communityGuidelines">
            <div className="communityGuidelinesContent">
                <h3>Community Guidelines</h3>
                <p>Are you aware about ReeLearn's content guidelines?</p>
                <div className="ViewGuidelinesPosition">
                    <button className="viewGuidelines">View Guidelines</button>
                </div>
            </div>
        </div>
    )
}

class BranchDropdown extends React.Component{

    render() {
        return (
            <div className="dropdown-content">
                <p onClick = {this.setState({branchSelected: <div className='branchSelected'>branchToSelect</div>})}>CSE</p>
                <p>MEC</p>
            </div>
        )
    }

}

function TopicDetails (props){

        const branchOptions = [
            { value: 'branch', label: 'Branch' },
            { value: 'CSE', label: 'CSE' },
            { value: 'MEC', label: 'MEC' },
            { value: 'ECE', label: 'ECE' },
            { value: 'EEE', label: 'EEE' },
            { value: 'EIE', label: 'EIE' },
            { value: 'CHE', label: 'CHE' }
        ]
        const subjectOptions = [
            { value: 'ReactJS', label: 'ReactJS' },
            { value: 'NodeJS', label: 'NodeJS' },
            { value: 'JaveScript', label: 'JaveScript' },
            { value: 'MongoDB', label: 'MongoDB' }
        ]
        const semesterOptions = [
            { value: '1', label: '1' },
            { value: '2', label: '2' },
            { value: '3', label: '3' },
            { value: '4', label: '4' },
            { value: '5', label: '5' },
            { value: '6', label: '6' },
            { value: '7', label: '7' },
            { value: '8', label: '8' }
        ]
        const universityOptions = [
            { value: 'AVVCB', label: 'AVVCB' },
            { value: 'AVVBN', label: 'AVVBN' }
        ]


    
        return (
            <div className="topicDetails">
                <div className="topicSelector">
                    <div className="select">
                        <div className="selectTitle">Branch : </div>
                        <Select
                            value= { props.branch}
                            onChange={ props.updateBranch }
                            options={ branchOptions }
                        />
                    </div>
                    <div className="select">
                        <div className="selectTitle">Subject : </div>
                        <Select
                            value= {props.subject}
                            onChange={ props.updateSubject }
                            options={ subjectOptions }
                        />
                    </div>
                </div>  
                <div className="topicSelector">
                    <div className="select">   
                        <div className="selectTitle">Semester</div> 
                        <Select
                            value= {props.semester}
                            onChange={ props.updateSemester }
                            options={ semesterOptions }
                        />
                    </div>
                    <div className="select">
                        <div className="selectTitle">University</div>
                        <Select
                            value= {props.University}
                            onChange={ props.updateUniversity }
                            options={ universityOptions }
                        />
                    </div>
                </div>
            </div>
        )
}

function Uploads (props) {

    function CreateNowButton (props) {
        return (
            <div className="createNowButton">
                <div className="imageContainer">
    
                </div>
                <div className="createNow">
                    <li>Create</li>
                    <li>Now</li>
                </div>
            </div>
        )
    }
    
    function EmbedVideosButton (props) {
        return (
            <div className="embedVideosButton">
                <div className="imageContainer">
    
                </div>
                <div className="embedVideos">
                    <li>Embed</li>
                    <li>videos</li>
                </div>
            </div>
        )
    }
    
    function UploadFromDeviceButton (props) {
        return (
            <div className="createNowButton">
                <div className="input">
                    <input type="file" id="file" name="file" onChange={(event) => props.updateImage(event.target.files[0]) } className="imageContainer">

                    </input>
                    <img src={ props.preview } width="90%"></img>
                </div>
                <label htmlFor="file" className="uploadFromDevice">
                    <li>Upload</li>
                    <li>from</li>
                    <li>device</li>
                </label>
            </div>
        )
    }

    return (
        <div className="uploads">
            <h3>Uploads</h3>
            <div className="uploadsButtons">
                <CreateNowButton></CreateNowButton>
                <EmbedVideosButton></EmbedVideosButton>
                <UploadFromDeviceButton updateImage={ props.updateImage }></UploadFromDeviceButton>        
            </div>
        </div>
    )
}

function Description (props) {
    return (
        <div className="description">
            <h3>Description</h3>
            <div className="descriptionPosition">
                <textarea className="descriptionTextArea" value={ props.description } onChange = { event => props.updateDescription(event.target.value) } ></textarea>
            </div>
        </div>
    )
}

function PricingOptions (props) {
    return (
    <div className="pricingOptions">
        <button className="pricingOptionsButton">Pricing Options &rarr;</button>
    </div>
    )
}

class PostDetails extends React.Component {
    
    constructor (props) {
        super(props);
        this.state = {
            image: '',
            preview: '',
            branch: 'branch',
            semester: 'semester',
            subject: 'subject',
            university: 'university',
            description: ''
        };
    }

    updateBranch (branch) {
        this.setState({
            branch: branch
        })
    }

    updateSubject (subject) {
        this.setState({
            subject: subject
        })
    }

    
    updateSemester (semester) {
        this.setState({
            semester: semester
        })
    }

    
    updateUniversity (university) {
        this.setState({
            university: university
        })
    }

    updateImage (image) {
        this.setState({
            image: image
        })
    
        if(image) {
            const reader = new FileReader();
            reader.onloadend = () => {
            this.setState({
                preview : reader.result
            });
        };
        reader.readAsDataURL(image);
        } else {
            this.setState({
            preview : null
        })
        }
    }

    updateDescription (description) {
        this.setState({
            description: description
        })
    }

    render() {
        return(
            <div className="postDetails">
                <div className="postDetailsContent">
                    <CommunityGuidelines></CommunityGuidelines>
                    <TopicDetails
                        branch = {this.state.branch} 
                        updateBranch={branch => this.updateBranch(branch)} 
                        subject = {this.state.subject}
                        updateSubject={subject => this.updateSubject(subject)} 
                        semester = {this.state.semester}
                        updateSemester={semester => this.updateSemester(semester)} 
                        university = {this.state.university}
                        updateUniversity={university => this.updateUniversity(university)}    
                    ></TopicDetails>
                    <Uploads
                        image = {this.state.image}
                        preview = {this.state.preview} 
                        updateImage={this.updateImage}
                    ></Uploads>
                    <Description 
                        description = {this.state.description} 
                        updateDescription = { description => this.updateDescription(description) } 
                    ></Description>
                    <PricingOptions></PricingOptions>
                </div>
            </div>
        )
    }

}

export default PostDetails;



//<TopicDetails updateState = {value => this.UpdateState(value) }></TopicDetails>


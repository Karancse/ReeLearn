import React from 'react';
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

class TopicDetails extends React.Component{

    constructor (props) {
        super(props);
        this.state = {

        }
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
    }


    render() {
        return (
            <div className="topicDetails">
                <div className="topicSelector">
                    <div className="select">
                        <Select
                            value="branch"
                            onChange={ this.props.updateBranch }
                            options={ this.branchOptions }
                        />
                    </div>
                    <div className="select">
                        <Select
                            value="Subject"
                            onChange={ this.props.updateSubject }
                            options={ this.subjectOptions }
                        />
                    </div>
                </div>  
                <div className="topicSelector">
                    <div className="select">    
                        <Select
                            value="Semester"
                            onChange={ this.props.updateSemester }
                            options={ this.semesterOptions }
                        />
                    </div>
                    <div className="select">
                        <Select
                            value="University"
                            onChange={ this.props.updateUniversity }
                            options={ this.universityOptions }
                        />
                    </div>
                </div>
            </div>
        )
    }

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
                <div className="imageContainer">
    
                </div>
                <div className="uploadFromDevice">
                    <li>Upload</li>
                    <li>from</li>
                    <li>device</li>
                </div>
            </div>
        )
    }

    return (
        <div className="uploads">
            <h3>Uploads</h3>
            <div className="uploadsButtons">
                <CreateNowButton></CreateNowButton>
                <EmbedVideosButton></EmbedVideosButton>
                <UploadFromDeviceButton></UploadFromDeviceButton>        
            </div>
        </div>
    )
}

function Description (props) {
    return (
        <div className="description">
            <h3>Description</h3>
            <div className="descriptionPosition">
                <textArea className="descriptionTextArea"></textArea>
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
            branch: 'Branch',
            semester: 'Semester',
            subject: 'Subject',
            university: 'University'
        };
    }

    UpdateState (value) {
        this.setState({
            branch: value.branch,
            semester: value.semester,
            subject: value.semester,
            university: value.university
        })
    }

    render() {
        return(
            <div className="postDetails">
                <div className="postDetailsContent">
                    <CommunityGuidelines></CommunityGuidelines>
                    <TopicDetails></TopicDetails>
                    <Uploads></Uploads>
                    <Description></Description>
                    <PricingOptions></PricingOptions>
                </div>
            </div>
        )
    }

}

export default PostDetails;



//<TopicDetails updateState = {value => this.UpdateState(value) }></TopicDetails>


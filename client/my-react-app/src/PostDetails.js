import React from 'react';
import './postDetailsStyle.css';

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
/*
class TopicDetails extends React.Component {
    
    constructor (props) {
        super(props);
        
        var branchDropdown =    <div className="dropdown-content">
                                    <p>CSE</p>
                                    <p>MEC</p>
                                </div>
        var subjectDropdown =   <div className="dropdown-content">
                                    <p>JS</p>
                                    <p>ReactJS</p>
                                </div>
        var semesterDropdown =  <div className="dropdown-content">
                                    <p>1</p>
                                    <p>2</p>
                                </div>
        var universityDropdown =<div className="dropdown-content">
                                    <p>Amrita School Of Engineering</p>
                                    <p>ReeLearn Internship</p>
                                </div>
               
        this.state =    {
            branchSelected: <div className='branchNotSelected'>Branch</div>,
            branchDropdown: null,
            subjectSelected: <div className='subjectNotSelected'>Subject</div>,
            subjectDropdown: null,
            semesterSelected: <div className='semesterNotSelected'>Semester</div>,
            semesterDropdown: null,
            universitySelected: <div className='universityNotSelected'>University</div>,
            universityDropdown: null
        }
    }

    SelectBranch (props) {
        this.setState({
            branchSelected: <div className='branchSelected'>this.props.branchSelected</div>
        })
    }

    BranchSelector (props) {
        return (
            <div className="topicSelector">
                { this.state.branchSelected }
            </div>
        )
    }

    SelectSubject (props) {
        this.setState({
            subjectSelected: <div className='subjectSelected'>this.props.subjectSelected</div>
        })
    }

    SubjectSelector (props) {
        return (
            <div className="topicSelector">
                { this.state.subjectSelected }
            </div>
        )
    }

    SelectSemester (props) {
        this.setState({
            semesterSelected: <div className='semesterSelected'>this.props.semesterSelected</div>
        })
    }

    SemesterSelector (props) {
        return (
            <div className="topicSelector">
                { this.state.semesterSelected }
            </div>
        )
    }

    SelectUniversity (props) {
        this.setState({
            universitySelected: <div className='universitySelected'>this.props.universitySelected</div>
        })
    }

    UniversitySelector (props) {
        return (
            <div className="topicSelector">
                { this.state.universitySelected }
            </div>
        )
    }

    render() {
        return (
            <div className="topicDetails">
                <h3>Topic Details</h3>
                <div className="leftColumn">
                    <this.BranchSelector></this.BranchSelector>
                    <this.SubjectSelector></this.SubjectSelector>
                </div>
                <div className="rightColumn">
                    <this.SemesterSelector></this.SemesterSelector>
                    <this.UniversitySelector></this.UniversitySelector>
                </div>
                <button className="topicNameButton">Topic Name</button>
            </div>
        )
    }
}
*/
/*
class TopicDetails extends React.Component{

    constructor (props) {
        super(props);
        this.state = {
            branchSelected: 1
        }
    }

    
    render() {
        return (
            <div className="topicDetails">
                <button>{ this.state.branchSelected }</button>
            </div>
        )
    }

}
*/
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


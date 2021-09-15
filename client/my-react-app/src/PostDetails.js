import React , { useState } from 'react';
import './postDetailsStyle.css';

import Axios from 'axios';
import Select from 'react-select';
import S3 from "react-aws-s3";
import {reactLocalStorage} from 'reactjs-localstorage';

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

class InputVideoName extends React.Component {
    render() {
        return (
            <div className = "inputVideoName">
                <h3>Enter Video Name</h3>
                <input type="text" name="videoName" className="videoName" onChange={event => this.props.updateVideoName(event.target.value)} value={this.props.videoName}></input>
            </div>
        )
    }
}

function TopicDetails (props){

        const branchOptions = [
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

class Uploads extends React.Component {

    CreateNowButton (props) {
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
    
    EmbedVideosButton (props) {
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
    
    UploadFromDeviceButton (props) {
        return (
            <label htmlFor="file" className="uploadFromDeviceButton">
                <div className="input" className="imageContainer">
                    <img src={ props.videoPreview } width="90%"></img>
                </div>
                <input type="file" id="file" name="file" onChange={(event) => props.updateVideo(event.target.files[0]) } >

                </input>
                <div className="uploadFromDevice">
                    <li>Upload</li>
                    <li>from</li>
                    <li>device</li>
                </div>
            </label>
        )
    }

    render() {
    return (
            <div className="uploads">
                <h3>Uploads</h3>
                <div className="uploadsButtons">
                    <div className="createNowButton">
                        <div className="imageContainer">
    
                        </div>
                        <div className="createNow">
                            <li>Create</li>
                            <li>Now</li>
                        </div>
                    </div>
                    <div className="embedVideosButton">
                        <div className="imageContainer">
        
                        </div>
                        <div className="embedVideos">
                            <li>Embed</li>
                            <li>videos</li>
                        </div>
                    </div>
                    <label htmlFor="file" className="uploadFromDeviceButton">
                        <div className="input" className="imageContainer">
                            <img src={ this.props.videoPreview } width="90%"></img>
                        </div>
                        <input type="file" id="file" name="file" onChange={(event) => this.props.updateVideo(event.target.files[0]) } >

                        </input>
                        <div className="uploadFromDevice">
                            <li>Upload</li>
                            <li>from</li>
                            <li>device</li>
                        </div>
                    </label>
                </div>
            </div>
        )
    }
}

class UploadThumbnail extends React.Component {
    render() {
        if(this.props.video=='empty'){
            return(
                <></>   
            )
        }
        return (
            <div className="uploadThumbnailSpace">
                <div className="imagePosition">
                    <img src={ this.props.imagePreview } width="70px"></img>
                </div>
                <h5>Upload Thumbnail (optional)</h5>
                <label htmlFor="thumbnail" className="inputPosition">
                    <input type="file" id="thumbnail" name="thumbnail" onChange={(e) => this.props.updateImage(e.target.files[0])} />
                </label>
            </div>
        )
    }
}


class Tags extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tags: []
        }
    }

    render() {
        if(this.props.video=='empty'){
            return(
                <></>
            )
        }
        return (
            <div className="tags">
                <h3>Tags</h3>
                <div className="tagSpace">
                    {// this.props.tagsHTML                     
                        this.props.tags.map((tag, index) => (
                            <div className="tag">
                                <input type="text" className="tagContent" value = {tag} onChange={event => this.props.UpdateTag(event.target.value, index)}
                                ></input>
                                <button className="deleteTag">X</button>
                            </div>
                        ))
                    }
                   <button className="addTag" onClick = {this.props.addTag} >+</button>
                </div>
            </div>
        )
    }
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
        <button className="pricingOptionsButton" onClick={ props.onClick }>Pricing Options &rarr;</button>
    </div>
    )
}

class PostDetails extends React.Component {
    
    constructor (props) {
        super(props);
        this.state = {
            videoName: '',
            video: 'empty',
            videoPreview: '',
            image: '',
            imagePreview: '',
            branch: 'unknown',
            semester: 'unknown',
            subject: 'unknown',
            university: 'unknown',
            tags: [],
            tagsHTML: '',
            description: '',
            count: ''
        };
    }

    UpdateVideoName (videoName) {
        this.setState({
            videoName: videoName
        })
    }

    UpdateBranch (branch) {
        this.setState({
            branch: branch
        })
    }

    UpdateSubject (subject) {
        this.setState({
            subject: subject
        })
    }

    
    UpdateSemester (semester) {
        this.setState({
            semester: semester
        })
    }

    UpdateUniversity (university) {

        this.setState({
            university: university
        })
    }

    UpdateVideo (video) {

        console.log("change")

        this.setState({
            video: video
        })

        if(video) {
            console.log('video')
            const reader = new FileReader();
            reader.onloadend = () => {
                this.setState({
                    videoPreview : reader.result
                });
            };
            reader.readAsDataURL(video);
            } else {
                this.setState({
                videoPreview : null
            })
        }
        console.log(this.state.video)
        if(this.state.videoName === ''){
            this.setState({
                videoName: this.state.video.fileName
            })
        }
    }

    UpdateImage (image) {

        console.log("change")

        this.setState({
            image: image
        })

        if(image) {
            console.log('image')
            const reader = new FileReader();
            reader.onloadend = () => {
                this.setState({
                    imagePreview : reader.result
                });
            };
            reader.readAsDataURL(image);
            } else {
                this.setState({
                imagePreview : null
            })
        }
        console.log(this.state.image)
    }

    UpdateDescription (description) {
        this.setState({
            description: description
        })
    }


    async UploadVideo(props){
        //if(props.image==''){
        //    this.setState({
        //        status: 'Upload a Video File'
        //    })
        //    return
        //}
        await Axios.post('http://localhost:3002/uploadVideo', {
            email: reactLocalStorage.get('email'),
            videoName: this.state.videoName
        }, {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            }
        }).then((res) => {
            this.setState({
                status: res.data.status,
                username: res.data.username,
                videoUploadName: res.data.videoUploadName,
                profileID: res.data.profileID,
                count: res.data.count
            });
            if(this.state.status=="Profile Not Found"){
                this.props.pageUpdate('loginPage')
            }
        })
        if(this.state.status == 'Video Entry Created'){
            console.log('ProfileID :', this.state.profileID)
            console.log('Username :', this.state.username)
            await Axios.post('http://localhost:3003/uploadVideo', {
                email: reactLocalStorage.get('email'),
                username: this.state.username,
                videoName: this.state.videoName,  
                videoUploadName: this.state.videoUploadName,
                profileID: this.state.profileID,
                branch: this.state.branch,
                subject: this.state.subject,
                semester: this.state.semester,
                university: this.state.university,
                tag: this.state.tags,
                description: this.state.description
            }).then((res) => {
                this.setState({
                    status: res.data.status,
                    videoId: this.state.videoId
                })
            })
        }
        if(this.state.status == "Video Entry Created"){
            await Axios.post('http://localhost:3002/updateVideoID', {
                email: reactLocalStorage.get('email'),
                videoName: this.state.videoName,
                count: this.state.count,
                videoId: this.state.videoId
            })
        }
        if(this.state.status=="VideoID Updated"){       
            this.props.pageUpdate({
                video: this.state.video,
                thumbnail: this.state.image,
                count: this.state.count                    
            })
        }
    }
                /*

                const config = {
                  bucketName: "reelearnimages",
                  region: "ap-south-1",
                  accessKeyId: "AKIAVUI26QSLW4PA3PT6",
                  secretAccessKey: "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"
                }
                
                const ReactS3Client = new S3(config);
                ReactS3Client.uploadFile(this.state.image , this.state.emailID+res.data.count)
                .on('httpUploadProgess',function(progress) {
                    var progressPercentage = Math.round(progress.loaded / progress.total * 100)
                    this.setState({
                        progressBarLength : progressPercentage
                    })
                    if(progressPercentage == 100){
                        this.setState({
                            progressStatus: 'Uploaded'
                        })
                    }
                })
                .then(data => {
                  console.log(data)
                  if (data.status === 204) {
                    console.log("success")
                  } else {
                    console.log("fail")
                  }
                })
                */

    AddTag(props) {
        var tagsCopy = props.tags;
        tagsCopy.push('')
        this.setState({
            tags: tagsCopy
        })
        console.log(tagsCopy)
        //console.log(props.tagsHTML)
        /*
        var tagsHTMLCopy=<></>;
        for(var i=0; i<props.tags.length; i++){
            tagsHTMLCopy+=
                <div className="tag">
                    <input type="text" className="TagContent" >
                        {props.tags[i]}
                    </input>
                    <button className="deleteTag">X</button>
                </div>
            
        }
        this.setState({
            tagsHTML:tagsHTMLCopy
        })
        */
    }

    UpdateTag(tag, key){
        var tagsCopy = this.state.tags;
        tagsCopy[key] = tag;
        this.setState({
            tags: tagsCopy
        })
        console.log(tagsCopy)
    }

    render() {
        return(
            <div className="postDetails">
                <div className="postDetailsContent">
                    <CommunityGuidelines></CommunityGuidelines>
                    <InputVideoName
                        videoName = {this.state.videoName}
                        updateVideoName = {videoName => this.UpdateVideoName(videoName)}
                    ></InputVideoName>
                    <TopicDetails
                        branch = {this.state.branch} 
                        updateBranch={branch => this.UpdateBranch(branch)} 
                        subject = {this.state.subject}
                        updateSubject={subject => this.UpdateSubject(subject)} 
                        semester = {this.state.semester}
                        updateSemester={semester => this.UpdateSemester(semester)} 
                        university = {this.state.university}
                        updateUniversity={university => this.UpdateUniversity(university)}    
                    ></TopicDetails>
                    <Uploads
                        video = {this.state.video}
                        videoPreview = {this.state.videoPreview} 
                        updateVideo={video => this.UpdateVideo(video)}
                    ></Uploads>
                    <UploadThumbnail
                        video = {this.state.video}
                        image = {this.state.image}
                        imagePreview = {this.state.imagePreview}
                        updateImage={image => this.UpdateImage(image)}
                    ></UploadThumbnail>
                    <Tags
                        video = {this.state.video}
                        tags = {this.state.tags}
                        tagsHTML = {this.state.tagsHTML}
                        addTag = { () => this.AddTag({
                            tags: this.state.tags,
                            tagsHTML: this.state.tagsHTML
                            }) 
                        }
                        UpdateTag = {(tag,key) => this.UpdateTag(tag,key)}
                    ></Tags> 
                    <Description 
                        description = {this.state.description} 
                        updateDescription = { description => this.UpdateDescription(description) } 
                    ></Description>
                    <PricingOptions 
                        onClick={ () => this.UploadVideo({
                            image: this.state.image
                        }) }
                    ></PricingOptions>
                </div>
            </div>
        )
    }

}

export default PostDetails;



//<TopicDetails updateState = {value => this.UpdateState(value) }></TopicDetails>


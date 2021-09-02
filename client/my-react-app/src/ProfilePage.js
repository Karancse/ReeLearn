import React from 'react';
import './profilePageStyle.css';
import { reactLocalStorage } from 'reactjs-localstorage';

class ProfilePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: 'https://reelearnimages.s3.ap-south-1.amazonaws.com/'+reactLocalStorage.get('email')
        }
    }



    render() {
        return (
            <div className="profilePage">
                <div className="topCover">
                        <div className="positionVertical">
                            <div className="positionHorizontal">
                                <div className="title">
                                    <div className="imagePosition">
                                        <div className="image">
                                            <img src={ this.state.image } width= "100px" ></img>
                                        </div>
                                    </div>
                                    <div className="username">
                                        <h3>{ reactLocalStorage.get('username') }</h3>
                                    </div>        
                                </div>
                            </div>
                        </div>
                </div>
                <div class="detailsSpace">
                </div>
                <div className="videoUploads">
                    
                </div>
            </div>
        )
    }



}


export default ProfilePage;
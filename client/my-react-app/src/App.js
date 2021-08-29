import React, { useState } from 'react';
import './App.css';
import { AppContext } from "./libs/contextLib";
import LoginPage from './LoginPage';
import WelcomePanel from './WelcomePage';
import SignUpPage from './SignUpPage';
import HomePage from './HomePage';
import PostDetails from './PostDetails';
import UploadNow from './UploadNow';
import EmbedVideos from './EmbedVideos';
import AdditionalSettings from './AdditionalSettings';
import ProfilePage from './ProfilePage';
import {reactLocalStorage} from 'reactjs-localstorage';


class AppClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            page: <WelcomePanel onClick = { page => this.Update(page) }/>
        }
        reactLocalStorage.set('username' , 'guest');
    }

    Update(page) {
        if(page === 'logIn')
        {
            this.setState({
                page: <LoginPage pageUpdate = { page => this.Update(page) }/>
            })
        }
        else if(page === 'signUp'){
            this.setState({
                page: <SignUpPage />
            })
        }
        else if(page === 'welcomePage'){
            this.setState({
                page: <WelcomePanel onClick = { page => this.Update(page) }/>
            })
        }
        else if(page === 'homePage'){
            this.setState({
                page: <HomePage pageRedirect = { page => this.Update(page) }/>
            })
        }
        else if(page === 'postDetails'){
            this.setState({
                page: <PostDetails onClick = { page => this.Update(page) }/>
            })
        }
        else if(page === 'uploadNow'){
            this.setState({
                page: <UploadNow onClick = { page => this.Update(page) }/>
            })
        }
        else if(page === 'embedVideos'){
            this.setState({
                page: <EmbedVideos onClick = { page => this.Update(page) }/>
            })
        }
        else if(page === 'additionalSettings'){
            this.setState({
                page: <AdditionalSettings onClick = { page => this.Update(page) }/>
            })
        }
        else if(page === 'profilePage') {
            this.setState({
                page: <ProfilePage onClick = { page => this.update(page) } />
            })
        }
    }
    
    render() {
        return(
            this.state.page
        )
    }
}

function AppFunction(props){
    const [isAuthenticated, userHasAuthenticated] = useState(false);
    return (
        <AppClass>
        </AppClass>
    )
}

export default AppFunction;

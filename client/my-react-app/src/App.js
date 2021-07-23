import React from 'react';
import './App.css';
import LoginPage from './LoginPage';
import WelcomePanel from './WelcomePage';
import SignUpPage from './SignUpPage';
import HomePage from './HomePage';
import PostDetails from './PostDetails';
import UploadNow from './UploadNow';


class AppClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            page: <WelcomePanel onClick = { page => this.Update(page) }/>
        }
    
    }

    Update(page) {
        if(page === 'logIn')
        {
            this.setState({
                page: <LoginPage />
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
                page: <HomePage onClick = { page => this.Update(page) }/>
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
    }
    
    render() {
        return(
            this.state.page
        )
    }
}

function AppFunction(props){
    return (
        <AppClass/>
    )
}

export default AppFunction;

import React from 'react';
import './App.css';
import LoginPage from './LoginPage';
import WelcomePanel from './WelcomePage';
import SignUpPage from './SignUpPage';
import HomeScreen from './HomePage';

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
                page: <HomeScreen onClick = { page => this.Update(page) }/>
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
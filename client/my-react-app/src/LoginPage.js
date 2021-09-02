import React from 'react';
import './logInPageStyle.css';
import Axios from 'axios';
import { reactLocalStorage } from 'reactjs-localstorage';


function EnterUsername (props) {
  return (
    <div className="enterUsername">
      <span>Enter Username:</span>
      <input className='usernameInput' onChange = { event => props.onChange(event.target.value) } type='text' placeholder='Your Username'></input>
    </div>
  )
}

function EnterEmail (props) {
  return (
    <div className="enterEmail">
      <span>Enter Email:</span>
      <input className='emailInput' onChange = { event => props.onChange(event.target.value) } type='text' placeholder='Your Email'></input>
    </div>
  )
}

function EnterPassword (props) {
  return (
    <div className="enterPassword">
      <span>Enter Password:</span>
      <input className='passwordInput' onChange = { event => props.onChange(event.target.value) } type='text' placeholder='Your Password'></input>
    </div>
  )
}


function SubmitButton (props) {
  return (
    <div className='submitDetails'>
      <button className='submitButton' onClick = { () => props.onClick() } type='submit'>Submit</button>
    </div> 
  )
}

class LoginPanel extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      username : '',
      email: '',
      password : '',
      status: ''
    };
  }

  UpdateUsername(username) {
    this.setState({
      username : username
    });
  }

  UpdateEmail(email){
    this.setState({
      email: email
    })
  }

  UpdatePassword(password) {
    this.setState({
      password : password
    });
  }

  async Submit(pageUpdate) {

    if(this.state.email==null || this.state.email==='')
    {
      this.setState({
        status:'Enter email'
      });
      return;
    }

    if(this.state.password==null || this.state.password==='')
    {
      this.setState({
        status: 'Enter password'
      });
      return;
    }
    
    await Axios.post("http://localhost:3001/logIn", {
      email: this.state.email,
      password: this.state.password
      }, { 
      headers: {
      'Content-Type': 'application/json;charset=UTF-8'
      } 
    }).then(res => {
      console.log(res);
      this.setState({
        status: res.data.status
      });
      console.log(res.data.username)
      console.log(res)
      reactLocalStorage.set( 'username' , res.data.username );
      reactLocalStorage.set( 'email' , res.data.email );
      this.setState({
        status: res.data.status+" "+reactLocalStorage.get('username')+" "+reactLocalStorage.get('email')
      })
      
      if(res.data.status=='Valid'){
        pageUpdate('homePage')
      }
    });
  }

  render() {
    return (
      <div className="logInPanel">
        <h3>LogIn Page</h3>
        <div className="enterEmail">
          <span>Enter Email:</span>
          <input className='emailInput' onChange = { event => this.UpdateEmail(event.target.value) } type='text' placeholder='Your Email'></input>
        </div>
        <div className="enterPassword">
          <span>Enter Password:</span>
          <input className='passwordInput' onChange = { event => this.UpdatePassword(event.target.value) } type='text' placeholder='Your Password'></input>
        </div>
        <div className='submitDetails'>
          <button className='submitButton' onClick = { () => this.Submit(this.props.pageUpdate) } type='submit'>Submit</button>
        </div> 
        <div className="signUp">
          <span>Don't have an account?</span>
          <button className="signUpButton" onClick = { () => this.props.pageUpdate("signUp") } >Sign Up</button>
        </div>
        <p>{ this.state.status }</p>
      </div>
    );
  }
}


function LoginPage(props) {
  return (
    <div className="logInPage">
      <LoginPanel pageUpdate = { page => props.pageUpdate(page) } />
    </div>
  );
}

export default LoginPage;

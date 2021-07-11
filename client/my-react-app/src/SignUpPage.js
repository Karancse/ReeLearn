import React from 'react';
import './App.css';
import Axios from 'axios';


function EnterUsername (props) {
    return (
      <div className="enterUsername">
        <span>Enter Username:</span>
        <input className='usernameInput' onChange = { event => props.onChange(event.target.value) } type='text' placeholder='Your Username'></input>
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
  
  function EnterEmailID (props) {
    return (
      <div className="enterEmailID">
        <span>Enter EmailID:</span>
        <input className="emailIDInput" onChange = { event => props.onChange(event.target.value) } type='text' placeholder='Your Email ID'></input>
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

  class SignUpPanel extends React.Component{

    constructor(props) {
      super(props);
      this.state = {
        username : '',
        password : '',
        emailID : '',
        status: ''
      };
    }
  
    UpdateUsername(username) {
      this.setState({
        username : username
      });
    }
  
    UpdatePassword(password) {
      this.setState({
        password : password
      });
    }

    UpdateEmailID(emailID) {
      this.setState({
        emailID : emailID
      });
    }
    
    Submit() {

      if(this.state.username==null || this.state.username==='')
      {
        this.setState({
          status: 'Enter username'
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

      Axios.post('https://localhost:3001/signUp', {
        username: this.state.username, 
        password: this.state.password
      }).then((res) => {
        this.setState({
          status: res
        });
      });

    }
    

    dfgdfgSubmit() {
      Axios.get('https://emailvalidation.abstractapi.com/v1/?api_key=af3acf9aaab3429689f89318a31f939b&email=tgkaran219@gmail.com')
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }


    render() {
      return (
        <div className="signUpPanel">
          <h3>SignUp Page</h3>
          <EnterUsername username={ this.state.username } onChange={username => this.UpdateUsername(username) }/>
          <EnterPassword password={ this.state.password } onChange={password => this.UpdatePassword(password) }/>
          <EnterEmailID emailID={ this.state.emailID } onChange={emailID => this.UpdateEmailID(emailID) }/>
          <SubmitButton onClick={() => this.Submit }/>
          <p>{ this.state.status }</p>
        </div>
      );
    }
  }

  function SignUpPage() {
    return (
      <SignUpPanel />
    );
  }
  
  export default SignUpPage;
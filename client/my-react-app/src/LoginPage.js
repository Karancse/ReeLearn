import React from 'react';
import './logInPageStyle.css';
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
      password : '',
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

  Submit() {

    if(this.state.username==null || this.state.username==='')
    {
      this.setState({
        status:'Enter username'
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
    
    const data = { 
      username: this.state.username,
      password: this.state.password
    };

    const options = {
      method: 'POST',
      url: 'http://localhost:3001/logIn',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
      //body1: data
    };

    //fetch('/logIn',options);
    Axios(options).then(res => {
      this.setState({
        status: res.data.status
      })
    });
    /*
    Axios.post("http://localhost:3001/logIn", {
      username: this.state.username,
      password: this.state.password
    }).then(res => {
        console.log(res);
        this.setState({
          status: res.data.status
        });
    
  });
  */
/*
  Axios({
    method: 'post',
    url: 'https://localhost:3001/logIn',
    data: {
      firstName: this.state.username,
      lastName: this.state.password
    }
  });
*/

}

  render() {
    return (
      <div className="logInPanel">
        <h3>LogIn Page</h3>
        <EnterUsername username={ this.state.username } onChange={username => this.UpdateUsername(username) }/>
        <EnterPassword password={ this.state.password } onChange={password => this.UpdatePassword(password) }/>
        <SubmitButton onClick={() => this.Submit() }/>
        <p>{ this.state.status }</p>
      </div>
    );
  }
}


function LoginPage() {
  return (
    <div className="logInPage">
      <LoginPanel />
    </div>
  );
}

export default LoginPage;

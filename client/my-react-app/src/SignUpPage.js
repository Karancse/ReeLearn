import React from 'react';
import './signUpPageStyle.css';
import Axios from 'axios';
import Select from 'react-select';

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

  function ChooseRole (props) {

    const options = [
      { value: 'student', label: 'Student' },
      { value: 'teacher', label: 'Teacher' },
    ];
    
    return (
      <div className="chooseRole">
        <span>Choose Role:</span>
        <Select
          value={props.role}
          onChange={props.onChange}
          options={options}
        />
      </div>
    )
  }

  function EnterDegree (props) {
    return (
      <div className="enterDegree">
        <span>Enter Degree:</span>
        <input className="degreeInput" onChange = { event => props.onChange(event.target.value) } type='text' placeholder='Your Degree'></input>
      </div>
    )
  }

  function EnterCourse (props) {
    return (
      <div className="enterCourse">
        <span>Enter Course:</span>
        <input className="courseInput" onChange = { event => props.onChange(event.target.value) } type='text' placeholder='Your Course'></input>
      </div>
    )
  }

  function EnterSemester (props) {
    return (
      <div className="enterSemester">
        <span>Enter Semester:</span>
        <input className="semesterInput" onChange = { event => props.onChange(event.target.value) } type='text' placeholder='Your Semester'></input>
      </div>
    )
  }

  function EnterUniversity (props) {
    return (
      <div className="enterUniversity">
        <span>Enter University:</span>
        <input className="universityInput" onChange = { event => props.onChange(event.target.value) } type='text' placeholder='Your University'></input>
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
        role: null,
        degree: '',
        course: '',
        semester: '',
        university: '',
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

    UpdateRole(role) {
      this.setState({
        role : role
      });
    }
    
    UpdateDegree(degree) {
      this.setState({
        degree : degree
      });
    }
    
    UpdateCourse(course) {
      this.setState({
        course : course
      });
    }
    
    UpdateSemester(semester) {
      this.setState({
        semester : semester
      });
    }

    UpdateUniversity(university) {
      this.setState({
        university : university
      });
    }
    
    

    Submit() {

      if(this.state.username==null || this.state.username==='')
      {
        this.setState({
          status: 'Enter Username'
        });
        return;
      }

      if(this.state.password==null || this.state.password==='')
      {
        this.setState({
          status: 'Enter Password'
        });
        return;
      }

      if(this.state.emailID==null || this.state.emailID==='')
      {
        this.setState({
          status: 'Enter EmailID'
        });
        return;
      }
      
      console.log('Post Request.....')

      Axios.post('http://localhost:3001/signUp', {
        username: this.state.username, 
        password: this.state.password,
        email: this.state.emailID
      }, {
        headers: {
        'Content-Type': 'application/json;charset=UTF-8'
        }
      }).then((res) => {
        this.setState({
          status: res.data.status
        });
      });
    
    Axios.post('http://localhost:3002/createProfile', {
        email: this.state.emailID,
        role: this.state.role.value, 
        degree: this.state.degree,
        course: this.state.course,
        semester: this.state.semester,
        university: this.state.university
      }, {
        headers: {
        'Content-Type': 'application/json;charset=UTF-8'
        }
      }).then((res) => {
        this.setState({
          status: res.data.status
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
          <ChooseRole role={ this.state.role } onChange={role => this.UpdateRole(role) }/>
          <EnterDegree degree={ this.state.degree } onChange={degree => this.UpdateDegree(degree)}/>
          <EnterCourse course={ this.state.course } onChange={course => this.UpdateCourse(course)}/>
          <EnterSemester semester={this.state.semester} onChange={semester => this.UpdateSemester(semester)}/>
          <EnterUniversity university={this.state.university} onChange={university => this.UpdateUniversity(university)}/>
          <SubmitButton onClick={() => this.Submit() }/>
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

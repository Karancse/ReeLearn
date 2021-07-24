import React from 'react';
import './App.css';



class WelcomePanel extends React.Component {
    
    render() {
        return (
            <div className='welcomePanel'>
                <button className='logInNav' onClick={() => this.props.onClick('logIn')}>LogIn</button>
                <button className='signUpNav' onClick={() => this.props.onClick('signUp')}>SignUp</button>
                <button className='homePageNav' onClick={() => this.props.onClick('homePage')}>Home</button>
                <button className='postDetailsNav' onClick={() => this.props.onClick('postDetails')}>Post</button>
                <button className='uploadNowNav' onClick={() => this.props.onClick('uploadNow')}>Upload Now</button>
                <button className="embedVideoNav" onClick={() => this.props.onClick('embedVideos')}>Embed Videos</button>
            </div>
        )
    }

}


/*
function WelcomePage(props) {
    return (
      <WelcomePanel onClick={ page => this.props.onClick(page) }/>
    );
  }
*/
export default WelcomePanel;

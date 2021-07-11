import React from 'react';
import './App.css';



class WelcomePanel extends React.Component {
    
    render() {
        return (
            <div className='welcomePanel'>
                <button className='logIn' onClick={() => this.props.onClick('logIn')}>LogIn</button>
                <button className='signUp' onClick={() => this.props.onClick('signUp')}>SignUp</button>
                <button className='homePage' onClick={() => this.props.onClick('homePage')}>Home</button>
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
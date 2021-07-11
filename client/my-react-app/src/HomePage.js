import React from 'react';
import './App.css';


class TopVideos extends React.Component {

    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <div className="topVideos">
                <h4>TopVideos for {this.props.searchKey}</h4>
            </div>
        )
    }

}

class TopQuizzes extends React.Component {

    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <div className="topQuizzes">
                <h4>TopQuizzes for {this.props.searchKey}</h4>
            </div>
        )
    }

}

function NavButtons(props){
    return(
        <div className = "bottomButtons">
            <button className="topCreators">Top Creators for {props.searchKey}</button>
            <button className="topSchools">Skools that offer {props.searchKey}</button>
            <button className="discussionForum">Discussion Forum</button>
        </div>
    )
}

class HomeScreen extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            searchKey: '',

        }
    }

    updateSearchKey(searchKey){
        this.setState({
            searchKey: searchKey
        })
    }

    render() {
        return (
            <div className="HomeScreen">
                <input type="text" onChange = { event => this.updateSearchKey(event.target.value)} ></input>
                <TopVideos searchKey = { this.state.searchKey } />
                <TopQuizzes searchKey = { this.state.searchKey } />
                <NavButtons searchKey = { this.state.searchKey } />
            </div>
        )
    }

}

export default HomeScreen;






import React from 'react';
import './homePageStyle.css';


/*
<iframe width="560" height="315" src="https://www.youtube.com/embed/DAQUIO_Y2CA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
*/

function SearchBar (props) {
    return (
        <div className = "searchBar">
            <input type="text" onChange = { event => props.onChange(event.target.value) } ></input>
            <button onClick = { () => props.onSubmit() } >Search</button>
        </div>
    )
}

function PostButton (props) {
    return (
        <div className='postButton'>
            <button type="button" >Post Content for { props.searchKey }</button>
        </div>
    )
}

class TopVideos extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/DAQUIO_Y2CA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        }
    }

    render() {
        return(
            <div className="topVideos">
                <div className="topVideosTitle">
                    <h4>TopVideos for {this.props.searchKey}</h4>
                    <button>See All</button>
                </div>
                <div className = "topVideosContent">
                    { this.props.topVideoResult }
                </div>
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
                <div className="topQuizzesTitle">
                    <h4>TopQuizzes for {this.props.searchKey}</h4>
                    <button>See All</button>
                </div>
                <div className = "topQuizzesContent">

                </div>
            </div>
        )
    }

}

class TopUniversities extends React.Component {

    constructor (props) {
        super(props);
        this.state = {

        }
    }

    render () {
        return (
            <div className="topUniversities">
                <div className="topQuizzesTitle">
                    <h4>TopUniversities for {this.props.searchKey}</h4>
                    <button>See All</button>
                </div>
                <div className = "topUniversitiesContent">

                </div>
            </div>
        )
    }

}

function NavButtons(props){
    return(
        <div className = "navButtons">
            <button className="topCreators">Top Creators for {props.searchKey}</button>
            <button className="topSchools">Skools that offer {props.searchKey}</button>
            <button className="discussionForum">Discussion Forum</button>
        </div>
    )
}

function BottomButtons(props){
    return (
        <div className = "bottomButtons">
            
        </div>
    )
}

class HomeScreen extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            searchKey: '',
            searchedKey: '',
            topVideosResult: ''
        }
    }

    updateSearchKey(searchKey){
        this.setState({
            searchKey: searchKey
        })
    }

    updateSearchResult(){
        this.setState({
            searchedKey: this.state.searchKey,
            topVideoResult: <iframe width="560" height="315" src="https://www.youtube.com/embed/DAQUIO_Y2CA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        })

    }

    render() {
        return (
            <div className="homeScreen">
                <SearchBar onChange = { searchKey => this.updateSearchKey(searchKey) } onSubmit = { () => this.updateSearchResult() } />
                <PostButton searchKey = { this.state.searchedKey } />
                <TopVideos searchKey = { this.state.searchedKey } topVideoResult = { this.state.topVideoResult } />
                <TopQuizzes searchKey = { this.state.searchedKey } />
                <TopUniversities searchKey = { this.state.searchedKey } />
                <NavButtons searchKey = { this.state.searchedKey } />
                <BottomButtons />
            </div>
        )
    }

}

function HomePage(){
    return (
        <div className="homePage">
            <HomeScreen/>
        </div>
    )
}

export default HomePage;

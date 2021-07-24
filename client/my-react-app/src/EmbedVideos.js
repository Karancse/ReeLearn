import React from 'react';
import './embedVideosStyle.css';

class EmbedVideos extends React.Component{

    constructor (props) {
        super(props);
        this.state = {
            link: '',
            videoPreview: null
        }
    }

    

    render () {
        return (
            <div className="embedVideos">
                <div className = "enterLink">
                    <h3>Enter Link</h3>
                    <input type="text" onChange = { event => this.setState({ link: event.target.value }) } style={ { width: 400+'px' , height: 20+'px' } } ></input>
                    <button className="embedVideo" onClick = {() => this.setState({
                        videoPreview: <iframe width="560" height="315" src={ this.state.link } title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    }) }>Embed The Video</button>
                    <button className="confirm">Confirm</button>
                </div>
                <div className = "Preview">
                    <div className = "video">
                        { this.state.videoPreview }
                    </div>
                </div>
            </div>
        )
    }

}

export default EmbedVideos ;
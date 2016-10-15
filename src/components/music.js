require('normalize.css/normalize.css');
require('styles/App.scss');


import React from 'react';

class music extends React.Component {
  constructor(props){
  	super(props);
  	this.state = {
  		isPlay : false
  	}
  }
  play = () => {
  	this.setState({
       isPlay : true
  	})
  }
  pause = () => {
  	this.setState({
       isPlay : false
  	})
  }
  
  componentDidMount(){
     let musicBox = this.refs.musicBox;
     musicBox.addEventListener('play',this.play)
     musicBox.addEventListener('pause',this.pause)
  }
  
  render() {
  	let musicPlay = this.state.isPlay ? 'play' : '';
    return (
      <div>
         <div className="record">
          <img className={musicPlay} src='./images/唱片.svg' />
          </div>
          <div className='music'>
          <audio ref='musicBox'src='./music/yinyue.mp3' controls="controls" loop='loop'>
           Your browser does not support the audio element.
          </audio>
          </div>
      </div>
    );
  }
}

export default music;

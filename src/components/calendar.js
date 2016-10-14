require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import {Calendar} from 'antd';
import 'antd/dist/antd.css';


class calendar extends React.Component {
  constructor(props){
  	super(props);
  	this.state = {
  		wasteTime : 0
  	}
  }
  changeTime =() => {
  	this.setState({ wasteTime : this.state.wasteTime + 1});
  }
  componentDidMount(){
  	 this.interval = setInterval(this.changeTime,1000);
  }
  componentWillMount(){
  	clearInterval(this.interval);
  }

  render() {
    return (
      <div className="calendar">
           <Calendar fullscreen={false}/>
           <div className="time">
                <div>Time you enjoy wasting was not wasted.</div>
                <div>You have wasted: {this.state.wasteTime}s</div>
           </div>
      </div>
    );
  }
}

export default calendar;
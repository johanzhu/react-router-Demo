require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

let todoImg = require('../images/叉叉.png');

class todo extends React.Component {
  constructor(props) {
     super(props);
     this.handleKeyDown = this.handleKeyDown.bind(this);
     this.handleChange = this.handleChange.bind(this);
     this.callbackParent = this.callbackParent.bind(this);
     this.state = {
     	  listArr :[],
     	  value : ''
     }
   }
  handleKeyDown(e){
  	let inputText = e.target.value;
  	if(e.keyCode === 13 && inputText != ''){
  		  this.state.listArr.push(inputText);
  	    this.setState({
           listArr : this.state.listArr,
           value :''
  	    })
  	    
  	}
  }
  handleChange(e) {
    this.setState({
    	value: e.target.value
    });
  }
  callbackParent(newState){
  	this.setState({
  		listArr : newState
  	})
  }
  
  render() {
    
    return (
      <div>
          <div className="todoTitle">
                todos
          </div>
          <div className="todoInput">
                <input onKeyDown={this.handleKeyDown} onChange={this.handleChange} type="text" className="inputBox" value={this.state.value} placeholder="What needs to be done?"/>
          </div>
          <div className="todoList">
                  <List item={this.state.listArr} callback={this.callbackParent} />
          </div>
          <div className="quote">
             Never put off till tomorrow what you can do today
          </div>
      </div>
    );
  }
}

class List extends React.Component {
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.state = {
			subItem : this.props.item
		}
	}
	handleClick(e){
	    let deletItem = e.currentTarget.parentNode.firstChild.innerHTML;
	    let newState = this.props.item.filter((item) => {return item != deletItem });
	    this.setState({
	    	subItem : newState
	    })
	    this.props.callback(newState);
	}
	render (){
    return (
         <ul id='todoBox'>
           {
           	this.props.item.map((item,index) => {
           		return <li key={index}><span>{item}</span><span onClick={this.handleClick} className="delet"><img src={todoImg} /></span></li>
           	})
           	}
         </ul>
    )
	}
}




export default todo;
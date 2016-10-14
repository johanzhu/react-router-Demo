require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import {Link} from 'react-router';

let mainImg = require('../images/11.jpg');

class AppComponent extends React.Component {
  render() {
    
    
    return (
      <div className="container clearfix">
         <div className="sideBar fl">
             <ul>
               <li><img src={mainImg} /></li>
               <li><Link to="/Wel">Welcome</Link></li>
               <li><Link to="/Todo">TodoList</Link></li>
               <li><Link to="/Cal">Calender</Link></li>
               <li><Link to="/Music">Music</Link></li>
             </ul>
             <div className="followMe"><a href="https://github.com/johanzhu" target='_blank'>Follow me on Github!(ง •̀_•́)ง</a></div>
         </div>
         <div className="rightArea fr">
            {this.props.children}
         </div>
      </div>
    )
  }
}






export default AppComponent;


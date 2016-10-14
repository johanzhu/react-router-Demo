import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import App from './components/Main';
import Wel from './components/welcome';
import Todo from './components/todo';
import Cal from './components/calendar';
import Music from './components/music';

// Render the main component into the dom
ReactDOM.render((
	 <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Wel} />
            <Route path="Wel" component={Wel} />
            <Route path="Todo" component={Todo} />
            <Route path="Cal" component={Cal}/>
            <Route path="Music" component={Music}/>
        </Route>
    </Router>

    ),document.getElementById('app'));





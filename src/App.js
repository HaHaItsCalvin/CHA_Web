import React, { Component } from 'react';
import NavBar from './NavBar';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


import {HomePage} from './HomePage';
import {About} from './About';
import {Code} from './Code';
import {Photos} from './Photos';

class App extends Component {
  render() {
    return (
   	<Router>
      <div >	        	
      		<Route exact path="/" component={HomePage} />
      		<Route path="/About" component={About} />
      		<Route path="/Code" component={Code} />
      		<Route path="/Photos" component={Photos} />
      </div>
    </Router>
    )
  }
}

export default App

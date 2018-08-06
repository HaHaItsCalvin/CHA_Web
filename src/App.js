import React, { Component } from 'react';
import './App.css';

import NewNavBar from './NewNavBar';
import {LandingBackground} from './LandingBackground';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


class App extends Component {
  render() {
    return (
      <div>
        <NewNavBar/>
        <LandingBackground />
      </div>
    )
  }
}

export default App

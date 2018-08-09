import React, { Component } from 'react';
import './App.css';

import NavBar from './NavBar';
import {LandingBackground} from './LandingBackground';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const styles={
	container: {
		textAlign: 'center',
		paddingTop: 200,
		
	},
	background:{
		height:'100%',
		width:'100%',
		background:'white',

	}
}

const theme = createMuiTheme({
  overrides: {
    MuiButton: { // Name of the component ⚛️ / style sheet
      root: { // Name of the rule
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        fontWeight: 500,
     	fontSize: 18,
      	fontFamily: 'sans-serif',
      },
    },
  },
});

class App extends Component {
  render() {
    return (
      <div style={styles.background}>
        		<NavBar/>
	        	<LandingBackground />
        <MuiThemeProvider theme={theme}>
      		<Button>Overrides CSS</Button>
    	</MuiThemeProvider>
      </div>
    )
  }
}

export default App

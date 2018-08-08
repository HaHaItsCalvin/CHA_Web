import React from 'react';
import Grid from '@material-ui/core/Grid';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const styles= {
	container: {
		textAlign: 'center',
		paddingTop:200,

	},
	background:{
		height:'100%',
		width:'100%',
		background:'white',
	}
}

const theme = createMuiTheme({

});

export class LandingBackground extends React.Component {
	render() {
		return(
			<MuiThemeProvider theme={theme}>
			<div style={styles.container}>
				<h1> Thing </h1>
				<h1> Thing </h1>

			</div>
			</MuiThemeProvider>
		)
	}
}
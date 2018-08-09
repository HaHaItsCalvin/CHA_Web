import React from 'react';
import Grid from '@material-ui/core/Grid';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Image from 'material-ui-image'

const styles= {
	container: {
		textAlign: 'center',
		paddingTop:100,

	},
	background:{
		height:'100%',
		width:'100%',
		background:'white',
	},
	picture:{
		height:150,
		width:1000,
	},
}

const theme = createMuiTheme({

});

export class LandingBackground extends React.Component {
	render() {
		return(
			<MuiThemeProvider theme={theme}>
			<div style={styles.container}>
			<Image 
        		src="https://files.shandymedia.com/wp-content/uploads/2017/05/14004238/7e728f82274f50bef1f47bead2821048.jpg"
				style={styles.picture}
      		/>

			</div>
			</MuiThemeProvider>
		)
	}
}
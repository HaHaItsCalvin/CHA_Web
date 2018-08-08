import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
  palette: {
    primary: { main:'#FAFAFA' }, // Purple and green play nicely together.
    secondary: { main: '#EEEEEE' }, // This is just green.A700 as hex.
  },
  
  	overrides:{
     MuiAppbar:{
     	root:{
     		position: 'static',
     		color:'primary',
     	},
     },

     MuiButton: {
     	root:{
       	//background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'black',
        height: 48,
        padding: '0 30px',
        //boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        fontWeight: 500,
     	fontSize: 18,
      	fontFamily: 'sans-serif',
    		},
    	},
	},
});

export default class NewNavBar extends React.Component{
	render(){
		return(
			<div>
			<MuiThemeProvider theme={theme}>
			<AppBar style={{ background: 'transparent', boxShadow: 'none'}}>
        		<Toolbar>
        				<Grid container direction="row" justify="space-between">
        					<Grid item med={3}>
            					<Button> Calvin Ha </Button>
            				</Grid>
            				<Grid item med={3}>
	            				<Button> Home</Button>
    	        				<Button> About </Button>
        	    				<Button> Photos </Button>
            					<Button> Code </Button>
            				</Grid>
            			</Grid>
       			</Toolbar>
      		 </AppBar>
      		 </MuiThemeProvider>
      		 </div>
		)
	}
}
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import purple from '@material-ui/core/colors/purple';

const theme = createMuiTheme({
  palette: {
    primary: { main:'#FAFAFA' }, // Purple and green play nicely together.
    secondary: { main: '#EEEEEE' }, // This is just green.A700 as hex.
  },
  
  typography: {
   	fontSize:18,
   	align: 'center',

    body1: {
      fontWeight: 500,
      fontSize: 18,
      fontFamily: 'sans-serif',
    },
    button: {
      fontStyle: 'bold',
    },
  },
});

export default class NewNavBar extends React.Component{
	render(){
		return(
			<MuiThemeProvider theme={theme}>
			<AppBar position="static" color="primary">
        		<Toolbar>
          			<Typography variant="body1" color="inherit">
            			<Button> Calvin Ha </Button>
          			</Typography>

          			<Typography variant="body1" color="secondary">
            			<Button> Home</Button>
          			</Typography>

          			<Typography variant="body1" color="secondary">
            			<Button> About </Button>
           			</Typography>

          			<Typography variant="body1" color="secondary">
            			<Button> Photos </Button>
          			</Typography>
       			</Toolbar>
      		 </AppBar>
      		 </MuiThemeProvider>
		)
	}
}
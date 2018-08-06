import React from 'react';

import { Link } from 'react-router';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const NavBar = () => {
    return(
        <Grid container direction="row" >
            <Grid item med={2} justify="flex-start">
                <Button>Calvin Ha </Button>
            </Grid>
            <Grid item med={8}>
                <span> Just some spacing</span>
            </Grid>
            <Grid item med={2} justify="flex-end">

                    <Button  color="black" align="right"> Home </Button>
                    <Button  color="black"> Code </Button>
                    <Button  color="black"> Photography </Button>
                    <Button  color="black"> About </Button>
            </Grid>
        </Grid>
    )
}
export default NavBar;
import React from 'react';
import Grid from '@material-ui/core/Grid';

const style={
	Grid: {height: 100 , width: 100,}
}

export class LandingBackground extends React.Component {
	render() {
		return(
			<div>
				<Grid container med={12}>
					<Grid item med={12}>
						<h1> Thing </h1>
					</Grid>
				</Grid>

			</div>
		)
	}
}
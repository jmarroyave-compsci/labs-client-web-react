import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function Version({version}){
	return (
		<Typography color="textPrimary" variant="caption">v.{version}</Typography>
	)	
}
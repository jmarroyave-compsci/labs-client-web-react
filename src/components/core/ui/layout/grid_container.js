import React from 'react';
import Grid from '@mui/material/Grid';

const GridContainer = (props) => {
	var { direction, spacing, className, justify, alignItems, style, flex, fill} = props;
	var spacing = (spacing) ? spacing : 0;
	style = (style) ? style : {};

	if(flex){
		style.display = 'flex';
	}

	if(fill) {
		style.width = "100%";
	}

	return (
		<Grid container direction={direction} justifyContent={justify} alignItems={alignItems} className={className} spacing={spacing} style={style}>
			{props.children} 
		</Grid>
	)
}

export default GridContainer;
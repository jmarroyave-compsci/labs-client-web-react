import React from 'react';
import Grid from '@material-ui/core/Grid';

const GridItem = (props) =>{
	var { visible, className, xs, sm, md, style, fill, flex, center } = props;
	visible = (visible)	? visible : true; 

	var styles = { ...style }
	styles = (styles) ? styles : {textAlign: 'inherit'};
	styles.textAlign = (center) ? 'center' : styles.textAlign;

	if(fill) {
		styles.width = "100%";
	}

	if(flex){
		styles.flex = 1;
	}

	return visible &&
			<Grid className={className} item xs={xs} sm={sm} md={md} style={styles}>
				{props.children} 
			</Grid>			
}

export default GridItem;
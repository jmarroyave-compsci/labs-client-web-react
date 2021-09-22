import React from 'react';
import withModule from '../../components/with-module';
import Grid from '@material-ui/core/Grid';

class GridItem extends React.Component {
	render(){
		var { visible, className, xs, sm, md, style, fill, flex, center } = this.props;
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

		return (
			visible &&
				<Grid className={className} item xs={xs} sm={sm} md={md} style={styles}>
					{this.props.children} 
				</Grid>			
		)
	}
}

export default withModule(GridItem);
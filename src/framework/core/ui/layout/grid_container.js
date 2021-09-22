import React from 'react';
import withModule from '../../components/with-module';
import Grid from '@material-ui/core/Grid';

class GridContainer extends React.Component {
	render(){
		var { direction, spacing, className, justify, alignItems, style, flex} = this.props;
		var spacing = (spacing) ? spacing : 0;
		style = (style) ? style : {};

		if(flex){
			style.display = 'flex';
		}
		return (
			<Grid container direction={direction} justifyContent={justify} alignItems={alignItems} className={className} spacing={spacing} style={style}>
				{this.props.children} 
			</Grid>
		)
	}
}

export default withModule(GridContainer);
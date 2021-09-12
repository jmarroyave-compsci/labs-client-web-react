import React from 'react';
import withModule from '../../components/with-module';
import Grid from '@material-ui/core/Grid';

class GridItem extends React.Component {
	render(){
		var { visible, className, xs, sm, md, style, fill, flex, center } = this.props;
		visible = (visible)	? visible : true; 
		style = (style) ? style : {textAlign: 'inherit'};
		style.textAlign = (center) ? 'center' : style.textAlign;

		if(fill) {
			style.width = "100%";
		}

		if(flex){
			style.flex = 1;
		}

		return (
			visible &&
				<Grid className={className} item xs={xs} sm={sm} md={md} style={style}>
					{this.props.children} 
				</Grid>			
		)
	}
}

export default withModule(GridItem);
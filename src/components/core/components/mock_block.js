import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
	root : {
		width: '100%',
		border: '1px dashed gray',
		backgroundColor: '#e0e0e066',
		textAlign: 'center',
		color: 'black',
		fontSize: '1.1rem',
		fontWeight: 'bold',
		paddingTop: '10px',
		boxSizing: 'border-box',
	},
});
class UIMockBlock extends React.Component { 
  render() {
  	const title = (this.props.title) ? this.props.title : 'MOCK BLOCK';
  	const classes = this.props.classes;
  	const height = (this.props.height) ? this.props.height : '30px';
    return (
      <div className={classes.root} style={{height: height, width:'100%'}}>{title}</div>
    );
  }
}

export default withStyles(styles)(UIMockBlock);
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  fullWidth : {
    width : '100%',
  },
  xs : {
    width : '320px',
  },
  sm : {
    width : '100%',
  },
  sm_5 : {
    width : '100%',
  },
  sm_7 : {
    width : '100%',
  },
  md_2 : {
    width : '141px',
  },
  md_4 : {
    width : '282px',
  },
  md_5 : {
    width : '353px',
  },
  md_6 : {
    width : '472px',
  },
  md_7 : {
    width : '542px',
  },
  md_8 : {
    width : '564px',
  },
  lg_2 : {
    width : '194px',
  },  
  lg_4 : {
    width : '405px',
  },  
  lg_6 : {
    width : '632px',
  },  
  lg_8 : {
    width : '810px',
  },  
});

class GamesComponent extends React.Component {
	render(){
		var size = ("size" in this.props) ? this.props.size.toLowerCase(): 'sm';
		var cols = ("cols" in this.props) ? this.props.cols: '2';
		const children = this.props.children;
		const classes = this.props.classes;

		var className = '';
		switch(size){
			case "xs":
				className = classes.xs;
				cols = "full width";
				break;
			case "sm":
				switch(cols){
					case '2':
						className = classes.md_2;
					break;
					default:
						className = classes.md_2;
				}
			break;
			case "md":
				switch(cols){
					case '2':
						className = classes.md_2;
					break;
					case '4':
						className = classes.md_4;
					break;
					case '5':
						className = classes.md_5;
					break;
					case '6':
						className = classes.md_6;
					break;
					case '7':
						className = classes.md_7;
					break;
					case '8':
						className = classes.md_8;
					break;
					default:
						className = classes.md_2;
				}
			break;
			case "lg":
				switch(cols){
					case '2':
						className = classes.lg_2;
					break;
					case '3':
						className = classes.lg_3;
					break;
					case '4':
						className = classes.lg_4;						
					break;
					case '6':
						className = classes.lg_6;
					break;
					case '8':
						className = classes.lg_8;
					break;
					default:
						className = classes.lg_4;
				}
			break;
			default:
				className = classes.md_2;
		}

		return (
			<div className={className} style={{border: '2px solid black', padding: '1rem', margin: '1rem', marginBottom: '2rem'}}>
				<h1>{size.toUpperCase()}{cols != '' ? ' - ' : ''}{cols}</h1>
				<div style={{border: '1px dashed #333', padding: '0'}}>
					{children}
				</div>
			</div>			
		)
	}

}

GamesComponent = withStyles(styles)(GamesComponent);
export default GamesComponent;
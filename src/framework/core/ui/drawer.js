import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Link from './link';
import GridContainer from './layout/grid_container';
import GridItem from './layout/grid_item';
import MDDrawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

const drawerWidth = 240;

const styles = theme => ({
  paper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth + 50,
    },    
    [theme.breakpoints.up('md')]: {
      width: drawerWidth + 75,
    },    
    [theme.breakpoints.up('lg')]: {
      width: drawerWidth + 100,
    },    
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  paperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  drawer: {
  	height: '100%',
  	width: '100%',
  	display: 'flex',
  	flexDirection: 'column',
  },
  header : {
  	width: '100%',
  }, 
  header_container : {
  	display: 'flex',
  	alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,  	
  }, 
  header_div: {
	flexGrow: 1,
  },
  header_close: {
    display: 'block',
    float: 'right',
  },
  list : {
  	overflowY: 'scroll',
  	flex: 1,
  },
  drawerButton : {
  	padding: '0 0 0 1rem',
    margin: 0,
  },
  drawerButtonCategory : {
    padding: '0 0 0 1rem',
    fontSize: '1rem',
  },
  footer : {
  	padding: '0.25rem 0rem',
  	backgroundColor: 'white',
  },
});

class Drawer extends React.Component {
	constructor(){
		super();
		this.handleDrawerClose = this.handleDrawerClose.bind(this);
	}

	handleDrawerClose(){
		if(this.props.onDrawerCloseClick){
			this.props.onDrawerCloseClick();
		}
	}

  	render() {
	  	var { classes, nav, open, footer, header } = this.props;  	
	  	const navDrawer = (nav) ? nav.filter(item => (item.showInDrawer) ? item : null) : [];  		
	  	header = (header) ? header : <div/>;
	  	footer = (footer) ? footer : null;

	  	const options = this.getOptions(navDrawer, classes);
	    return (
	    	<div style={{width:'100%'}}>
	  	        <MDDrawer classes={{paper: classNames(classes.paper, !open && classes.paperClose)}} open={open} onClose={this.handleDrawerClose}>
					<GridContainer className={classes.drawer}>
						<GridItem fill className={classes.header}>
							<div className={classes.header_container}>
				  	        	<div className={classes.header_div}>{header}</div>
				  	        	<div className={classes.header_close}>
									<IconButton onClick={this.handleDrawerClose}>
										<ChevronLeftIcon />
									</IconButton>
								</div>
							</div>
						</GridItem>			
						<GridItem fill className={classes.list}>
							<List>
								{options.map(item =>
									item
								)}
							</List>
						</GridItem>  
						{footer != null &&
							<GridItem fill className={classes.footer}>
								{footer}
							</GridItem>  
						}						
					</GridContainer>
	  	        </MDDrawer>
	    	</div>
	    );
	}

	getOptions(nav, classes){
		var key = 0;
		var options = [];
    var current = "";
		for(var i = 0; i < nav.length; i++){
			var item = nav[i];
      var header;
      if(item.parent && item.parent != current && item.parent != ""){
        current = item.parent;
        header= <ListSubheader key={key++} className={classes.drawerButtonCategory}>{current.toUpperCase()}</ListSubheader>
        options.push(header);
      }

			var opt = 
			<Link key={key++} to={(item.link) ? item.link : item.route} onClick={this.handleDrawerClose}>
			    <ListItem button className={classes.drawerButton}>
			      <ListItemText primary={item.name} />
			    </ListItem>
		    </Link>
		    options.push(opt);
		}

		return options;
	}
}

export default withStyles(styles)(Drawer);
import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MDToolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import LinearProgress from '@material-ui/core/LinearProgress';

import Link from './text-link';
import Search from './search';

const styles = theme => ({
	title: {
		fontSize: "0.8em",
		fontWeight: "800",
		textTransform: "none!important",
		textShadow: '1px 1px #000',
	},	
	toolbar: {
	},
	button : {
		fontSize: "0.75em",
		marginRight: '0rem',
		fontWeight: '700',
		textTransform: "lowercase!important",
	},
	notification: {
		marginLeft: '0.5rem',
		marginRight: '0.5rem',
	},
	buttonHidden: {
		display: 'none',
	},
	padd: {
		width: '1rem',
	},
	fill: {
		flexGrow: 1,
	},
});

class Toolbar extends React.Component {
	constructor(){
		super();

		this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
	}

	handleDrawerOpen(){
		if(this.props.onDrawerOpenClick){
			this.props.onDrawerOpenClick();
		}
	}

	render() {
	  	var { onSearchQuery, classes, nav, title, drawerOpen, notifications, drawer, search, loading } = this.props;  	
	  	const navToolbar = (nav && nav.routes) ? nav.routes.filter(item => (item.showInMenu) ? item : null) : [];

	  	const navMenu = (nav) ? nav.filter(item => (item.showInMenu) ? item : null) : [];
	  	const opts = this.getOptions(navMenu, classes);
	  	search = (search === true) ? true : false;

	    return (
	    	<div style={{width:'100%'}}>
	  	        <MDToolbar disableGutters={!drawerOpen} className={classes.toolbar}>
	  	        	{(drawer) ?
			            <IconButton color="inherit" aria-label="Open drawer" onClick={this.handleDrawerOpen} className={classNames(classes.button, drawerOpen && classes.buttonHidden,)}>
			              <MenuIcon />
			            </IconButton>		            
			            :			            
	            		<div className={classes.padd}>&nbsp;</div>
	  	        	}  	        	
		            {opts.map(item=>
		            	item
	            	)}
		            <div className={classes.fill}>
		            	&nbsp;
		            </div>
		            {(search !== false) &&
						<Search onSearchQuery={onSearchQuery}/>	
					}	            
		            {(notifications !== false) &&
			            <IconButton color="inherit" className={classes.notification}>
			              <Badge badgeContent={notifications.length} color="secondary">
			                <NotificationsIcon />
			              </Badge>
			            </IconButton>  	        
		            }
		            <div className={classes.padd}>
		            	&nbsp;
		            </div>		            
	  	        </MDToolbar>
	  	        {loading === true && <LinearProgress />}
	    	</div>
	    );
	}

	getOptions(nav, classes){
		var key = 0;
		var options = [];
		for(var i = 0; i < nav.length; i++){
			var item = nav[i];
			var opt = 
			<Link border={false} key={key++} className={classes.button} color="inherit" size="small" to={(item.link) ? item.link : item.route}>
		    	{item.name}
		    </Link>
		    options.push(opt);
		}

		return options;
	}

}

export default withStyles(styles)(Toolbar);
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import UIAppBar from 'core/components/appbar';
import UIToolbar from 'core/components/toolbar';
import UIButton from 'core/components/button';
import UILoadingBar from 'core/components/loading_bar';
import UISnackbar from 'core/components/snackbar';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import UIIcon from 'core/components/icon';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import classNames from 'classnames';
import ErrorBoundry from 'core/components/error';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Link } from 'react-router-dom'

const drawerWidth = 240;

const themeBW = createMuiTheme({
  palette: {
    primary: {
      light: '#ffffff',
      main: '#fafafa',
      dark: '#c7c7c7',
      contrastText: '#000',
    },
    secondary: {
      light: '#484848',
      main: '#212121',
      dark: '#000',
      contrastText: '#fff',
    },
  },
});

const styles = theme => ({
	root: {
	},
	rootFixed: {
		marginTop: 66,
	},
	body: {
		boxSizing: 'border-box',
		margin: 0,
	},
	loading : {
		height: 2,
	},
	menuButton: {
		marginLeft: 8,
		marginRight: 8,
	},
	drawerPaper: {
		position: 'relative',
		height: '100%',
		width: drawerWidth,
	},
	title : {
		marginRight: 10,
		fontSize: 14,
	},
});

class UIApp extends React.Component {
  constructor() {
    super();
    this.state = {
    	drawerOpen: false,
    }
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }
 
  toggleDrawer(){
    this.setState({ drawerOpen: !this.state.drawerOpen });
  }

  componentDidMount(){
  	const page_title = (this.props.page_title) ? this.props.page_title : title;
    document.title = page_title;
  }


  render() {
  	var key = 0;
  	const classes = this.props.classes;
  	const title = (this.props.title) ? this.props.title : '[Set title]';
  	const theme = (this.props.theme) ? this.props.theme : themeBW;

    return (
		<MuiThemeProvider theme={theme}>
			<CssBaseline />
	    	<ErrorBoundry from="/core/app/root">
				<div className={(this.props.barPosition && this.props.barPosition === 'fixed') ? classes.rootFixed : classes.root}>
					<UIAppBar position={this.props.barPosition} className={classes.appbar} style={this.props.barStyle}>
						<ErrorBoundry from="/core/app/toolbar">					
							<UIToolbar>
								{this.props.drawer &&
								<IconButton color="secondary" aria-label="open drawer" onClick={this.toggleDrawer} className={classNames(classes.menuButton)}>
									<UIIcon icon={'drawer'}/>
								</IconButton>	
								}	          
								{this.props.title && this.props.logo === null &&
									<div className={classes.title}>
										{this.props.title}
									</div>
								}
								{this.props.logo &&
									<Link to={`/`}>
										<img alt='logo' src={this.props.logo.src} className={(this.props.logo.className) ? this.props.logo.className : ""}/>
									</Link>
								}
								{this.props.toolbar && this.props.toolbar.map(item =>
									item
								)}
								{this.props.menu && this.props.menu.map(item => 
									<UIButton key={key++} href={item.href} color={'secondary'}>{item.name}</UIButton>            
								)}
							</UIToolbar>
						</ErrorBoundry>								
						<UILoadingBar className={classes.loading} server={this.props.server}/>
					</UIAppBar> 
					<UISnackbar server={this.props.server}/>
					<ErrorBoundry from="/core/app/drawer">					
						<Drawer>
							<div className={classes.drawerPaper} tabIndex={0} role="button">
								{this.props.drawer}	
							</div>
						</Drawer>
					</ErrorBoundry>
					<div className={classes.body}>
						<ErrorBoundry from="/core/app/children">
							{this.props.children}
						</ErrorBoundry>
					</div>
				</div>   	
			</ErrorBoundry>
		</MuiThemeProvider>
    );
  }
}

export default withStyles(styles, { withTheme: true })(UIApp);


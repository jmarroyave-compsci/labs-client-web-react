import React from 'react';
import classNames from 'classnames';
import { styled } from '@material-ui/core/styles';
import MuiAppBar from '@material-ui/core/AppBar';
import MuiToolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import NotificationsIcon from '@material-ui/icons/Notifications';
import LinearProgress from '@material-ui/core/LinearProgress';
import Link from 'core/ui/text-link';
import Search from 'core/ui/search';
import Box from '@material-ui/core/Box';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open', 
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));


function Toolbar( props ){
  	var { pageTitle, onSearchQuery, onSearchSuggestions, classes, nav, title, drawerOpen, notifications, drawer, search, loading , toggleDrawer, open} = props;  	
  	const navToolbar = (nav && nav.routes) ? nav.routes.filter(item => (item.showInMenu) ? item : null) : [];

  	const navMenu = (nav) ? nav.filter(item => (item.showInMenu) ? item : null) : [];
  	search = (search === true) ? true : false;
    pageTitle = (pageTitle) ? pageTitle : "PAGE TITLE";

  	if(!toggleDrawer) return <div/>;

    return (
        <AppBar position="fixed" open={open}>
          <MuiToolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
            >
              {pageTitle}
            </Typography>

            <Box sx={{ flexGrow: 1 }} />
            {search && <Search onSearchQuery={onSearchQuery} onSearchSuggestions={onSearchSuggestions} />}

          </MuiToolbar>
        </AppBar>
    );
}

export default Toolbar;
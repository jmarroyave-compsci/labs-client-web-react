import React from 'react';
import classNames from 'classnames';
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import MuiToolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LinearProgress from '@mui/material/LinearProgress';
import Link from 'core/ui/link';
import Search from './search';
import Box from '@mui/material/Box';


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
  	var { onSearchQuery, onSearchSuggestions, classes, nav, title, drawerOpen, notifications, drawer, search, loading , toggleDrawer, open} = props;  	
  	const navToolbar = (nav && nav.routes) ? nav.routes.filter(item => (item.showInMenu) ? item : null) : [];

  	const navMenu = (nav) ? nav.filter(item => (item.showInMenu) ? item : null) : [];
  	search = (search === true) ? true : false;
    
    title = (title) ? title : "PAGE TITLE";

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

            <Box sx={{ flexGrow: 1, padding: "0.5rem 0.75rem 0.5rem 1rem" }}>
              {search && <Search onSearchQuery={onSearchQuery} onSearchSuggestions={onSearchSuggestions} />}
            </Box>
          </MuiToolbar>
        </AppBar>
    );
}

export default Toolbar;
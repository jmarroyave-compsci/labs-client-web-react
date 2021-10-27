import React from 'react';
import classNames from 'classnames';
import { styled } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import MuiToolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import NotificationsIcon from '@material-ui/icons/Notifications';
import LinearProgress from '@material-ui/core/LinearProgress';
import Link from 'core/ui/link';
import Search from './search';
import Box from '@material-ui/core/Box';

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

            {search && 
              <Box sx={{ flexGrow: 1, padding: "0.5rem 0.75rem 0.5rem 1rem" }}>
                <Search onSearchQuery={onSearchQuery} onSearchSuggestions={onSearchSuggestions} />
              </Box>
            }
          </MuiToolbar>

        </AppBar>
    );
}

export default Toolbar;
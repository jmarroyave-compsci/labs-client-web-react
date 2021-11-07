import React, { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { styled } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import MuiToolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import NotificationsIcon from '@material-ui/icons/Notifications';
import LinearProgress from '@material-ui/core/LinearProgress';
import Link from 'core/ui/link';
import Search from './search';
import Box from '@material-ui/core/Box';
import User from './user'


import { toggleDrawer } from 'app';

function Toolbar( props ){
    const appState = useSelector(( state ) => state.app )
    const dispatch = useDispatch();  
    const { classes, notifications } = props;   
   
    const _toggleDrawer = () => dispatch( toggleDrawer() ) 

    return (
        <AppBar position="fixed" open={appState.drawer.open}>
          <MuiToolbar
            sx={{
              pr: '24px',
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={ _toggleDrawer }
              sx={{
                marginRight: '36px',
                ...(appState.drawer.open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>

            <Box sx={{ flexGrow: 1, padding: "0.5rem 0.75rem 0.5rem 1rem" }}>
              <Search/>
            </Box>
            <User/>
          </MuiToolbar>

        </AppBar>
    );
}

export default Toolbar;
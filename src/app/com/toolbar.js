import React, { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { styled } from '@mui/material/styles';

import AppBar from '@mui/material/AppBar';
import MuiToolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LinearProgress from '@mui/material/LinearProgress';
import Link from 'core/ui/link';
import Search from './search';
import Box from '@mui/material/Box';
import User from './user'


import { toggleDrawer } from 'app';

function Toolbar( props ){
    const appState = useSelector(( state ) => state.app )
    const dispatch = useDispatch();  
    const { classes, notifications, loading } = props;   
   
    const _toggleDrawer = () => dispatch( toggleDrawer() ) 

    return (
        <AppBar position="fixed" open={appState.drawer.open}>
          {appState.loading.show && <LinearProgress />}
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
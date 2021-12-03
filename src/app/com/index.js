import React, { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTheme } from '@mui/material/styles';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { initializeApp } from 'app' 
import config from 'app/config'

import AppBar from '@mui/material/AppBar';
import ErrorBoundry from 'core/ui/error-boundry';
import Drawer from './drawer';
import Toolbar from './toolbar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Breadcrumbs from './breadcrumbs';
import Typography from '@mui/material/Typography';
import Footer from './footer'
import Head from 'next/head';
import Snackbar from './snackbar';
import BottomSheet from './bottom-sheet';

import ReactGA from 'react-ga';

import { getTheme } from 'app/config/theme'

function App( props ) {
  const dispatch = useDispatch();
  const appState = useSelector(( state ) => state['app'] )

  const theme = useMemo( () => {
    return getTheme( appState.theme.mode )
  }, [appState.theme.mode])

  useEffect( ()=>{
    ReactGA.initialize(config.PLUGINS.GOOGLE.ANALYTICS);
    ReactGA.pageview(window.location.pathname + window.location.search);

    dispatch( initializeApp( { dispatch : dispatch } ) ) 
  }, [])

  return (
    <>          
      <Head>
        <title>{appState.pageTitle}</title>
        <meta name="theme-color" content={theme.palette.primary.main} />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={ theme }>
        <CssBaseline />
        <Box sx={{ display: 'flex' }} style={{padding: 0, margin: 0}}>
          <Snackbar/>
          <BottomSheet/>
          <Toolbar/>
          <Drawer/>
          <Box
            sx={{
              flexGrow: 1,
              overflow: 'auto',
            }}
            style={{padding: 0, margin: 0}}
          >
            <div style={{paddingTop: "5.8rem"}}></div>

            <Breadcrumbs style={{padding: 0, marginBottom: "0.5rem", marginLeft: "1rem"}}/>
            <div style={{padding: 0, margin: 0}}>
              <ErrorBoundry from="/core/ui/app/children">
                {props.children}
              </ErrorBoundry>
            </div>
          </Box>
        </Box>
        <Box component="footer" style={{margin: 0, padding: 0}} >
          <Footer/>
        </Box>

      </ThemeProvider>
    </>
  );
}

export default App;
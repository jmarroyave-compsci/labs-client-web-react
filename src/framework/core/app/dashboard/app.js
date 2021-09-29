import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import { MuiThemeProvider } from '@material-ui/core/styles';
import ErrorBoundry from 'core/components/error';
import Drawer from './drawer';
import Toolbar from './toolbar';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import AppOffline from 'core/components/app_offline';
import Breadcrumbs from './breadcrumbs';

import { customTheme } from 'core/ui/theme'
import { makeStyles } from "@material-ui/core/styles";

import './app.scss';

const styles = theme => ({
  appBarSpacer: {
    ...theme.mixins.toolbar,
  },
  content: {
    boxSizing: 'border-box',
    margin: 0,
    flexGrow: 1,
    padding: 0,
    overflow: 'auto',
    width: '100%',
  },
});
const useStyles = makeStyles(styles);


function App( props ) {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const classes = useStyles();
  var { pageTitle, title, breadcrumbs, error, onSearchQuery, onSearchSuggestions, nav, children, title, notifications, search, loading, footer } = props;

  const offline = (error) ? true : false;

  document.getElementById('root').style.display = 'inline-block';
  if(document.getElementById('root_splash'))
    document.getElementById('root_splash').style.display = 'none';
  document.body.style.overflow = 'unset';
  document.title = pageTitle;

  if(offline) return <AppOffline error={error}/>

  return (
    <MuiThemeProvider theme={customTheme}>
      <Box sx={{ display: 'flex' }} style={{padding: 0, margin: 0}}>
        <CssBaseline />
        <Toolbar title={title} toggleDrawer={toggleDrawer} open={open} onSearchQuery={onSearchQuery} onSearchSuggestions={onSearchSuggestions} search={search}/>
        <Drawer toggleDrawer={toggleDrawer} open={open} nav={nav} />
        <Box
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            overflow: 'auto',
          }}
          style={{padding: 0, margin: 0}}
        >
          <div className={classes.appBarSpacer}/>
          <Breadcrumbs data={breadcrumbs} style={{padding: 0, marginBottom: "1.25rem"}}/>
          <div style={{padding: 0, margin: 0}}>
            <ErrorBoundry from="/core/ui/app/children">
              {children}
            </ErrorBoundry>
          </div>
        </Box>
      </Box>
      <Box component="footer" style={{margin: 0, padding: 0}} >
        {footer}
      </Box>
    </MuiThemeProvider>
  );
}

export default App;
import React, { useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import ErrorBoundry from 'core/ui/error-boundry';
import Drawer from './drawer';
import Toolbar from './toolbar';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import AppOffline from 'core/ui/app_offline';
import Breadcrumbs from './breadcrumbs';
import Typography from '@material-ui/core/Typography';

function DashboardApp( props ) {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  var { pageTitle, title, breadcrumbs, error, onSearchQuery, onSearchSuggestions, nav, children, notifications, search, loading, footer } = props;

  useEffect( () => {
    if( pageTitle != "")
      document.title = pageTitle
  }, [ pageTitle ])

  const offline = (error) ? true : false;
  nav = (nav) ? nav : {};

  if(offline) return <AppOffline error={error}/>

  return (
    <>
      <Box sx={{ display: 'flex' }} style={{padding: 0, margin: 0}}>
        <Toolbar title={title} toggleDrawer={toggleDrawer} open={open} onSearchQuery={onSearchQuery} onSearchSuggestions={onSearchSuggestions} search={search}/>
        <Drawer toggleDrawer={toggleDrawer} open={open} nav={nav} />
        <Box
          sx={{
            flexGrow: 1,
            overflow: 'auto',
          }}
          style={{padding: 0, margin: 0}}
        >
          <div style={{paddingTop: "5rem"}}></div>

          <Breadcrumbs data={breadcrumbs} style={{padding: 0, marginBottom: "0.5rem", marginLeft: "1rem"}}/>
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
    </>
  );
}

export default DashboardApp;
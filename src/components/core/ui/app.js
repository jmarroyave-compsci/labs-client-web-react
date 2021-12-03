import React from 'react';
import { withStyles } from "@mui/styles";
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import { MuiThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import ErrorBoundry from '../components/error';
import Drawer from './drawer';
import Toolbar from './toolbar';

import './assets/css/app.scss';

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

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      drawerOpen : false,
    }

    this.onDrawerOpenClick = this.onDrawerOpenClick.bind(this);
    this.onDrawerCloseClick = this.onDrawerCloseClick.bind(this);
  }

  onDrawerOpenClick(){ 
    this.setState({drawerOpen : true})
  }

  onDrawerCloseClick(){
    this.setState({drawerOpen : false})
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  componentDidMount(){
    document.getElementById('root').style.display = 'inline-block';
    if(document.getElementById('root_splash'))
      document.getElementById('root_splash').style.display = 'none';
    document.body.style.overflow = 'unset';
    //document.title = this.props.page_title;
  }

  render() {
    var { onSearchQuery, classes, nav, children, title, notifications, search, loading } = this.props;

    var theme = createTheme();

    var showDrawer = (nav.drawer.show) ? true : false;
    var drawer = (nav.drawer) ? nav.drawer : {header: null, footer: null};
    notifications = (notifications === false) ? false : (notifications) ? notifications : [];

    var links = []; 
    nav.options.map(r => {
      if (!r.showInMenu && !r.showInDrawer) return;
      links.push({link: (r.link) ? r.link : r.path, showInMenu: r.showInMenu, showInDrawer: r.showInDrawer, order: (r.order) ? r.order : 1000, name: r.name, parent: r.parent});
    })
    links.sort((a,b)=> (a.order < b.order) ? -1 : 1)

    return (
      <MuiThemeProvider theme={theme}>
        <div style={{width:'100%'}}>
          <ErrorBoundry from="/core/ui/app">
            <CssBaseline />
            <AppBar position="fixed">
              <Toolbar onSearchQuery={onSearchQuery} title={title} nav={links} drawerOpen={this.state.drawerOpen} onDrawerOpenClick={this.onDrawerOpenClick} notifications={notifications} drawer={showDrawer} search={search} loading={loading}/>
            </AppBar>
            {showDrawer &&
              <Drawer header={drawer.header} footer={drawer.footer} nav={links} open={this.state.drawerOpen} onDrawerCloseClick={this.onDrawerCloseClick}/>
            }
            <div className={classes.content}>
              <div className={classes.appBarSpacer}/>
              <ErrorBoundry from="/core/ui/app/children">
                  {children}
              </ErrorBoundry>
            </div>
          </ErrorBoundry>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
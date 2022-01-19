import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { styled } from '@mui/material/styles';
import classNames from 'classnames';
import Link from 'core/ui/link';
import GridContainer from 'core/ui/layout/grid_container';
import GridItem from 'core/ui/layout/grid_item';
import MuiDrawer from '@mui/material/Drawer';
import MuiToolbar from '@mui/material/Toolbar';
import Badge from '@mui/material/Badge';
import Icon from "@mui/material/Icon";
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import PeopleIcon from '@mui/icons-material/People';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Box from '@mui/material/Box';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useTheme } from '@mui/material/styles';
import { Scrollbars } from 'react-custom-scrollbars';

import { toggleDrawer, toggleThemeMode, toggleSnowMode, toggleNewVersion } from 'app';

function Drawer_( props ) {
  const appState = useSelector(( state ) => state.app )
  const dispatch = useDispatch();  
  const theme = useTheme()

  const _toggleDrawer = () => dispatch( toggleDrawer() ) 
  const _toggleThemeMode = () => dispatch( toggleThemeMode() ) 
  const _toggleSnowMode = () => dispatch( toggleSnowMode() ) 
  const _toggleNewVersion = () => dispatch( toggleNewVersion() ) 

	const options = getOptions( appState, _toggleDrawer, _toggleNewVersion );
  const anchor = "left";
  const drawerWidth = 260;

  const DrawerButton = ( { children} ) => (
    <div style={{paddingLeft: '0.5rem', paddingRight: '0.5rem'}}>
      {children}
    </div>

  )

  return (
    <MuiDrawer       
      anchor={anchor}
      open={appState.drawer.open}
      onClose={ _toggleDrawer }      
      PaperProps={{sx: {height: '100%!important'}}}
    > 
      <Box
        sx={{ 
          display: 'flex',
          flexDirection: 'column',
          width: `${drawerWidth}px`,
          height: '100vh',
          bgcolor: "background.paper",
          color: "text.primary",
          borderColor : "text.primary",
        }}
        role="presentation"
      >
        <MuiToolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            px: [1],
          }}
        >
          <IconButton onClick={ _toggleDrawer } color="primary">
            <ChevronLeftIcon />
          </IconButton>
          <div style={{flex: 1}}/>

          <DrawerButton>
            <Badge badgeContent={appState.users} color="primary" showZero>
              <PeopleIcon color="primary"/>
            </Badge>
          </DrawerButton>
          <DrawerButton>
            <IconButton edge="end"
              color="primary"
              onClick={ _toggleThemeMode }
            >
              { theme.palette.mode === "dark" ?
                <LightModeIcon/>
                :
                <DarkModeIcon/>
              } 
            </IconButton>
          </DrawerButton>
          {appState.features.snow &&
            <DrawerButton>
              <IconButton edge="end"
                color={(appState.theme.snowMode) ? "primary" : "secondary"}
                onClick={ _toggleSnowMode }
              >
                <Icon>ac_unit</Icon>
              </IconButton>
            </DrawerButton>            
          }  
        </MuiToolbar>
        <Scrollbars style={{flex: 1}}>
          <div>
            {options}
          </div>
        </Scrollbars>
      </Box>
    </MuiDrawer>
	);
}

function getOptions( appState, toggleDrawer, toggleNewVersion ){
  var nav = appState.nav.options;
	nav = (nav) ? nav.filter(item => (item.showInDrawer) ? item : null) : [];
	var key = 0;
	var options = [];
  var current = "";

  const appendDivider = () => <Divider key={key++}/>
  const appendItem = ( name, icon, route, onClick ) => {
    const item = ( 
      <ListItem key={key++} button onClick={ () => {
        toggleDrawer()
        if(onClick){
          onClick()
        }
      }} >
        {icon && <ListItemIcon>
          <Icon alt={name} color="primary">{icon}</Icon>
        </ListItemIcon>
        }

        <ListItemText inset={(!icon)} primary={name} />
      </ListItem>
    )    

    return ( route ) ?  ( 
      <Link to={route} box 
        key={key++}>
        {item}
      </Link>
      ) 
    :
      item
  }


  options.push(appendItem( (appState.theme.newVersion ) ? "older version" : "new version", ( !appState.theme.newVersion ) ? "update" : "history" , null, () => { 
    toggleNewVersion()
  } ));
  options.push( appendDivider() )

	for(var i = 0; i < nav.length; i++){
		var item = nav[i];
    var header;
    if(item.separator){
        options.push(<Divider key={key++}/>);
        continue;
    }

    if(item.group){
      options.push( (appState.drawer.open) ? <ListSubheader key={key++}>{item.group.toUpperCase()}</ListSubheader> : appendDivider() );
      continue;
    } 

    if(item.onMini === false && !appState.drawer.open) continue;

    var name = (appState.drawer.open) ? ((item.nameOpen) ? item.nameOpen : item.name) : item.name; 
    options.push(appendItem( name, item.icon, (item.link) ? item.link : item.route, () => {} ));
	}

	return options;
}

export default Drawer_;

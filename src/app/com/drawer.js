import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { styled } from '@material-ui/core/styles';
import classNames from 'classnames';
import Link from 'core/ui/link';
import GridContainer from 'core/ui/layout/grid_container';
import GridItem from 'core/ui/layout/grid_item';
import MuiDrawer from '@material-ui/core/Drawer';
import MuiToolbar from '@material-ui/core/Toolbar';
import Badge from '@material-ui/core/Badge';
import Icon from "@material-ui/core/Icon";
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import PeopleIcon from '@material-ui/icons/People';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Box from '@mui/material/Box';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useTheme } from '@material-ui/core/styles';

import { toggleDrawer, toggleThemeMode } from 'app';

function Drawer_( props ) {
  const appState = useSelector(( state ) => state.app )
  const dispatch = useDispatch();  
  const theme = useTheme()

  const _toggleDrawer = () => dispatch( toggleDrawer() ) 
  const _toggleThemeMode = () => dispatch( toggleThemeMode() ) 

	const options = getOptions( appState, _toggleDrawer );
  const anchor = "left";
  const drawerWidth = 260;

  return (
    <MuiDrawer       
      anchor={anchor}
      open={appState.drawer.open}
      onClose={ _toggleDrawer }      
    >
      <Box
        sx={{ 
          width: `${drawerWidth}px`,
          bgcolor: "background.paper",
          color: "text.primary",
          borderColor : "text.primary"
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
          <Badge badgeContent={appState.users} color="primary" showZero>
            <PeopleIcon/>
          </Badge>
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

        </MuiToolbar>
        {options}
      </Box>
    </MuiDrawer>
	);
}

function getOptions( appState, toggle ){
  var nav = appState.nav.options;
	nav = (nav) ? nav.filter(item => (item.showInDrawer) ? item : null) : [];
	var key = 0;
	var options = [];
  var current = "";

	for(var i = 0; i < nav.length; i++){
		var item = nav[i];
    var header;
    if(item.separator){
        options.push(<Divider key={key++}/>);
        continue;
    }

    if(item.group){
      options.push( (appState.drawer.open) ? <ListSubheader key={key++}>{item.group.toUpperCase()}</ListSubheader> : <Divider key={key++}/> );
      continue;
    } 

    if(item.onMini === false && !appState.drawer.open) continue;

    var name = (appState.drawer.open) ? ((item.nameOpen) ? item.nameOpen : item.name) : item.name; 

		var opt = 
		<Link box 
      key={key++} to={(item.link) ? item.link : item.route} onClick={() => console.log("click")}>
		    <ListItem button onClick={ toggle } >
          {item.icon && <ListItemIcon>
            <Icon alt={name} color="primary">{item.icon}</Icon>
          </ListItemIcon>
          }

		      <ListItemText inset={(!item.icon)} primary={name} />
		    </ListItem>
	    </Link>
	    options.push(opt);
	}

	return options;
}

export default Drawer_;

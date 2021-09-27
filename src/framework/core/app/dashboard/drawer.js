import React from 'react';
import { styled } from '@material-ui/core/styles';
import classNames from 'classnames';
import Link from 'core/ui/link';
import GridContainer from 'core/ui/layout/grid_container';
import GridItem from 'core/ui/layout/grid_item';
import MuiDrawer from '@material-ui/core/Drawer';
import MuiToolbar from '@material-ui/core/Toolbar';
import Icon from "@material-ui/core/Icon";
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

const drawerWidth = 240;

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(6),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(7),
        },
      }),
    },
  }),
);

function Drawer_( props ) {
	var { nav, footer, header, toggleDrawer, open } = props;  	
	const options = getOptions(nav, open);

  return (
    <Drawer variant="permanent" open={open}>
      <MuiToolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          px: [1],
        }}
      >
        <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </MuiToolbar>
      {options}
    </Drawer>
	);
}

function getOptions(nav, open){
  nav = nav.options;
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
      options.push( (open) ? <ListSubheader key={key++}>{item.group.toUpperCase()}</ListSubheader> : <Divider key={key++}/> );
      continue;
    } 

    if(item.onMini === false && !open) continue;

    var name = (open) ? ((item.nameOpen) ? item.nameOpen : item.name) : item.name; 

		var opt = 
		<Link key={key++} to={(item.link) ? item.link : item.route}>
		    <ListItem button>
          {item.icon && <ListItemIcon>
            <Icon alt={name}>{item.icon}</Icon>
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

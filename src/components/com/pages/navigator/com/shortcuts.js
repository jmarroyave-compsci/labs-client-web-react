import React, { useContext, useEffect, useRef } from 'react'
import { ComponentContext } from '../context';
import { styled } from '@mui/material/styles';
import __Button from '@mui/material/Fab'
import Stack from '@mui/material/Stack'
import Icon from "@mui/material/Icon";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import Flash from 'react-reveal/Flash';

export const FloatingNavigation = styled(Stack)({
  padding: "1rem",
  position: "fixed",
  right: 0,
  bottom: '0px',
  zIndex: 1000,
  alignItems: "end",
});

export const Status = styled("div")( ({theme}) => ({
  fontSize: "0.6rem",
  backgroundColor: theme.palette.background.paper,
  borderRadius: '5px',
  padding: "5px",
  userSelect: 'none',
  opacity: 1,
  boxShadow: "1px 1px 5px rgb(0 0 0 / 40%)",
}));

export const _Label = styled("span")( ( { fontSize='100%' } ) => ({
  fontFamily: "monospace",
  textTransform: "uppercase",
  fontSize: fontSize,
  display: 'block',
  maxWidth: '100px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
}));

function Label( props ){
  const { children, value } = props
  return (
    <Flash spy={value}>
      <_Label {...props}>
        {value}
      </_Label>
    </Flash>
  )
}


function Shortcuts( { mobile=false } ){
  const context = useContext( ComponentContext );
  const { topic, genre, decade } = context.state.parameters;

  const onClick = ( target ) => {
    context.dispatch( { type: `UI_${target.toUpperCase()}`} )
    if(mobile) return;

    scrollTo(target)
  }

  const scrollTo = (target) => {
    var d = document.getElementById(target)
    if(!d) return
    const y =  d.offsetTop - 100
    window.scrollTo(0, y)
  }

  return(
    <ShortcutsNav mobile={mobile} onClick={onClick}
      buttons={[
        {target:"timeline", icon:"calendar_month", label:"Timeline", extended: (mobile) ? genre : `${genre}+${decade}`, disabled: false, visible: true},
        {target:"history", icon:"history", label:"History", extended: decade, disabled: false, visible: mobile},
        {target:"topic", icon:"view_agenda", label:"Topic", extended: topic, disabled: topic == null, visible: true},
        {target:"results", icon:"view_list", label:"Results", extended: null, disabled: topic == null, visible: true},
      ]}
    >
    </ShortcutsNav>
  )
}

function ShortcutsNav( {mobile, buttons, onClick} ){
  return (
    (mobile) ? 
      <ShortcutsNavMobile buttons={buttons} onClick={onClick}/>
    :
      <ShortcutsNavDesktop buttons={buttons} onClick={onClick}/>
  )
}

function ShortcutsNavMobile( { buttons, onClick } ){
  const context = useContext( ComponentContext );

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation
        showLabels={true}
        value={context.state.ui.page}
        onChange={(event, newValue) => {
          onClick(newValue)
        }}
      >
      { buttons.filter( b => b.visible ).map( b =>
        <BottomNavigationAction key={b.target} disabled={b.disabled} label={<Label>{(b.extended != null) ? b.extended : b.label}</Label>} value={b.target.toUpperCase()} icon={<Icon>{b.icon}</Icon>}/>
      )}
      </BottomNavigation>
    </Paper>
  )  
}

function ShortcutsNavDesktop( { buttons, onClick } ){
  return (
    <FloatingNavigation direction='column' spacing={1}>
    { buttons.filter( b => b.visible ).map( b =>      
      <__Button key={b.target} size="small" variant={"extended"} icon={b.icon} aria-label={b.label} disabled={b.disabled} onClick={() => onClick(b.target)}>
        <Label fontSize={'60%'} value={(b.extended != null) ? b.extended : b.label }/>
        <Icon>{b.icon}</Icon>
      </__Button>    
    )}
    </FloatingNavigation>
  )  
}

export default Shortcuts
import React, { useContext, useEffect, useRef } from 'react'
import { ComponentContext } from '../context';
import { styled } from '@mui/material/styles';
import __Button from '@mui/material/Fab'
import Stack from '@mui/material/Stack'
import Icon from "@mui/material/Icon";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';

export const Frame = styled(Stack)({
  padding: "1rem",
  position: "fixed",
  right: 0,
  bottom: 0,
  zIndex: 1000,
  alignItems: 'end',
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

export const Label = styled("span")({
  fontFamily: "monospace",
  textTransform: "uppercase",
});


function Shortcuts( { showHistory=false, showResults=true, mobile=false } ){
  return(
    <>
    {mobile && <ShortcutsMobile showHistory showResults/>}
    {!mobile && <ShortcutsDesktop showHistory showResults/>}
    </>
  )
}

function ShortcutsMobile({ showHistory=false, showResults=true, mobile=false } ){
    const context = useContext( ComponentContext );
    const { topic, genre, decade } = context.state.parameters;

    const clickNav = ( target ) => {
      context.dispatch( { type: `UI_${target}`} )
    }

    return (
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={context.state.ui.page}
          onChange={(event, newValue) => {
            clickNav(newValue)
          }}
        >
          <BottomNavigationAction label="Timeline" value={"TIMELINE"} icon={<Icon>{"calendar_month"}</Icon>} />
          <BottomNavigationAction label="History" value={"HISTORY"} icon={<Icon>{"history"}</Icon>} />
          <BottomNavigationAction disabled={topic == null} label={(topic) ? <Label>{topic}</Label> : "Topic"} value={"TOPIC"} icon={<Icon>{"calendar_view_week"}</Icon>} />
          <BottomNavigationAction disabled={topic == null} label={(topic) ? <Label>{`${topic}+${decade}`}</Label> : "Results"} value={"RESULTS"} icon={<Icon>{"grid_view"}</Icon>} />
        </BottomNavigation>
      </Paper>
    )  
}

function ShortcutsDesktop({ showHistory=false, showResults=true, mobile=false } ){
    const context = useContext( ComponentContext );
    const { topic, decade } = context.state.parameters;

  const onClick = ( target ) => {
    scrollTo(target)
    target = target.toUpperCase()
    context.dispatch( { type: `UI_${target}`} )
  }

  const scrollTo = (target) => {
    var d = document.getElementById(target)
    if(!d) return
    const y =  d.offsetTop - 100
    window.scrollTo(0, y)
  }

  return (
      <Frame direction='column' spacing={1}>
        <Button target={"timeline"} icon="calendar_month" label="Timeline" onClick={onClick}>Timeline</Button>
        {topic && <Status><Label>{`${topic}+${decade}`}</Label></Status>}
        <Button disabled={topic == null} target="topic" icon="calendar_view_week" label="Topic" onClick={onClick}>Topic</Button>
        <Button disabled={topic == null} target="results" icon="grid_view" label="results" onClick={onClick}>Results</Button>
      </Frame>
    )  
}

function Button( { children, target, icon, label, disabled=false, extended=null, onClick } ){
  return (
      <__Button size="small" variant={(extended != null)? "extended" : "circular"} icon={icon} aria-label={label} disabled={disabled} onClick={() => onClick(target)}>
        { extended != null && <span style={{ fontSize: '60%', paddingRight: '0.5rem' }}>{extended}</span> }
        <Icon>{(icon) ? icon : "ac_unit"}</Icon>
      </__Button>
  )
}

export default Shortcuts
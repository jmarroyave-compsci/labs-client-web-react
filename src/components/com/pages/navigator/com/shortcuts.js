import React, { useContext, useEffect, useRef } from 'react'
import { ComponentContext } from '../context';
import { styled } from '@mui/material/styles';
import __Button from '@mui/material/Fab'
import Stack from '@mui/material/Stack'
import Icon from "@mui/material/Icon";

export const Frame = styled(Stack)({
  padding: "1rem",
  position: "fixed",
  right: 0,
  bottom: 0,
  zIndex: 1000,
  alignItems: 'end',
});

function Shortcuts( { showHistory=false, showResults=true } ){
    const context = useContext( ComponentContext );
    const { topic } = context.state.parameters;

    return (
      <Frame direction='column' spacing={1}>
        <Button target={"timeline"} icon="calendar_month" label="Timeline">Timeline</Button>
        {showHistory && <Button target="history" icon="history" label="History">History</Button>}
        <Button disabled={topic == null} extended={topic} target="topic" icon="calendar_view_week" label="Topic">Topic</Button>
        {showResults && <Button disabled={topic == null} target="results" icon="grid_view" label="results">Results</Button>}
      </Frame>
    )
}

function Button( { children, target, icon, label, disabled=false, extended=null } ){
  const context = useContext( ComponentContext );

  const clickNav = ( target ) => {
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
      <__Button size="small" variant={(extended != null)? "extended" : "circular"} icon={icon} aria-label={label} disabled={disabled} onClick={() => clickNav(target)}>
        { extended != null && <span style={{ fontSize: '60%', paddingRight: '0.5rem' }}>{extended}</span> }
        <Icon>{(icon) ? icon : "ac_unit"}</Icon>
      </__Button>
  )
}

export default Shortcuts
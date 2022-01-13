import React from 'react'
import { styled } from '@mui/material/styles';


export const Frame = styled('div')({
  padding: "1rem",
  position: "fixed",
  right: 0,
  bottom: 0,
  zIndex: 1000,
});

export const _Button = styled('div')( ({theme}) => ({
  margin: "0 0 0.5rem 0",
  padding: "0.5rem",
  cursor: "pointer",
  border: "1px solid",
  borderColor: theme.palette.text.primary,
  backgroundColor: theme.palette.action.selected,
  color: theme.palette.text.primary,
  fontSize: '0.75rem',
  textAlign: 'center',
}));

function Shortcuts( { showHistory=false, showResults=false } ){
    return (
      <Frame>
        <Button target={"timeline"}>Timeline</Button>
        {showHistory && <Button target="history">History</Button>}
        <Button target="topic">Topic</Button>
        {showResults && <Button target="results">Results</Button>}
      </Frame>
    )
}

function Button( { children, target } ){
  const scrollTo = (target) => {
    var d = document.getElementById(target)
    if(!d) return
    const y =  d.offsetTop - 100
    window.scrollTo(0, y)
  }

  return (
      <_Button onClick={() => scrollTo(target)}>
        { children }
      </_Button>
  )
}

export default Shortcuts
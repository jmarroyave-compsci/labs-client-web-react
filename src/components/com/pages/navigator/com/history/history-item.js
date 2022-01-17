import React from 'react'
import { styled } from '@mui/material/styles';

const Small = styled("div")(({theme}) => ({
  fontSize: "0.7rem", 
  lineHeight: '1rem',
  marginBottom: "-0.2rem",
  opacity: 0.8,
  paddingBottom: 0,
}))

const Medium = styled("div")(({theme}) => ({
  fontSize: "0.9rem", 
  lineHeight: '1.5rem',
  opacity: 0.9,
  paddingTop: 0,
  marginTop: '0rem',
  marginBottom: '0.5rem',
}))


function HistoryItem( { item, year } ){
    return (
      <React.Fragment>
        {item.date != "?" &&<div><Small>{(year) ? `[${year}] ` : ""}{item.date}</Small></div>}
        <Medium>{item.event}</Medium>
      </React.Fragment>
    )

}

export default HistoryItem
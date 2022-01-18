import React from 'react'
import { styled } from '@mui/material/styles';

const Small = styled("div")(({theme}) => ({
  fontSize: "0.7rem", 
  lineHeight: '1rem',
  marginBottom: "-0.2rem",
  opacity: 0.6,
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

const Tag = styled("span")(({theme}) => ({
  fontWeight: 'bold',
}))

function HistoryItem( { item, year } ){
    return (
      <React.Fragment>
        {item.date != "?" &&<div><Small>{(year) ? `[${year}] ` : ""}{item.date}</Small></div>}
        <Medium>{getHighlightedText(item.event, item.tags)}</Medium>
      </React.Fragment>
    )

}




function getHighlightedText(text, highlight) {
    const groups = {
        "ORDINAL" : false,
        "PERCENT" : false,
        "NORP": false,
        "MONEY": false,
        "DATE" : false, 
        "CARDINAL": false,
        "QUANTITY": false,
        "LANGUAGE": false,
    }

    highlight = highlight.filter( f => !Object.keys(groups).includes(f.type) ).map( r => r.text)
    const parts = text.split(new RegExp(`(${highlight.join("|").replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')})`, 'g'));
    return <> { parts.map((part, i) => 
        highlight.includes(part) ? 
          <Tag key={i}>{part}</Tag>
        : 
          <span key={i}>{part}</span> 
        )
    } </>;
}

export default HistoryItem
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

const findWord = () => {
    var selection = window.getSelection();
    if (!selection || selection.rangeCount < 1) return true;
    var range = selection.getRangeAt(0);
    var node = selection.anchorNode;
    var word_regexp = /^\w*$/;

    // Extend the range backward until it matches word beginning
    while ((range.startOffset > 0) && range.toString().match(word_regexp)) {
      range.setStart(node, (range.startOffset - 1));
    }
    // Restore the valid word match after overshooting
    if (!range.toString().match(word_regexp)) {
      range.setStart(node, range.startOffset + 1);
    }

    // Extend the range forward until it matches word ending
    while ((range.endOffset < node.length) && range.toString().match(word_regexp)) {
      range.setEnd(node, range.endOffset + 1);
    }
    // Restore the valid word match after overshooting
    if (!range.toString().match(word_regexp)) {
      range.setEnd(node, range.endOffset - 1);
    }

    var word = range.toString();
    return word
}

function HistoryItem( { item, year, onClick } ){
    const clickWord = (e) => {
      const w = findWord();
      if(!w || w.trim() == "") return;
      if(onClick) onClick(w)
    }

    return (
      <div onClick={clickWord} >
        {item.date != "?" &&<div><Small>{(year) ? `[${year}] ` : ""}{item.date}</Small></div>}
        <Medium>{getHighlightedText(item.event, item.tags, onClick)}</Medium>
      </div>
    )
}

function getHighlightedText(text, highlight, onClick) {
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

    var parts;    
      try{
        highlight = highlight.filter( f => !Object.keys(groups).includes(f.type) ).map( r => r.text)
        parts = text.split(new RegExp(`(${highlight.join("|")})`, 'g'));        
      } catch (ex){
        return <span>{highlight}</span> 
      }
    return <> { parts.map((part, i) => 
        highlight.includes(part) ? 
          <Tag key={i} onClick={(e) => {
            onClick(part)
            e.stopPropagation(true)
          }}>{part}</Tag>
        : 
          <span key={i}>{part}</span> 
        )
    } </>;
}

export default HistoryItem
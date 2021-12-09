import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Title, Small, ItemFrame } from 'style/item'
import { Frame } from 'style/boxes'
import Marquee from "react-fast-marquee";

const ignored = [
  "episode",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "10",
  "11",
  "9",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "31",
  "#1",
  "#2",
  "#3",
  "#4",
  "#5",
  "#6",
  "#7",
  "#8",
  "episode #1",
  "episode #1 1",
  "episode #1 2",
  "episode #1 3",
  "episode #1 4",
  "episode #1 5",
  "episode #1 6",
  "episode #1 7",
  "episode #2",
  "episode #3",
  "episode #4",
  "episode #5",
  "episode #6",
  "episode #7",
  "episode #8",
  "2000",
  "the",
  "-",
  "a",
  "as",
  "of",
  "and",
  "i",
  "you",
  "to",
  "la",
  "de",
  "in",
  "no",
  "der",
  "die",
  "el",
  "with",
  "of the",
  "is",
  "on",
  "o",
  "en",
  "&",
  "le",
  "me",
  "my",
  "vs",
  "for",
  "dated",
  "episode dated",
  "may",
  "april",
  "october",
  "august",
  "march",
  "february",
  "january",
  "june",
  "november",
  "september",
  "december",
  "june",
  "july",
]

const ignore = ( w ) => {
  if(Number.isInteger(w)) return true;
  if(w.startsWith("episode")) return true;
  if(w.startsWith("dated")) return true;
  if(ignored.includes(w)) return true;
  return false;
}


function Item(props){
    const { year, words, genre } = props;

    const _words = words.slice(0,350)

    return (
      <div>
        <Title>{year}</Title>
        {_words && _words.map( (w, idx) => 
          (ignore(w.p) || w.n == 1) ? <div key={idx} /> : <div key={idx}>{w.p} <Small>{w.n}</Small></div>
        )}
      </div>      
    )

}


export const ItemMarquee = ( props ) => {
  var { max, min, words, genre, year, header=true } = props

  max = (max) ? max : words.reduce( (max, cur) => (max > cur.n) ? max : cur.n , 0)
  min = (min) ? min : words.reduce( (min, cur) => (min > cur.n) ? cur.n : min , max)
  
  const fontSize = ( n ) => {
    n = n + 10
    const sizes = [1,2,3,5,8,12,16,21,34,55];
    const range = (max - min) / sizes[sizes.length - 1]

    var pos = Math.floor( n / range );
    for(var i = 0; i < sizes.length; i++) {
      var cur = sizes[i];
      if(pos < cur){
        pos = i;
        break;
      }
    }
    return sizes[pos] + 10
  }

  const Line = ( { data, direction, start } ) => (
    <Marquee gradient={false} direction={direction}>
      {words.slice(start, 2* start - 1).map( (w,idx) => 
          <span key={idx} style={{border: '1px solid rgba(0,0,0,0.1)', padding: "0.5rem", marginRight: '1rem', marginBottom: '0.25rem', fontSize: `${fontSize(w.n)}px` }}>{w.p.split(",").join(" ")}</span>
      )}
    </Marquee>      
  )

  const size = Math.floor(words.length / 5)
  return (
    <div style={{padding: '1rem'}}>
      {header && 
        <Frame>
          <Title>{genre.toUpperCase()} {year}</Title>
        </Frame>
      }

      {[0,1,2,3,4].map( i => 
        <Line key={i} start={size * i} direction={(i % 2 == 0) ? "left" : "right"}/>
      )}
    </div>
  )

}

export default Item
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Title, Small, ItemFrame } from 'style/item'
import { Frame } from 'style/boxes'
import Marquee from "react-fast-marquee";
import { grey } from '@mui/material/colors';


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

  console.log(max, min)

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
    //return `${sizes[pos] + 10}px`
    return "1em";
  }

  const color = ( n ) => {
    const sizes = [3,5,8,13,21,34,55];
    const range = (max - min) / sizes[sizes.length - 1]
    var pos = Math.floor( n / range );
    for(var i = 0; i < sizes.length; i++) {
      if(pos <= sizes[i]){
        pos = i;
        break;
      }
    }
    pos = (pos > sizes.length - 1) ? sizes.length - 1 : pos; 
    pos += ( sizes.length > 9 ) ? 0 : 9 - (sizes.length - 1);
    pos = (pos < 4) ? 4 : pos; 
    const resp = grey[pos * 100]
    //console.log(pos, pos * 100, resp);
    return resp;
  }

  const Line = ( { data, direction, start } ) => (
    <Marquee gradient={false} direction={direction} pauseOnHover={true} pauseOnClick={true}>
      {words.slice(start, 2* start - 1).map( (w,idx) => 
          <span key={idx} style={{
            border: '1px solid rgba(0,0,0,0.1)', 
            padding: "0.5rem", 
            marginRight: '1rem', 
            marginBottom: '0.25rem', 
            fontSize: `${fontSize(w.n)}`,
            color: `${color(w.n)}`,
          }}>{w.p.split(",").join(" ")}</span>
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
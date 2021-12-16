import React from 'react'
import { styled, useTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import Marquee from "react-fast-marquee";

const Word = styled('span')( ({ fontSize, color, theme }) => ({
    border: '1px solid rgba(0,0,0,0.2)', 
    padding: "0.5rem", 
    marginRight: '1rem', 
    marginBottom: '0.25rem', 
    fontSize: `${fontSize}`,
    color: `${color}`,
    backgroundColor: theme.palette.background.paper,
    cursor: 'pointer',
    borderRadius: '5px',
}));

const SLICES = 4
const TopicsMarquee = ( { data, max, min, onTopicClick } ) => {
    const slices = "i-".repeat(SLICES - 1).split("-")
    const size = Math.floor(data.length / SLICES)

    return slices.map( (xxx, i) => 
        <Line onClick={onTopicClick} max={max} min={min} key={i} words={data.slice( size * i, size * ( i + 1 ) ) } direction={(i % 2 == 0) ? "left" : "right"}/>
    )
}

const Line = ( { data, direction, words, max, min, onClick } ) => (
  <Marquee gradient={false} direction={direction} pauseOnHover={true} pauseOnClick={true}>
    {words.map( (w,idx) => 
        <Word key={idx}            
          fontSize={fontSize(w.n, max, min )}
          color={color(w.n, max, min )}
          onClick={() => onClick(w.p) }
        >
          {w.p.split(",").join(" ")}
        </Word>
    )}
  </Marquee>      
)

const fontSize = ( n, max, min ) => {
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
  return "1em";
}

const color = ( n, max, min ) => {
  const theme = useTheme();

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
  pos = ( theme.palette.mode === "dark" ) ? 10 - pos : pos
  const resp = grey[pos * 100]
  return resp;
}

export default TopicsMarquee
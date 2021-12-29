import React from 'react'
import { styled, useTheme } from '@mui/material/styles';
import Marquee from "react-fast-marquee";
import { getGrey } from 'style/colors'
import Skeleton from './topics-marquee-skeleton';

const Word = styled('span')( ({ fontSize, color, backgroundColor, theme }) => ({
    border: '1px solid rgba(0,0,0,0.2)', 
    padding: "0.5rem", 
    marginRight: '1rem', 
    marginBottom: '0.25rem', 
    fontSize: `${fontSize}`,
    color: `${color}`,
    backgroundColor: `${backgroundColor}`,
    cursor: 'pointer',
    borderRadius: '5px',
}));

const SLICES = 4
const TopicsMarquee = ( props ) => {
    const { data, onTopicClick, loading, wordName, wordCount } = props;

    if(data == null || loading) return <Skeleton/>;    

    const slices = "i-".repeat(SLICES - 1).split("-")
    const size = Math.floor(data.length / SLICES)
    const max = wordCount(data[0])
    const min = wordCount(data[ data.length - 1 ])

    return (
        <div>
        {slices.map( (xxx, i) => 
            <Line {...props} onClick={onTopicClick} max={max} min={min} key={i} words={data.slice( size * i, size * ( i + 1 ) ) } direction={(i % 2 == 0) ? "left" : "right"}/>
        )}
        </div>
    )
}

const Line = ( { data, direction, words, max, min, onClick, wordName, wordCount } ) => (
  <Marquee gradient={false} direction={direction} pauseOnHover={true} pauseOnClick={true}>
    {words.map( (w,idx) => 
        <Word key={idx}            
          {...color(wordCount(w), max, min )}
          fontSize={fontSize(wordCount(w), max, min )}
          onClick={() => onClick(wordName(w).toLowerCase()) }
        >
          {wordName(w).toLowerCase()}
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
  return getGrey( theme, pos )
}

export default TopicsMarquee
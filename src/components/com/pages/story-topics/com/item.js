import React, { useEffect, useState, useReducer } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { styled } from '@mui/material/styles';
import { useRouter } from 'next/router'
import { Title, Subtitle, Small, ItemFrame } from 'style/item'
import { Frame } from 'style/boxes'
import Marquee from "react-fast-marquee";
import { grey } from '@mui/material/colors';
import { fetchTopic } from '../automata'

import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const Word = styled('span')( ({ fontSize, color }) => ({
    border: '1px solid rgba(0,0,0,0.2)', 
    padding: "0.5rem", 
    marginRight: '1rem', 
    marginBottom: '0.25rem', 
    fontSize: `${fontSize}`,
    color: `${color}`,
    backgroundColor: "rgba(0,0,0,0.1)",
    cursor: 'pointer',
}));


const initialState = {
  showLines: true,
  showTimeline: false,
  topic: "",
}

function reducer(state, action){
  switch( action.type ){
    case "INIT":
      return {
        ...state,
        showLines: true,
        showTimeline: false,
        topic: "",
      };
    case "SELECT_WORD":
      return {
        ...state,
        showLines: false,
        showTimeline: true,
        topic: action.payload.topic,
      }    
    case "EXIT_TIMELINE":
      return {
        ...state,
        showLines: true,
        showTimeline: false,
        topic: "",
      }
    default:
      throw new Error(`operation ${ action.type?.toUpperCase() } not implemented`)      
  }
}


export const ItemMarquee = ( props ) => {
  const appDispatch = useDispatch()
  const data = useSelector(( state ) => state['story-topics'] )   
  const { max, min, words, genre, year, header=true } = props
  const slices = 4
  const size = Math.floor(words.length / slices)
  const [ state, dispatch ] = useReducer( reducer, initialState )
  const [ topicTimeline, setTopicTimeline ] = useState( {} )

  const onWordClick = ( topic ) => {
    dispatch({type: "SELECT_WORD", payload: { topic: topic } })
    appDispatch( fetchTopic( { entity: "movie", topic: topic } ) )
  }

  useEffect( () => {
    if(!data.topic.data) return;

    var tl = {}
    var genres  = {};

    data.topic.data.forEach( t => {
      if(!tl[t.year]) tl[t.year] = {}
      if(!genres[t.genre]) genres[t.genre] = {}
    })

    

    var resp = {}
    Object.keys(genres).forEach( k => resp[k] = {...tl})

    data.topic.data.forEach( t => {
      resp[t.genre][t.year] = 1
    })

    setTopicTimeline(resp)

  }, [data.topic.data] )

  const cellBG = ( i, active ) => (active) ? "rgba(0,0,0,0.4)" : ( ( i % 2 == 0) ? "rgba(0,0,0,0.1)" : "inherit") 

  return (
    <div style={{padding: '1rem', width: '100%'}}>
      {header && 
        <Frame>
          <Title>{genre.toUpperCase()} {year}</Title>
        </Frame>
      }

      {state.showTimeline && (
        <div>
          <Stack direction="row" style={{marginBottom: '1rem'}}>
            <Chip label={state.topic} onDelete={ () => dispatch({ type: "EXIT_TIMELINE"}) } />
            <div style={{flex: 1}}/>
          </Stack>

          <div style={{ fontSize: '0.6rem', width : '100%', maxHeight: "400px", overflow: 'auto'}}>
            <Table size="small" stickyHeader >
              <TableHead>
                <TableRow>
                <TableCell>&nbsp;</TableCell>
                { Object.keys(topicTimeline).slice(0,1).map( genre => 
                    Object.keys( topicTimeline[genre] ).map( year => 
                      <TableCell align='center'>{year}</TableCell>
                    )
                )}
                <TableCell>&nbsp;</TableCell>
                </TableRow>
              </TableHead>                
              <TableBody>
                { Object.keys(topicTimeline).map( (genre, idx) => 
                  <TableRow style={{ backgroundColor: cellBG( idx, false) }}>
                    <TableCell style={{ backgroundColor: cellBG( 0, (genre == props.genre)) }} >{genre}</TableCell>
                    {Object.keys( topicTimeline[genre] ).map( (year) => 
                      <TableCell style={{ backgroundColor: cellBG( 0, ( year == props.year || genre == props.genre)) }} align='center'>{(topicTimeline[genre][year] == 1) ? "✓" : " " }</TableCell>
                    )}
                    <TableCell style={{ backgroundColor: cellBG( 0, (genre == props.genre)) }} >{genre}</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      )}

      {state.showLines && "i-".repeat(slices - 1).split("-").map( (xxx, i) => 
        <Line onClick={onWordClick} max={max} min={min} key={i} words={words.slice( size * i, size * ( i + 1 ) ) } direction={(i % 2 == 0) ? "left" : "right"}/>        
      )}
    </div>
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
  //return `${sizes[pos] + 10}px`
  return "1em";
}

const color = ( n, max, min ) => {
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
  return resp;
}

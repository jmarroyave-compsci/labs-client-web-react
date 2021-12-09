import React, { useReducer, useEffect, useState, useMemo } from 'react';
import Stack from 'com/ui/stack';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Frame } from 'style/boxes'
import { getDecades } from 'data/enums/years';
import { getGenres } from 'data/enums/genres';
import Button from '@mui/material/Button';

const initialState = {
  decade: null,
  genre: null,
}

function reducer(state, action){
  switch( action.type ){
    case "INIT":
      return {
        ...state,
        decade: (action.payload.decade) ? action.payload.decade : state.decade, 
        genre:  (action.payload.genre) ? action.payload.genre : state.genre, 
      };
    case "DECADE_CHANGE":
      return {
        ...state,
        decade: action.payload
      }    
    case "GENRE_CHANGE":
      return {
        ...state,
        genre: action.payload
      }    
    default:
      throw new Error(`operation ${ action.type?.toUpperCase() } not implemented`)      
  }
}

export default function Parameters( props ){
  const [ expanded, setExpanded ] = useState(false);
  const [ state, dispatch ] = useReducer( reducer, initialState )
  const { params, onChange } = props;
  const decadeData = useMemo( () => getDecades().map( r => ( { label: r, id: r } )  ) , [])
  const genreData = useMemo( () => getGenres().map( r => ( { label: r, id: r } )  ) , [])


  console.log(params)

  useEffect( () => {
    dispatch( { type: "INIT", payload: { 
      decade : decadeData.find( r => r.id == params.decade ),
      genre : genreData.find( r => r.id == params.genre ),
    } } )
  }, [ params ] )


  const onFiltersChanged = () => {    
    const response = { decade: state.decade.id, genre: state.genre.id }
    if (onChange) onChange( response )
  }

  if(!state.decade || !state.genre) return null;

  return (
    <Frame>
      <Stack spacing={2}>
        <Autocomplete
          id="decade"
          disableClearable
          options={decadeData}
          value={state.decade}
          onChange={(e, value) => dispatch( { type: "DECADE_CHANGE", payload: value } ) }
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Decade" />}
        />      
        <Autocomplete
          id="genre"
          disableClearable
          options={genreData}
          value={state.genre}
          onChange={(e, value) => dispatch( { type: "GENRE_CHANGE", payload: value } ) }
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Genre" />}
        />      
        <Frame>
          <Button variant='outlined' onClick={ () => {
            onFiltersChanged();
          } }>Filter</Button>
        </Frame>
      </Stack>
    </Frame>
  )
}



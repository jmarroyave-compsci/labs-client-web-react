import React, { useReducer, useEffect, useState, useMemo } from 'react';
import Stack from 'com/ui/stack';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Frame } from 'style/boxes'
import { getDecades } from 'data/enums/years';
import { getGenres } from 'data/enums/genres';
import Button from '@mui/material/Button';

const initialState = {
  genre: null,
}

function reducer(state, action){
  switch( action.type ){
    case "INIT":
      return {
        ...state,
        genre:  (action.payload.genre) ? action.payload.genre : state.genre, 
      };
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
  const genreData = useMemo( () => getGenres().map( r => ( { label: r, id: r } )  ) , [])

  useEffect( () => {
    dispatch( { type: "INIT", payload: { 
      genre : genreData.find( r => r.id == params.genre ),
    } } )
  }, [ params ] )


  const onFiltersChanged = () => {    
    const response = { genre: state.genre.id }
    if (onChange) onChange( response )
  }

  if(!state.genre) return null;

  return (
    <Frame>
      <Stack spacing={2}>
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



import React, { useReducer, useEffect, useState, useMemo } from 'react';
import Stack from 'com/ui/stack';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Frame } from 'style/boxes'
import { getDecades } from 'data/enums/years';
import Button from '@mui/material/Button';

const initialState = {
  decade: null,
}

function reducer(state, action){
  switch( action.type ){
    case "INIT":
      return {
        ...state,
        decade: (action.payload.decade) ? action.payload.decade : state.decade, 
      };
    case "DECADE_CHANGE":
      return {
        ...state,
        decade: action.payload
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

  useEffect( () => {
    dispatch( { type: "INIT", payload: { decade : decadeData.find( r => r.id == params.decade ) } } )
  }, [ params ] )


  const onFiltersChanged = () => {    
    const response = { decade: state.decade.id }
    if (onChange) onChange( response )
  }

  if(!state.decade) return null;

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
        <Frame>
          <Button variant='outlined' onClick={ () => {
            onFiltersChanged();
          } }>Filter</Button>
        </Frame>
      </Stack>
    </Frame>
  )
}



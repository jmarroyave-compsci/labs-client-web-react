import React, { useReducer, useEffect, useState, useMemo } from 'react';
import Stack from 'com/ui/stack';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Frame } from 'style/boxes'
import { getYears } from 'data/enums/years';
import Button from '@mui/material/Button';

const initialState = {
  year: null,
}

function reducer(state, action){
  switch( action.type ){
    case "INIT":
      return {
        ...state,
        year: (action.payload.year) ? action.payload.year : state.year, 
      };
    case "YEAR_CHANGE":
      return {
        ...state,
        year: action.payload
      }    
    default:
      throw new Error(`operation ${ action.type?.toUpperCase() } not implemented`)      
  }
}

export default function Parameters( props ){
  const [ expanded, setExpanded ] = useState(false);
  const [ state, dispatch ] = useReducer( reducer, initialState )
  const { params, onChange } = props;
  const yearData = useMemo( () => getYears().map( r => ( { label: r, id: r } )  ) , [])  

  useEffect( () => {
    dispatch( { type: "INIT", payload: { year : yearData.find( r => r.id == params.year ) } } )
  }, [ params ] )


  const onFiltersChanged = () => {    
    const response = { year: state.year.id }
    if (onChange) onChange( response )
  }

  if(!state.year) return null;

  return (
    <Frame>
      <Stack spacing={2}>
        <Autocomplete
          id="year"
          disableClearable
          options={yearData}
          value={state.year}
          onChange={(e, value) => dispatch( { type: "YEAR_CHANGE", payload: value } ) }
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Year" />}
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



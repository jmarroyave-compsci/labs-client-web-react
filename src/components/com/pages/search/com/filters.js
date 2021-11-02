import React, { useReducer, useEffect, useState } from 'react';
import { Stack, FormGroup, FormControlLabel, Checkbox } from '@mui/material'
import { Frame } from 'style/boxes'
import { SubTitle, Medium, Small, Notes } from 'style/detail'
import { getEntities } from 'com/entities'
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import ExpandIcon from '@mui/icons-material/ExpandLess';
import CollapseIcon from '@mui/icons-material/ExpandMore';

const initialState = {
  entities: [],
  filterByTimeFrame: false,
  year: new Date().getFullYear(),
  timeFrame: 1,
  timeFrameNotes: "",
}

const getTimeframeNotes = (state) => ( !state.filterByTimeFrame || parseInt(state.year) < 1800 || isNaN(parseInt(state.year)) || isNaN(parseInt(state.timeFrame))) ? " no time frame filter " : `from ${parseInt(state.year) - parseInt(state.timeFrame)} to ${parseInt(state.year) + parseInt(state.timeFrame)}`;

function reducer(state, action){
  switch( action.type ){
    case "INIT":
      return {
        ...state,
        entities : (action.payload.entities) ? action.payload.entities : state.entities,
        year: (action.payload.year) ? action.payload.year : state.year, 
        timeFrame: (action.payload.timeFrame) ? action.payload.timeFrame : state.timeFrame,
      };
    case "ENTITIES_CHANGED":
      var nItem = action.payload.name
      var ents = [];
      var idx = state.entities.indexOf(nItem)
      if(idx < 0){
        ents = state.entities.concat([nItem])
      } else {
        ents = state.entities.filter( a => a != nItem)
      }
      return {
        ...state,
        entities: ents
      }
    case "TOGGLE_FILTER_BY_TIMEFRAME":
      return {
        ...state,
        filterByTimeFrame: !state.filterByTimeFrame
      }    
    case "FIELD_CHANGED":
      return {
        ...state,
        [action.payload.name] : action.payload.value,        
      }
    case "UPDATE_TIMEFRAME_NOTES":
      return {
        ...state,
        timeFrameNotes : getTimeframeNotes(state),
      }
    case "SUBMIT":
      return {
        ...state,
      }
    default:
      throw new Error(`operation ${ action.type?.toUpperCase() } not implemented`)      
  }
}

export default function Filters( props ){
  const [ expanded, setExpanded ] = useState(false);
  const [ state, dispatch ] = useReducer( reducer, initialState )
  const { params, onFiltersChanged } = props;
  const entities = getEntities();  ;

  useEffect( () => {
    dispatch( { type: "INIT", payload: params } )
    dispatch( { type: "UPDATE_TIMEFRAME_NOTES" } )
  }, [ params ] )

  return (
    <>
      <Button onClick={ () => setExpanded(!expanded)} endIcon={(expanded) ? <ExpandIcon/> : <CollapseIcon/>}>Filters</Button>
        <div style={{display: (expanded === false) ? "none" : "block"}}>
          <FormGroup>
            <Frame>        
              <Small>entities</Small>
              <Stack spacing={2} direction='row' style={{width: '100%', overflowX: 'auto'}}>
                {entities.map( (ent, key) => 
                    <FormControlLabel
                        key={key}
                        control={
                          <Switch/>
                        }
                        label={ent.name}
                        labelPlacement="end"
                        name={ent.value}
                        checked={state.entities.includes(ent.value)} 
                        size="small"
                        onChange={(e) => dispatch({ type: "ENTITIES_CHANGED", payload: e.target })}
                    />
                )}
              </Stack>
            </Frame>
            <Frame>
              <Small>
                  <span>time frame </span>
                  <Checkbox size="small" checked={state.filterByTimeFrame} onChange={ ( e ) => { 
                      dispatch( { type: "TOGGLE_FILTER_BY_TIMEFRAME", payload: e.target } ); 
                      dispatch( { type : "UPDATE_TIMEFRAME_NOTES" } ) 
                  }}/>
              </Small>
              <Stack direction='row' spacing={2} style={{width: '100%', overflowX: 'auto'}}>
                <div>
                  <TextField id="year" margin="normal" disabled={!state.filterByTimeFrame} label="year" name="year" value={state.year} 
                    onChange={ (e) => { 
                      dispatch( { type : "FIELD_CHANGED", payload: e.target } ); 
                      dispatch( { type : "UPDATE_TIMEFRAME_NOTES" } ) 
                    } }
                    size="small" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} 
                  />
                </div>
                <div>
                  <TextField id="time-frame" margin="normal" disabled={!state.filterByTimeFrame} label="window" name="timeFrame" value={state.timeFrame} 
                    onChange={ (e) => { 
                      dispatch( { type : "FIELD_CHANGED", payload: e.target } ); 
                      dispatch( { type : "UPDATE_TIMEFRAME_NOTES" } )  
                    } }
                    size="small" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} 
                  />
                </div>
              </Stack>
              <Notes>{state.timeFrameNotes}</Notes>
            </Frame>
            <Frame>
              <Button variant='outlined' onClick={ () => {
                var response = { 
                  ...params,
                  entities: state.entities,
                  year: (state.filterByTimeFrame) ? state.year : null,
                  timeFrame : (state.filterByTimeFrame) ? state.timeFrame : null,                
                } 
                onFiltersChanged( response );
              } }>Filter</Button>
            </Frame>
          </FormGroup>
        </div>
    </>
  )
}



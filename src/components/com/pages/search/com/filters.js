import React from 'react';
import { Stack, FormGroup, FormControlLabel, Checkbox } from '@mui/material'
import { Frame } from 'style/boxes'
import { SubTitle, Small, Notes } from 'style/detail'
import { getEntities } from 'com/entities'
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';

export default function Filters( props ){
  const entities = getEntities();  
  return (
    <>
      <SubTitle>Filters</SubTitle>
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
                      checked={props.params.entities.includes(ent.value)} 
                      onChange={(e) => props.onEntitiesChange(e)}
                  />
              )}
            </Stack>
          </Frame>
          <Frame>
            <Small>time frame</Small>
            <Stack direction='row' spacing={2} style={{width: '100%', overflowX: 'auto'}}>
              <TextField label="year" name="year" value={props.params.year} onChange={(e) => props.onTimeFrameChange(e)} size="small" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} />
              <TextField label="window" name="timeFrame" value={props.params.timeFrame} onChange={(e) => props.onTimeFrameChange(e)} size="small" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} />
            </Stack>
            <Notes>{props.params.timeFrameNotes}</Notes>
          </Frame>
          <Frame>
            <Button onClick={props.onFiltersChanged}>Filter</Button>
          </Frame>
        </FormGroup>
    </>
  )
}



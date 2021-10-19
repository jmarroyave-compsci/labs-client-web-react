import React from 'react';
import { Stack, FormGroup, FormControlLabel, Checkbox } from '@mui/material'
import GridContainer from 'core/ui/layout/grid_container';
import GridItem from 'core/ui/layout/grid_item';
import { SubTitle } from 'components/styles/detail'
import { getEntities } from 'components/entities'

export default function Filters( props ){
  const entities = getEntities();  
  return (
    <>
      <SubTitle>Filters</SubTitle>
      <FormGroup>
        <GridContainer>
          {entities.map( (ent, key) => 
            <GridItem key={key}> 
              <FormControlLabel
                  control={<Checkbox/>}
                  label={ent.name}
                  labelPlacement="top" 
                  name={ent.value}
                  checked={props.data.includes(ent.value)} 
                  onChange={(e) => props.onChange(e)}
              />
            </GridItem>
          )}
        </GridContainer>
      </FormGroup>
    </>
  )
}

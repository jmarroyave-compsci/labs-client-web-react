import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Stack from 'com/ui/stack';
import GridItem from 'core/ui/layout/grid_item';
import GridContainer from 'core/ui/layout/grid_container';

import { 
  Timeline,
  History,
  ItemDetails,
} from "../"


export const Frame = styled('div')({
  margin: "0 0 2rem 0",
  padding: "1rem",
  width: '100%',
  overflow: 'hidden',
});

function Content(props){
    const { data, loading, fetch, params, item } = props;
    return (
    <Frame>
      <GridContainer flex fill spacing={2} >
        <GridItem xs={12}>
          <GridContainer  spacing={2} flex>
            <GridItem xs={12} flex>
              <Timeline/>
            </GridItem>
            <GridItem xs={12} flex>
              <History/>
            </GridItem>
          </GridContainer>
        </GridItem>
        <GridItem xs={12}>
          <ItemDetails/>
        </GridItem>
      </GridContainer>
    </Frame>
    )

}

export default Content
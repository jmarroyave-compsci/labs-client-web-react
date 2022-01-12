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
  padding: "0rem 0.5rem",
  width: '100%',
  overflow: 'hidden',
});

function Content(props){
    const { data, loading, fetch, params, item, height, offset } = props;

    return (
    <Frame>
        <GridContainer>
          <GridItem xs={12} style={{height: (height), overflow: 'hidden', paddingBottom: '2rem'}} >
            <Timeline/>
          </GridItem>
          <GridItem xs={12} style={{height: (height), overflow: 'hidden'}} >
            <History/>
          </GridItem>
          <GridItem xs={12} style={{height: (height), overflow: 'hidden', paddingTop: '2rem'}} >
            <ItemDetails/>
          </GridItem>
        </GridContainer>      
    </Frame>
    )

}

export default Content
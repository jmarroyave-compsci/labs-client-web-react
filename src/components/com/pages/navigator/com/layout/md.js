import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import GridItem from 'core/ui/layout/grid_item';
import GridContainer from 'core/ui/layout/grid_container';

import { 
  Timeline,
  History,
  ItemDetails,
} from "../"

export const Frame = styled('div')({
  margin: "0 0 2rem 0",
  padding: "2rem",
  width: '100%',
  overflow: 'hidden',
});


const Content = (props) => {
    const { data, loading, fetch, params, item } = props;

    return (
    <Frame>
      <GridContainer flex fill spacing={2} >
        <GridItem md={12}>
          <GridContainer  spacing={2} flex>
            <GridItem md={8} flex>
              <Timeline/>
            </GridItem>
            <GridItem md={4} flex>
              <History/>
            </GridItem>
          </GridContainer>
        </GridItem>
        <GridItem md={12}>
          <ItemDetails/>
        </GridItem>
      </GridContainer>
    </Frame>
    )

}

export default Content
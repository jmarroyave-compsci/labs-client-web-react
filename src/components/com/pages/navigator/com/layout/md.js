import React, { useEffect, useState, useRef } from 'react'
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
    const { data, loading, fetch, params, item, height, offset } = props;

    return (
    <Frame>
      <div style={{ height: (height - offset - 64), overflow: 'hidden'}}>
        <GridContainer flex fill style={{height: '100%'}} >
          <GridItem md={12} style={{height: '100%'}} >
            <GridContainer flex style={{height: '100%', paddingBottom: '1rem'}} >
              <GridItem md={8} flex style={{height: '100%', paddingRight: '1rem'}} >
                <Timeline/>
              </GridItem>
              <GridItem md={4} flex style={{height: '100%'}} >
                <History/>
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
      </div>
      <ItemDetails/>
    </Frame>
    )

}

export default Content
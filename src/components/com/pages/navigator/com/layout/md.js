import React, { useEffect, useState, useRef } from 'react'
import { styled } from '@mui/material/styles';
import GridItem from 'core/ui/layout/grid_item';
import GridContainer from 'core/ui/layout/grid_container';
import Shortcuts from '../shortcuts'

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
    const height = (props.height - props.offset - 64)

    return (
    <Frame>
        <Shortcuts/>
        <GridContainer flex fill style={{height: height, overflow: 'hidden'}} >
          <GridItem md={12} style={{height: '100%'}} >
            <GridContainer flex style={{height: '100%', paddingBottom: '1rem'}} >
              <GridItem md={8} flex style={{height: '100%', paddingRight: '1rem'}} >
                <div id='timeline'/>
                <Timeline/>
              </GridItem>
              <GridItem md={4} flex style={{height: '100%'}} >
                <History/>
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
        <GridContainer flex fill style={{height: height, overflow: 'hidden'}} >
          <GridItem md={12} style={{height: '100%'}} >
            <div id='topic'/>
            <ItemDetails/>
          </GridItem>
        </GridContainer>
    </Frame>
    )

}

export default Content
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
  padding: "3rem 2rem",
  width: '100%',
  overflow: 'hidden',
});


const Content = (props) => {
    const { data, loading, fetch, params, item } = props;
    const height = (props.height)
    const size = "MD"

    return (
    <Frame>
        <Shortcuts/>
        <GridContainer flex fill style={{height: height, overflow: 'hidden'}} >
          <GridItem md={12} style={{height: '100%'}} >
            <GridContainer flex style={{height: '100%', paddingBottom: '1.5rem'}} >
              <GridItem md={8} flex style={{height: '100%', paddingRight: '1rem'}} >
                <div id='timeline'/>
                <Timeline size={size}/>
              </GridItem>
              <GridItem md={4} flex style={{height: '100%'}} >
                <History/>
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
        <GridContainer flex fill style={{height: height, overflow: 'hidden'}} >
          <GridItem md={12} style={{height: '100%', marginBottom: '1.5rem'}} >
            <div id='topic'/>
            <ItemDetails/>
          </GridItem>
        </GridContainer>
    </Frame>
    )

}

export default Content
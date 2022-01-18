import React, { useEffect, useState, useRef } from 'react'
import { styled } from '@mui/material/styles';
import GridItem from 'core/ui/layout/grid_item';
import GridContainer from 'core/ui/layout/grid_container';
import Shortcuts from '../shortcuts'
import { Placeholder } from 'style/boxes'

import { 
  Timeline,
  History,
  ItemDetails,
  ItemResults,
} from "../"

export const Frame = styled('div')(( {theme} ) =>({
  margin: "0",
  padding: "0rem 1rem",
  width: '100%',
  overflow: 'hidden',
  backgroundColor: (theme.palette.mode == "light") ? "#f8f8f8" : 'blue',  
}));


const Content = (props) => {
    const { data, loading, fetch, params, item } = props;
    const height = (props.height)
    const size = "MD"

    return (
    <Frame>
        <Shortcuts/>
        <GridContainer flex fill style={{height: height, paddingBottom: '1.5rem', overflow: 'hidden'}} >
          <GridItem md={12} style={{height: '100%'}} >
            <div id='timeline'/>
            <GridContainer flex style={{height: '100%'}} >
              <GridItem md={8} flex style={{height: '100%', padding: '0.2rem', paddingRight: '1rem'}} >
                <Placeholder>
                  <Timeline size={size}/>                    
                </Placeholder>
              </GridItem>
              <GridItem md={4} flex style={{height: '100%', padding: '0.2rem'}} >
                <Placeholder>
                  <History/>
                </Placeholder>
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
        <GridContainer flex fill style={{height: height, paddingBottom: '1.5rem', overflow: 'hidden'}} >
          <GridItem md={12} style={{height: '100%', padding: '0.2rem'}} >
            <div id='topic'/>
            <Placeholder>              
              <ItemDetails/>
            </Placeholder>
          </GridItem>
        </GridContainer>
        <GridContainer flex fill style={{height: height, paddingBottom: '1.5rem', overflow: 'hidden'}} >
          <GridItem md={12} style={{height: '100%', padding: '0.2rem'}} >
            <div id='results'/>
            <Placeholder>
              <ItemResults/>
            </Placeholder>
          </GridItem>
        </GridContainer>
    </Frame>
    )

}

export default Content
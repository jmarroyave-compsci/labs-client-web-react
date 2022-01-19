import React, { useContext, useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Stack from 'com/ui/stack';
import GridItem from 'core/ui/layout/grid_item';
import GridContainer from 'core/ui/layout/grid_container';
import Shortcuts from '../shortcuts'
import { PlaceholderXS as Placeholder } from 'style/boxes'
import { ComponentContext } from '../../context';

import { 
  Timeline,
  History,
  ItemDetails,
  ItemResults,
} from "../"

export const Frame = styled('div')({
  margin: "0",
  padding: "0rem 0",
  width: '100%',
  overflow: 'hidden',
});

function Content(props){
    const context = useContext( ComponentContext );
    const { data, loading, fetch, params, item, height, offset } = props;
    const size = "XS"
    const ui = context.state.ui.page

    return (
    <Frame>
        <Shortcuts showHistory={true} mobile />
        <GridContainer>
          {ui == "TIMELINE" &&
          <GridItem xs={12} style={{height: (height), overflow: 'hidden', paddingBottom: '1.5rem'}} >
            <div id='timeline'/>
            <Placeholder>
              <Timeline size={size}/>
            </Placeholder>              
          </GridItem>
          }
          {ui == "HISTORY" &&
          <GridItem xs={12} style={{height: (height), overflow: 'hidden', paddingBottom: '1.5rem'}} >
            <div id='history'/>
            <Placeholder>              
            <History/>
            </Placeholder>              
          </GridItem>
          }
          {ui == "TOPIC" &&
          <GridItem xs={12} style={{height: (height), overflow: 'hidden', paddingBottom: '1.5rem'}} >
            <div id='topic'/>
            <Placeholder>              
            <ItemDetails/>
            </Placeholder>              
          </GridItem>
          }
          {ui == "RESULTS" &&
          <GridItem xs={12} style={{height: (height), overflow: 'hidden', paddingBottom: '1.5rem'}} >
            <div id='results'/>
            <Placeholder>              
            <ItemResults/>
            </Placeholder>              
          </GridItem>
          }
        </GridContainer>      
    </Frame>
    )

}

export default Content
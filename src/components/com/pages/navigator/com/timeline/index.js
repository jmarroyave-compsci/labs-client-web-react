import React, { useContext,  } from 'react'
import { styled } from '@mui/material/styles';
import Stack from 'com/ui/stack';
import GenreParameter from './genre-parameter';
import YearParameter from './year-parameter';
import DataArea from './data-area';
import Paper from 'com/ui/paper';
import { ComponentContext } from '../../context';
import { Frame, Title  } from 'style/component'
import Help from "../help"

const Navigator = ( {size} ) => {
    const context = useContext( ComponentContext );
    return ( 
      <Frame style={{height: '100%', display: 'flex', flexDirection : 'column'}}>
        <div style={{paddingLeft: '0.5rem'}}>
          <Title>Words Timeline <Help text="presents the most frequent movie title's words for a [decade] and [genre]."/></Title>
          <br/>
        </div>
        <Frame border style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
          <div style={{ flex: 0, border: 0 }}><GenreParameter current={context.state.parameters.genre} /></div>
          <div style={{ flex: 1, overflow: 'hidden', display: 'flex'}}><DataArea size={size} data={context.data.timeline} /></div>
          <div style={{ flex: 0}}><YearParameter current={context.state.parameters.decade} /></div>
        </Frame>
      </Frame>
    )

}

export default Navigator
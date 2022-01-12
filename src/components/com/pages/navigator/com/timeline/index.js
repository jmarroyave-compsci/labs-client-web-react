import React, { useContext,  } from 'react'
import Stack from 'com/ui/stack';
import GenreParameter from './genre-parameter';
import YearParameter from './year-parameter';
import DataArea from './data-area';
import Paper from 'com/ui/paper';
import { ComponentContext } from '../../context';

import { Frame } from 'style/component'

const Navigator = (props) => {
    const context = useContext( ComponentContext );
    return ( 
      <Frame padding={0} style={{height: '100%'}}>
        <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
          <div style={{ flex: 0}}><YearParameter current={context.state.parameters.decade} /></div>
          <div style={{ flex: 1, overflow: 'hidden', display: 'flex'}}><DataArea data={context.data.timeline} /></div>
          <div style={{ flex: 0}}><GenreParameter current={context.state.parameters.genre} /></div>
        </div>
      </Frame>
    )

}

export default Navigator
import React, { useContext,  } from 'react'
import Stack from 'com/ui/stack';
import GenreParameter from './genre-parameter';
import YearParameter from './year-parameter';
import DataArea from './data-area';
import Paper from 'com/ui/paper';
import { ComponentContext } from '../../context';
import { Frame, Title  } from 'style/component'

const Navigator = ( {size} ) => {
    const context = useContext( ComponentContext );
    return ( 
      <Frame style={{height: '100%', display: 'flex', flexDirection : 'column'}}>
        <div>
          <Title>Topics Timeline (movie titles)</Title>
          <br/>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
          <div style={{ flex: 0}}><YearParameter current={context.state.parameters.decade} /></div>
          <div style={{ flex: 1, overflow: 'hidden', display: 'flex'}}><DataArea size={size} data={context.data.timeline} /></div>
          <div style={{ flex: 0}}><GenreParameter current={context.state.parameters.genre} /></div>
        </div>
      </Frame>
    )

}

export default Navigator
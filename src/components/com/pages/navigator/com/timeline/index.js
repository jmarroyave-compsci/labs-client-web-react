import React, { useContext,  } from 'react'
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
        <div>
          <Title>Words Timeline <Help text="presents the most frequent movie title's words for a [decade] and [genre], fetched from different movie database sources"/></Title>
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
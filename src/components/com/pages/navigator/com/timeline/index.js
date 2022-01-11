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
    const { height=400 } = props
    return ( 
      <Frame padding={0}>
        <YearParameter current={context.state.parameters.decade} />
        <DataArea height={height} data={context.data.timeline} />
        <GenreParameter current={context.state.parameters.genre} />
      </Frame>
    )

}

export default Navigator
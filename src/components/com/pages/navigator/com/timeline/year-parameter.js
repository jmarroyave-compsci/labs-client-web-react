import React, { useContext, useMemo } from 'react'
import Stack from 'com/ui/stack';
import { ComponentContext } from '../../context';
import { getDecades } from 'data/enums/years';
import { Item } from 'style/component';

function YearsParameters(props){
    const context = useContext( ComponentContext );
    const decades = useMemo( ()=> getDecades({ascending : true}), [])

    const onClick = ( p ) => context.dispatch( { type: "CHANGE_DECADE", payload: p }) 

    return (
      <Stack direction='row' spacing={2}  style={{ overflowX: "scroll"}}>
        { decades.map( (d,idx) => 
          <Item key={idx} onClick={ () => onClick(d) } selected={(context.state.parameters.decade == d)}>{d}</Item>
        )}
      </Stack>
    )

}

export default YearsParameters
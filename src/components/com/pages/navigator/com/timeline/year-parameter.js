import React, { useContext, useMemo } from 'react'
import Stack from 'com/ui/stack';
import { ComponentContext } from '../../context';
import { getDecades } from 'data/enums/years';
import { Item } from 'style/component';

function YearsParameters(props){
    const context = useContext( ComponentContext );
    const decades = useMemo( ()=> getDecades({ascending : true}), [])
    const current = context.state.parameters.decade
    const onClick = ( p ) => context.dispatch( { type: "CHANGE_DECADE", payload: p }) 

    return (
      <Stack direction='row' spacing={2} style={{ overflowX: "auto", margin: '0 1rem'}}>
        { decades.map( (d,idx) => 
          <Item key={idx} onClick={ () => onClick(d) } selected={(current == d)}>
            <span style={{ fontSize: (d.slice(2,4) == "00") ? "110%" : '100%' }}>{(current == d || d.slice(2,4) == "00" || idx == 0) ? d : d.slice(2,4)}</span>
          </Item>
        )}
      </Stack>
    )

}

export default YearsParameters
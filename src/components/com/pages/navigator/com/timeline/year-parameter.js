import React, { useContext, useMemo } from 'react'
import { ComponentContext } from '../../context';
import { getDecades } from 'data/enums/years';
import ParameterList from '../parameter-list'

function YearsParameters(props){
    const context = useContext( ComponentContext );
    const decades = useMemo( ()=> getDecades({ascending : true}), [])
    const current = context.state.parameters.decade
    const onClick = ( p ) => context.dispatch( { type: "CHANGE_DECADE", payload: p }) 
    const textMap = (d, idx) => <span style={{ fontSize: (d.slice(2,4) == "00") ? "110%" : '100%' }}>{(current == d || d.slice(2,4) == "00" || idx == 0) ? d : d.slice(2,4)}</span>

    return (
      <ParameterList 
        borderWidth="1px 0 0 0"      
        data={decades} current={current} onClick={onClick} textMap={textMap}/>
    )

}

export default YearsParameters
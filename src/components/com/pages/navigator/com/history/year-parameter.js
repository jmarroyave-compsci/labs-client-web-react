import React from 'react'
import ParameterList from '../parameter-list'

function YearsParameters( { data, current, onClick} ){
    const textMap = (d, i) => (d == current || i == 0) ? d : d.slice(3,4)

    return (
      <ParameterList data={data} current={current} onClick={onClick} textMap={textMap}/>
    )

}

export default YearsParameters
import React, { useState, useEffect } from 'react'
import ParameterList from '../parameter-list'

function YearsParameters( { data, current, onClick} ){
    const [ years, setYears ] = useState( [] )
    const [ year, setYear ] = useState( null )

    useEffect( () => {
      if(!data) return;

      var d = Object.keys(data);
      setYears(d)
      _setYear(d[0])
    }, [ data ])

    const _setYear = ( year ) => {
      setYear( year )
      if(onClick) onClick(year)
    }

    const textMap = (d, i) => (d == current || i == 0) ? d : d.slice(2,4)

    return (
      <ParameterList data={years} current={current} onClick={onClick} textMap={textMap} />
    )

}

export default YearsParameters
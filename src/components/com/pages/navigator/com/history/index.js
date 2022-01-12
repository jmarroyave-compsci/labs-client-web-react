import React, { useContext, useEffect, useRef, useState } from 'react'
import { ComponentContext } from '../../context';
import Stack from 'com/ui/stack';
import { Frame, Title, SubTitle, Small, Medium, Notes, Item, Sub  } from 'style/component'
import { getHistory } from 'data/history';

function History(props){
    const [ history, setHistory ] = useState( {} )
    const [ years, setYears ] = useState( [] )
    const [ year, setYear ] = useState( null )
    const context = useContext( ComponentContext );
    const current = context.state.parameters.decade;

    useEffect( () => {
      if(!current) return;
      const d = getHistory( {decade : current} ) 
      setHistory(d);
      setYears(Object.keys(d))
      setYear(Object.keys(d)[0])
    }, [ current ])

    return (
      <Frame>
        <Stack style={{ display: 'flex', overflow: 'hidden', height: "100%"}}>
          <Title>History</Title>
          <Stack direction='row' spacing={2} style={{ overflowX : 'auto', margin: "0 1rem"}}>
            {years.map( (_year, ydx) =>
              <Item key={_year} selected={ year == _year} onClick={() => setYear(_year) } >
                {(year == _year || ydx == 0) ? _year : _year.slice(3,4)}
              </Item>
            )}   
          </Stack>
          <div style={{ flex: 1, overflowY: "scroll"}}>
            {year && history[year].map( (item, idx) => 
              <div key={idx} >
                <div><Notes>{item.date}</Notes></div>
                <div><Small>{item.event}</Small></div>
              </div>
            )}
            <br/>
          </div>  
        </Stack>
      </Frame>
    )

}

export default History
import React, { useContext, useEffect, useRef, useState } from 'react'
import { ComponentContext } from '../../context';
import Stack from 'com/ui/stack';
import { Frame, Title, Item  } from 'style/component'
import { getHistory } from 'data/history';
import TextHistory from './text-history'
import TaggedHistory from './tagged-history'
import YearParameter from './year-parameter'

function History(props){
    const [ mode, setMode ] = useState( "TEXT" )
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
          <Stack direction="row" spacing={2}>
            <Title>History</Title>
            <Stack direction='row' spacing={0}>
              <Item onClick={() => setMode("TEXT")} selected={ mode === "TEXT" }>by text</Item>
              <Item onClick={() => setMode("TAGS")} selected={ mode === "TAGS" }>by tags</Item>
            </Stack>
          </Stack>
          <br/>
          <YearParameter data={years} current={year} onClick={(_year) => setYear(_year)}/>
          {mode === "TEXT" && <TextHistory year={year} data={history} onClick={(w) => context.dispatch( { type: "SELECT_TOPIC", payload: w.toLowerCase() }) } />}
          {mode === "TAGS" && <TaggedHistory year={year} data={history} onClick={(w) => context.dispatch( { type: "SELECT_TOPIC", payload: w.toLowerCase() }) } />}
        </Stack>
      </Frame>
    )

}

export default History
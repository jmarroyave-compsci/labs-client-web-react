import React, { useContext, useEffect } from 'react'
import Stack from 'com/ui/stack';
import { ComponentContext } from '../../context';
import { Loading } from '../';
import { Item } from 'style/component';

function DataArea(props){
    const context = useContext( ComponentContext );
    const records = context.data.timeline.records;
    const { height=400 } = props

    const onClick = ( p ) => context.dispatch( { type: "SELECT_TOPIC", payload: p }) 

    return (
      <div style={{ height: `${height}px`, overflow: "scroll", margin: "0.5rem 0 0.5rem 0" }}>
        {context.data.timeline.loading ? 
            <Loading/>
          :
            <Stack direction='column' spacing={1}> 
              {(records.length === 0 || records[0].words.length == 0) && <div>no data</div>}
              {records.map( (d, idx) => 
                d.words.slice(0,25).map( (w, widx) => 
                  <Item key={widx} onClick={() => onClick(w.p) } selected={context.state.parameters.topic === w.p} >
                    {w.p}
                  </Item>
                )
              )}
            </Stack>
        }
      </div>
    )

}

export default DataArea
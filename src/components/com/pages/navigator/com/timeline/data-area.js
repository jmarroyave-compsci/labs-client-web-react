import React, { useContext, useEffect, useRef } from 'react'
import Stack from 'com/ui/stack';
import { ComponentContext } from '../../context';
import { Loading } from '../';
import { Item } from 'style/component';
import { Scrollbars } from 'react-custom-scrollbars';

function DataArea(props){
    const context = useContext( ComponentContext );
    const records = context.data.timeline.records;
    const current = context.state.parameters.topic
    const decade = parseInt(context.state.parameters.decade)
    const { height=400 } = props

    const onClick = ( p ) => context.dispatch( { type: "SELECT_TOPIC", payload: p }) 

    return (
      <div style={{ flex: 1, margin: "0.5rem 0 0.5rem 0", width: "100%", textAlign: 'center' }}>
        {context.data.timeline.loading || !records ? 
            <Loading/>
          :
            <Scrollbars style={{flex: 1}}>
                <Stack direction='row' spacing={2} style={{justifyContent: "center", overflowX: 'hidden'}}>
                  <DataAreaColumn n={30} style={{color: "#c0c0c0" , fontSize: '1rem', }} current={current} records={records.filter( r => r.year == decade - 10)} onClick={onClick}/>  
                  <DataAreaColumn n={24} style={{fontSize: '1.5rem', }} current={current} records={records.filter( r => r.year == decade)} onClick={onClick}/>  
                  <DataAreaColumn n={30} style={{color: "#c0c0c0" ,fontSize: '1rem', }} current={current} records={records.filter( r => r.year == decade + 10)} onClick={onClick}/>  
                </Stack> 
            </Scrollbars>
        }
      </div>
    )

}

function DataAreaColumn( { style, current, records, onClick, n } ){
  records = ( !records || records.length == 0 || records[0].words.length == 0 ) ? null : records[0];

  return (
    <Stack direction='column' spacing={1} style={{width: "200px", textAlign: 'center'}}> 
        {(!records || !records.words || records.words.length == 0) && <div style={{...style, userSelect: 'none'}}>[ no data ]</div>}
        {records && records.words.slice(0,n).map( (w, widx) => 
          <Item key={widx} onClick={() => onClick(w.p) } selectedStyle={{ fontWeight: 800}} selected={current === w.p} style={style} >
            {w.p}
          </Item>
        )}
      </Stack>

  )
}

export default DataArea
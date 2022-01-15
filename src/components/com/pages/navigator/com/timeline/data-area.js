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
    const { height=400, size } = props
    const nratio = (size == "XS") ? 1 : 2;

    const onClick = ( p ) => context.dispatch( { type: "SELECT_TOPIC", payload: p }) 

    var neighbors = [0]; for(var i = 1; i <= nratio; i++) { neighbors.push(i); neighbors.push(-i)}; neighbors = neighbors.sort( (a,b) => (parseInt(a) < parseInt(b)) ? -1 : 1 )

    return (
      <div style={{ flex: 1, margin: "0.5rem 0 0.5rem 0", width: "100%", textAlign: 'center' }}>
        {context.data.timeline.loading || !records ? 
            <Loading/>
          :
            <Scrollbars style={{flex: 1}}>
                <Stack direction='row' spacing={2} style={{justifyContent: "center", overflowX: 'hidden'}}>                  
                  {neighbors.map( l => 
                    <DataAreaColumn 
                      key={l} 
                      level={Math.abs(l)} 
                      current={current} 
                      records={records.filter( r => r.year == decade + (10 * l))} 
                      decade={decade + (10 * l)} onClick={onClick}
                    />  
                  )}                  
                </Stack> 
            </Scrollbars>
        }
      </div>
    )

}

function DataAreaColumn( { decade, level, current, records, onClick } ){
  records = ( !records || records.length == 0 || records[0].words.length == 0 ) ? null : records[0];
  var style = {}, n;

  switch( level ) {
    case 0:
      style.paddingTop = "0"
      style.fontSize = '1.5rem'
      n = 24
      break;
    case 1:
      style.paddingTop = "1rem"
      style.fontSize = '1rem'
      style.opacity = "0.65"      
      n = 29
      break;
    case 2:
      style.paddingTop = "2rem"
      style.fontSize = '0.75rem'
      style.opacity = "0.4"      
      n = 30
      break;
  } 
  return (
    <Stack direction='column' spacing={1} style={{width: "200px", textAlign: 'center'}}> 
        <div style={{...style, userSelect: 'none'}}>{decade}</div>
        {(!records || !records.words || records.words.length == 0) && <div style={{...style, whiteSpace: 'nowrap', userSelect: 'none'}}>[ no data ]</div>}
        {records && records.words.slice(0,n).map( (w, widx) => 
          <Item key={widx} onClick={() => onClick(w.p) } selectedStyle={{ fontWeight: 800}} selected={current === w.p} style={style} >
            {w.p}
          </Item>
        )}
      </Stack>

  )
}

export default DataArea
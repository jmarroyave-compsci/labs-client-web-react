import React, { useContext, useEffect, useRef } from 'react'
import Stack from 'com/ui/stack';
import { ComponentContext } from '../../context';
import { Loading } from '../';
import { Item } from 'style/component';
import { Scrollbars } from 'react-custom-scrollbars';
import { styled } from '@mui/material/styles';

function DataArea(props){
    const context = useContext( ComponentContext );
    const records = context.data.timeline.records;
    const current = context.state.parameters.topic
    const decade = parseInt(context.state.parameters.decade)
    const { height=400, size } = props
    const nratio = (size == "XS") ? 1 : 2;

    const onClick = ( p ) => context.dispatch( { type: "SELECT_TOPIC", payload: p }) 

    var neighbors = [0]; for(var i = 1; i <= nratio; i++) { neighbors.push(i); neighbors.push(-i)}; neighbors = neighbors.sort( (a,b) => (parseInt(a) < parseInt(b)) ? -1 : 1 )
    const widths = (nratio == 1) ? [50,25] : [30,20,15]

    return (
      <div style={{ flex: 1, margin: "0", width: "100%", textAlign: 'center', padding: "0 0.5rem 0 0" }}>
        <Scrollbars style={{flex: 1}}>
            <Stack direction='row' spacing={2} style={{justifyContent: "center", overflowX: 'hidden'}}>                  
            {neighbors.map( l => 
              <div key={l} style={{margin: 0, padding: 0, width: `${widths[Math.abs(l)]}%`, overflow: 'hidden'}}>
                <DataAreaColumn 
                  level={Math.abs(l)} 
                  current={current} 
                  records={records?.filter( r => r.year == decade + (10 * l))} 
                  decade={decade + (10 * l)} onClick={onClick}
                  loading={context.data.timeline.loading}
                />  
              </div>               
            )}   
            </Stack> 
        </Scrollbars>
      </div>
    )

}



const Label = styled('div')({
  userSelect : 'none',
  whiteSpace: 'nowrap',
});

function DataAreaColumn( { decade, level, current, records, onClick, loading } ){
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
      style.opacity = "0.75"      
      n = 29
      break;
    case 2:
      style.paddingTop = "2rem"
      style.fontSize = '0.75rem'
      style.opacity = "0.6"      
      n = 30
      break;
  } 
  return (
    <Stack direction='column' spacing={1} style={{...style, width: "100%", textAlign: 'center'}}> 
        <Label style={{fontSize: "60%", opacity: 0.8}}>{decade}</Label>
        {(!records || !records.words || records.words.length == 0) ? 
          ((loading) ? <Loading/> : <Label>[ no data ]</Label>)
        :
          records && records.words.slice(0,n).map( (w, widx) => 
            <Item key={widx} onClick={() => onClick(w.p) } selectedStyle={{ fontWeight: 800}} selected={current === w.p} style={style} >
              {w.p}
            </Item>
          )
        }
      </Stack>

  )
}

export default DataArea
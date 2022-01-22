import React, { useEffect, useRef, useState } from 'react'
import { styled } from '@mui/material/styles';
import Stack from 'com/ui/stack';
import { Item } from 'style/component';
import { Scrollbars } from 'react-custom-scrollbars';

const Selected = styled('div')(({theme, width, height}) => ({
  backgroundColor: theme.palette.action.selected,
  margin: "0",
  padding: "0.5rem",
  color: theme.palette.text.primary,
  alignItems: 'center',
  whiteSpace: 'nowrap',  
  userSelect: 'none',
}));

const Frame = styled(Stack)(({theme, disabled, borderWidth="1px 0 1px 0"}) => ({
  borderWidth: borderWidth,
  borderStyle: 'solid',
  borderColor: theme.palette.action.selected,
}))

const ParameterList = ( { disabled=false, data, current, onClick, textMap=(i)=>i, borderWidth } ) => {
  const ref = useRef()
  const [ actual, setActual ] = useState(current)
  
  const _onClick = ( p ) => {
    setActual(p)
    if(onClick) onClick(p)
  }

  const isSelected = ( item ) => actual == item

  const scrollToCurrent = () => {
    const p = ref.current.container
    const d = p.querySelector(`#_${current}`)
    if(!d) return;
    const delta = p.parentNode.getBoundingClientRect().width - p.getBoundingClientRect().width
    var x = (p.getBoundingClientRect().width - d.getBoundingClientRect().width) / 2
    //x = d.offsetLeft - x
    x = d.offsetLeft
    d.parentNode.parentNode.scrollTo( (x > 0) ? x : 0 , 0)    
  }

  useEffect( () => {    
    if(current == null) return
    if(current == actual) return
    setActual(current)
    scrollToCurrent()
  }, [ current ])

  useEffect( () => {    
    if(current == null) return
    scrollToCurrent()
  }, [  ])

  return (
      <Frame direction='row' spacing={2} borderWidth={borderWidth}>
        <Selected>{actual}</Selected>
        <Scrollbars autoHeight ref={ref}>
            <Stack direction='row' spacing={2} style={{border: 0, paddingBottom: "0.75rem",  pointerEvents: (disabled) ? 'none' : 'inherit', filter: (disabled) ? 'blur(2px)' : 'none',}}>
              { data.map( (g,idx) => 
                <React.Fragment key={idx}>
                  <Item id={`_${g}`} style={{ opacity: (isSelected(g)) ? 1 : 0.8 }} onClick={ () => _onClick(g) } selected={isSelected(g)}>
                    {textMap(g, idx)}
                  </Item>
                </React.Fragment>
              )}
            </Stack>
        </Scrollbars>
      </Frame>
    )
}

export default ParameterList
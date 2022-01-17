import React, { useEffect, useRef } from 'react'
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

const Frame = styled(Stack)(({theme}) => ({
  border: "1px solid",
  borderColor: theme.palette.action.selected,
}))

const ParameterList = ( { data, current, onClick, textMap=(i)=>i } ) => {
  const ref = useRef()
  const _onClick = ( p ) => {
    if(onClick) onClick(p)
  }

  const isSelected = ( item ) => current == item

  useEffect( () => {    
    const p = ref.current.container
    const d = p.querySelector(`#_${current}`)
    if(!d) return;
    d.parentNode.parentNode.scrollTo(d.offsetLeft, 0)
  }, [])

    return (
      <Frame direction='row' spacing={2}>
        <Selected>{current}</Selected>
        <Scrollbars autoHeight ref={ref}>
            <Stack direction='row' spacing={2} style={{paddingBottom: "0.75rem"}}>
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
import React from 'react'
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
}));

const Frame = styled(Stack)(({theme}) => ({
  border: "1px solid",
  borderColor: theme.palette.action.selected,
}))

const ParameterList = ( { data, current, onClick, textMap=(i)=>i } ) => {
    const _onClick = ( p ) => {
      if(onClick) onClick(p)
    }

    return (
      <Frame direction='row' spacing={2}>
        <Selected>{current}</Selected>
        <Scrollbars autoHide autoHeight>
            <Stack direction='row' spacing={2} style={{paddingBottom: "0.75rem"}}>
              { data.map( (g,idx) => 
                <Item key={idx} onClick={ () => _onClick(g) } selected={(current == g)}>
                  {textMap(g, idx)}
                </Item>
              )}
            </Stack>
        </Scrollbars>
      </Frame>
    )
}

export default ParameterList
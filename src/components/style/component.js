import React from 'react'
import { styled } from '@mui/material/styles';
import Paper from 'core/ui/paper';
import ButtonBase from '@mui/material/ButtonBase';
import { Title, SubTitle, Small, Medium } from './item'

const Frame = styled(Paper)( ( { padding="1rem", height='inherit' } ) => ({
  margin: "0.1rem",
  marginBottom: "1rem",
  padding: padding,
  width: '100%',
  overflow: 'hidden',
  flex: 1,
  height: height,
}));

const Notes = styled('span')({
  fontSize: "0.6rem",
  lineHeight: "0.75rem",    
  fontWeight: 500,
  margin: 0,
});

const _Item = styled('div')( ( {  } ) => ({
  margin: "0",
  padding: "0.5rem",
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  fontFamily: 'Roboto',
}));

const Item = ( { selected, selectedStyle={fontWeight: 800}, onClick, children, style={} } ) => {
  return (
      <ButtonBase
          onClick={event => { if(onClick) onClick(event) }}
      >
        <_Item>
          {( selected ) ? 
            <span style={ { ...style, ...selectedStyle  } }>{children}</span>
            :
            <span style={ { ...style } }>{children}</span>
          }
          
        </_Item>
      </ButtonBase>  
    )
}


const _Sub = styled('span')( ( {  } ) => ({
  margin: 0,
  marginLeft: "0.25rem",
  padding: 0,
  fontSize: "0.5rem",
  lineHeight: "0.55rem",    
}));

const Sub = ( props ) => {
  return (
      <_Sub {...props}>[{props.children}]</_Sub>
    )
}

export {
  Title, SubTitle, Small, Medium, Notes, Frame, Item, Sub, 
}
